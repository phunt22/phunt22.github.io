import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CleanHome() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [mouseTrail, setMouseTrail] = useState([]);
    const [isHoveringNav, setIsHoveringNav] = useState(false);
    const containerRef = useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 40 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 40 });

    // Mouse tracking with trail
    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;

                const newPos = { x: e.clientX, y: e.clientY };
                setMousePos(newPos);
                mouseX.set(x);
                mouseY.set(y);

                setMouseTrail(prev => [
                    newPos,
                    ...prev
                ]);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative flex-1 bg-white overflow-hidden ${isHoveringNav ? 'cursor-auto' : 'cursor-none'}`}
            style={{
                // ...spotlightStyle, 
                minHeight: 'calc(100vh - 80px)'
            }}
        >
            {/* Custom Cursor with Trail */}
            <CustomCursor mousePos={mousePos} mouseTrail={mouseTrail} isHoveringNav={isHoveringNav} />

            {/* Main Content Grid */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-6xl mx-auto px-8">
                    <div className="grid grid-cols-12 gap-8 items-center min-h-screen">

                        {/* Left Side - Text Content */}
                        <div className="col-span-7 space-y-8">
                            <AnimatedTitle mousePos={mousePos} isLoaded={isLoaded} />
                            <AnimatedSubtitle isLoaded={isLoaded} />
                            <MagneticButton mousePos={mousePos} />
                        </div>

                        {/* Right Side - Photo */}
                        <div className="col-span-5 flex justify-end">
                            <InteractivePhoto mouseX={smoothMouseX} mouseY={smoothMouseY} isLoaded={isLoaded} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="cursor-auto">
                <MagneticNav mousePos={mousePos} setIsHoveringNav={setIsHoveringNav} />
            </div>

            {/* Subtle Grid Background */}
            {/* <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="w-full h-full" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />
            </div> */}
        </div>
    );
}

// Persistent paint trail (behind everything) and simple cursor
const CustomCursor = ({ mousePos, mouseTrail, isHoveringNav }) => {
    return (
        <>
            {/* Paint trail that stays behind everything */}
            {mouseTrail.length > 1 && (
                <svg
                    className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(79, 70, 229, 0)" />
                            <stop offset="30%" stopColor="rgba(79, 70, 229, 0.05)" />
                            <stop offset="70%" stopColor="rgba(79, 70, 229, 0.1)" />
                            <stop offset="100%" stopColor="rgba(79, 70, 229, 0.15)" />
                        </linearGradient>
                    </defs>

                    <path
                        d={mouseTrail.length > 1 ? `M ${mouseTrail.map((pos, i) => `${pos.x},${pos.y}`).join(' L ')}` : ''}
                        stroke="url(#brushGradient)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* Simple free-flowing cursor dot - hidden when hovering nav */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#4b2e83] rounded-full pointer-events-none z-50"
                style={{
                    x: mousePos.x - 4,
                    y: mousePos.y - 4,
                }}
                animate={{
                    opacity: isHoveringNav ? 0 : 1,
                }}
                transition={{
                    opacity: { duration: 0.2 }
                }}
            />
        </>
    );
};

// Animated title that reveals on mouse proximity
const AnimatedTitle = ({ mousePos, isLoaded }) => {
    const name = "Will Hunt";
    const greeting = "Hi, I'm ";

    return (
        <div className="space-y-2">
            <motion.p
                className="text-lg text-gray-600 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {greeting}
            </motion.p>

            <div className="overflow-visible">
                <h1 className="text-7xl font-bold text-gray-900 leading-none">
                    {name.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block">
                            {word.split('').map((letter, letterIndex) => {
                                const globalIndex = wordIndex === 0 ? letterIndex : 5 + letterIndex; // "Will " = 5 chars
                                return (
                                    <AnimatedLetter
                                        key={globalIndex}
                                        letter={letter}
                                        index={globalIndex}
                                        isLoaded={isLoaded}
                                        mousePos={mousePos}
                                    />
                                );
                            })}
                            {wordIndex < name.split(' ').length - 1 && (
                                <AnimatedLetter
                                    key={`space-${wordIndex}`}
                                    letter=" "
                                    index={wordIndex === 0 ? 4 : 8}
                                    isLoaded={isLoaded}
                                    mousePos={mousePos}
                                />
                            )}
                        </span>
                    ))}
                </h1>
            </div>
        </div>
    );
};

// Simple letter animation with enhanced hover
const AnimatedLetter = ({ letter, index, isLoaded, mousePos }) => {
    // Calculate proximity to mouse for magnetic effect
    const letterRef = useRef(null);
    const [proximity, setProximity] = useState(0);

    useEffect(() => {
        if (!letterRef.current || !mousePos) return;

        const rect = letterRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
            Math.pow(mousePos.x - centerX, 2) +
            Math.pow(mousePos.y - centerY, 2)
        );

        // Increased radius from 60px to 120px for bigger hover area
        const maxRadius = 60;
        const proximityValue = Math.max(0, 1 - distance / maxRadius);
        setProximity(proximityValue);
    }, [mousePos]);

    return (
        <motion.span
            ref={letterRef}
            className="inline-block px-1 py-2 -mx-1 -my-2 rounded-lg hover:text-[#4b2e83] transition-all duration-300 cursor-default"
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: isLoaded ? 1 : 0,
                y: isLoaded ? 0 : 50,
            }}
            transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.05,
            }}
            style={{
                color: proximity > 0 ? '#4b2e83' : undefined,
                transform: `scale(${1 + proximity * 0.1}) translateY(${-proximity * 3}px)`,
            }}
        >
            {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
    );
};

// Animated subtitle
const AnimatedSubtitle = ({ isLoaded }) => {

    return (
        <motion.p
            className="text-xl text-gray-500 font-light max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.4 }}
        >
            Scrappy, people-focused SWE graduating from UW in March 2026
        </motion.p>
    );
};

// Magnetic button that pulls toward mouse
const MagneticButton = ({ mousePos }) => {
    const buttonRef = useRef(null);
    const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = () => {
            const rect = button.getBoundingClientRect();
            const buttonCenter = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };

            const distance = Math.sqrt(
                Math.pow(mousePos.x - buttonCenter.x, 2) +
                Math.pow(mousePos.y - buttonCenter.y, 2)
            );

            if (distance < 120) {
                const strength = Math.max(0, (120 - distance) / 120);
                const angle = Math.atan2(mousePos.y - buttonCenter.y, mousePos.x - buttonCenter.x);

                setButtonPos({
                    x: Math.cos(angle) * strength * 6,
                    y: Math.sin(angle) * strength * 6
                });
            } else {
                setButtonPos({ x: 0, y: 0 });
            }
        };

        handleMouseMove();
    }, [mousePos]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
        >
            <motion.button
                ref={buttonRef}
                className="relative overflow-hidden rounded-full bg-[#4b2e83] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-semibold text-white shadow-lg hover:shadow-[#4b2e83]/30 focus-visible:outline-[#4b2e83] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out whitespace-nowrap"
                animate={{
                    x: buttonPos.x,
                    y: buttonPos.y
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/assets/Resume.pdf', '_blank')}
            >
                Download Resume
            </motion.button>
        </motion.div>
    );
};

// Interactive photo with reveal effect
const InteractivePhoto = ({ mouseX, mouseY, isLoaded }) => {
    const photoRef = useRef(null);

    // Subtle parallax effect based on mouse position
    const offsetX = useTransform(mouseX, [0, 1], [-8, 8]);
    const offsetY = useTransform(mouseY, [0, 1], [-8, 8]);

    return (
        <motion.div
            ref={photoRef}
            className="relative w-80 h-80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 1, delay: 1.0 }}
            style={{ x: offsetX, y: offsetY }}
        >
            {/* Photo container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100">
                <img
                    src="/assets/optimized/headshot.jpg"
                    alt="Will Hunt"
                    className="w-full h-full object-cover"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
        </motion.div>
    );
};

// Magnetic navigation
const MagneticNav = ({ mousePos, setIsHoveringNav }) => {
    const navItems = [
        { label: 'Projects', href: '/projects' },
        // { label: 'Experience', href: '/experience' }
    ];

    return (
        <nav className="absolute top-8 right-8">
            <div className="flex space-x-8">
                {navItems.map((item, index) => (
                    <MagneticNavItem
                        key={item.label}
                        item={item}
                        mousePos={mousePos}
                        index={index}
                        setIsHoveringNav={setIsHoveringNav}
                    />
                ))}
            </div>
        </nav>
    );
};

const MagneticNavItem = ({ item, mousePos, index, setIsHoveringNav }) => {
    const itemRef = useRef(null);
    const [itemPos, setItemPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const element = itemRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const itemCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };

        const distance = Math.sqrt(
            Math.pow(mousePos.x - itemCenter.x, 2) +
            Math.pow(mousePos.y - itemCenter.y, 2)
        );

        if (distance < 80) {
            const strength = Math.max(0, (80 - distance) / 80);
            const angle = Math.atan2(mousePos.y - itemCenter.y, mousePos.x - itemCenter.x);

            setItemPos({
                x: Math.cos(angle) * strength * 4,
                y: Math.sin(angle) * strength * 4
            });
        } else {
            setItemPos({ x: 0, y: 0 });
        }
    }, [mousePos]);

    return (
        <motion.div
            ref={itemRef}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: 0,
                x: itemPos.x,
                y: itemPos.y
            }}
            transition={{
                opacity: { duration: 0.6, delay: 2.5 + index * 0.1 },
                y: { duration: 0.6, delay: 2.5 + index * 0.1 },
                x: { type: "spring", stiffness: 300, damping: 30 },
                y: { type: "spring", stiffness: 300, damping: 30 }
            }}
            onMouseEnter={() => setIsHoveringNav(true)}
            onMouseLeave={() => setIsHoveringNav(false)}
        >
            <Link to={item.href} className="block">
                {item.label}
            </Link>
        </motion.div>
    );
};
