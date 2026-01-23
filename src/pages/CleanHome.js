import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import resumePdf from "../assets/Resume.pdf";

export default function CleanHome() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [shouldAnimateIntro] = useState(() => {
        if (typeof window === 'undefined') return true;
        return sessionStorage.getItem('homeVisited') !== 'true';
    });
    const [isLoaded, setIsLoaded] = useState(() => !shouldAnimateIntro);
    const [mouseTrail, setMouseTrail] = useState([]);
    const [isHoveringNav, setIsHoveringNav] = useState(false);
    const [showClearHint, setShowClearHint] = useState(false);
    const containerRef = useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 40 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 40 });

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
                    ...prev.slice(0, 499)
                ]);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        if (!shouldAnimateIntro) {
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('homeVisited', 'true');
            }
            setIsLoaded(true);
            return;
        }

        const timer = setTimeout(() => {
            setIsLoaded(true);
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('homeVisited', 'true');
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [shouldAnimateIntro]);

    // keyboard even handler
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key.toLowerCase() === 'c' && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
                setMouseTrail([]);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    // wait for drawing
    useEffect(() => {
        if (mouseTrail.length > 10) {
            const timer = setTimeout(() => setShowClearHint(true), 800);
            return () => clearTimeout(timer);
        } else {
            setShowClearHint(false);
        }
    }, [mouseTrail.length]);

    return (
        <div
            ref={containerRef}
            className={`relative flex-1 bg-white overflow-hidden ${isHoveringNav ? 'cursor-auto' : 'cursor-none'}`}
            style={{
                // ...spotlightStyle,
                minHeight: '100%'
            }}
        >
            <CustomCursor mousePos={mousePos} mouseTrail={mouseTrail} isHoveringNav={isHoveringNav} />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-6xl mx-auto px-8">
                    <div className="grid grid-cols-12 gap-8 items-center min-h-full">

                        <div className="col-span-7 space-y-8">
                            <AnimatedTitle mousePos={mousePos} isLoaded={isLoaded} shouldAnimateIntro={shouldAnimateIntro} />
                            <AnimatedSubtitle isLoaded={isLoaded} shouldAnimateIntro={shouldAnimateIntro} />
                            <MagneticButton mousePos={mousePos} shouldAnimateIntro={shouldAnimateIntro} />
                        </div>

                        <div className="col-span-5 flex justify-end">
                            <InteractivePhoto mouseX={smoothMouseX} mouseY={smoothMouseY} isLoaded={isLoaded} shouldAnimateIntro={shouldAnimateIntro} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="cursor-auto">
                <MagneticNav mousePos={mousePos} setIsHoveringNav={setIsHoveringNav} shouldAnimateIntro={shouldAnimateIntro} />
            </div>

            {/* Clear Drawing Hint */}
            {showClearHint && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeOut"
                    }}
                    className="fixed bottom-6 right-6 text-black text-sm font-light pointer-events-none z-50"
                >
                    Press c to clear drawing
                </motion.div>
            )}
        </div>
    );
}

const CustomCursor = ({ mousePos, mouseTrail, isHoveringNav }) => {
    return (
        <>
            {mouseTrail.length > 1 && (
                <svg
                    className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
                    style={{ overflow: 'visible' }}
                >
                    <path
                        d={mouseTrail.length > 1 ? `M ${mouseTrail.map((pos, i) => `${pos.x},${pos.y}`).join(' L ')}` : ''}
                        stroke="rgba(0, 0, 0, 0.08)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-50"
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

const AnimatedTitle = ({ mousePos, isLoaded, shouldAnimateIntro }) => {
    const name = "Will Hunt";
    const greeting = "Hi, I'm ";

    return (
        <div className="space-y-2">
            <motion.p
                className="text-lg text-gray-600 font-light"
                initial={shouldAnimateIntro ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={shouldAnimateIntro ? { duration: 0.8, delay: 0.3 } : { duration: 0 }}
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
                                        shouldAnimateIntro={shouldAnimateIntro}
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
                                    shouldAnimateIntro={shouldAnimateIntro}
                                />
                            )}
                        </span>
                    ))}
                </h1>
            </div>
        </div>
    );
};

const AnimatedLetter = ({ letter, index, isLoaded, mousePos, shouldAnimateIntro }) => {
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

        const maxRadius = 60;
        const proximityValue = Math.max(0, 1 - distance / maxRadius);
        setProximity(proximityValue);
    }, [mousePos]);

    return (
        <motion.span
            ref={letterRef}
            className="inline-block px-1 py-2 -mx-1 -my-2 rounded-lg hover:text-black transition-all duration-300 cursor-default"
            initial={shouldAnimateIntro ? { opacity: 0, y: 50 } : false}
            animate={{
                opacity: isLoaded ? 1 : 0,
                y: isLoaded ? 0 : 50,
            }}
            transition={shouldAnimateIntro ? {
                duration: 0.6,
                delay: 0.4 + index * 0.05,
            } : { duration: 0 }}
            style={{
                color: proximity > 0 ? '#000000' : undefined,
                transform: `scale(${1 + proximity * 0.1}) translateY(${-proximity * 3}px)`,
            }}
        >
            {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
    );
};

const AnimatedSubtitle = ({ isLoaded, shouldAnimateIntro }) => {

    return (
        <motion.p
            className="text-xl text-gray-500 font-light max-w-md leading-relaxed"
            initial={shouldAnimateIntro ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={shouldAnimateIntro ? { duration: 0.8, delay: 1.4 } : { duration: 0 }}
        >
            Software Engineer, graduating UW in March '26
        </motion.p>
    );
};

const MagneticButton = ({ mousePos, shouldAnimateIntro }) => {
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
            initial={shouldAnimateIntro ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldAnimateIntro ? { duration: 0.8, delay: 2.0 } : { duration: 0 }}
        >
            <motion.button
                ref={buttonRef}
                className="relative overflow-hidden rounded-full bg-black px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-semibold text-white shadow-lg hover:shadow-black/30 focus-visible:outline-black before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out whitespace-nowrap"
                animate={{
                    x: buttonPos.x,
                    y: buttonPos.y
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(resumePdf, '_blank')}
            >
                Resume
            </motion.button>
        </motion.div>
    );
};

const InteractivePhoto = ({ mouseX, mouseY, isLoaded, shouldAnimateIntro }) => {
    const photoRef = useRef(null);

    const offsetX = useTransform(mouseX, [0, 1], [-8, 8]);
    const offsetY = useTransform(mouseY, [0, 1], [-8, 8]);

    return (
        <motion.div
            ref={photoRef}
            className="relative w-80 h-80"
            initial={shouldAnimateIntro ? { opacity: 0, scale: 0.8 } : false}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={shouldAnimateIntro ? { duration: 1, delay: 1.0 } : { duration: 0 }}
            style={{ x: offsetX, y: offsetY }}
        >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100">
                <img
                    src="/assets/optimized/headshot.jpg"
                    alt="Will Hunt"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
        </motion.div>
    );
};

const MagneticNav = ({ mousePos, setIsHoveringNav, shouldAnimateIntro }) => {
    const navItems = [
        { label: 'Projects', href: '/projects' },
        { label: 'Favorites', href: '/favorites' },
        // {label: 'Thoughts', href: 'thoughts'}
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
                        shouldAnimateIntro={shouldAnimateIntro}
                    />
                ))}
            </div>
        </nav>
    );
};

const MagneticNavItem = ({ item, mousePos, index, setIsHoveringNav, shouldAnimateIntro }) => {
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
            initial={shouldAnimateIntro ? { opacity: 0, y: -20 } : false}
            animate={{
                opacity: 1,
                x: itemPos.x,
                y: itemPos.y
            }}
            transition={{
                opacity: shouldAnimateIntro ? { duration: 0.6, delay: 2.5 + index * 0.1 } : { duration: 0 },
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
