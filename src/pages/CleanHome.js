import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import resumePdf from "../assets/Resume.pdf";
import { socialLinks } from "../data/socialLinks";

const hoverBg = {
    github: "hover:bg-github",
    linkedin: "hover:bg-linkedin",
    strava: "hover:bg-strava",
    email: "hover:bg-email",
};

// Mt. Rainier silhouette — foreground peak
const MOUNTAIN_PATH = "M0,400 L60,380 L120,350 L180,320 L220,300 L260,270 L300,240 L330,220 L360,190 L390,160 L410,140 L430,120 L450,105 L465,95 L475,80 L485,70 L495,60 L505,55 L515,50 L525,48 L535,50 L545,55 L555,62 L565,70 L575,80 L590,95 L610,115 L630,130 L650,145 L680,165 L700,180 L730,200 L760,220 L800,250 L840,270 L880,290 L920,310 L960,330 L1000,345 L1040,355 L1080,365 L1120,372 L1160,378 L1200,382 L1240,388 L1280,392 L1320,395 L1360,398 L1400,400 L1400,400 L0,400 Z";

// Background ridge — softer, offset, adds depth
const MOUNTAIN_BG_PATH = "M0,400 L100,390 L200,375 L300,355 L380,335 L440,310 L500,280 L550,255 L590,235 L620,218 L650,205 L680,195 L700,190 L720,188 L740,190 L760,195 L790,208 L820,225 L860,248 L900,270 L950,295 L1000,315 L1060,335 L1120,350 L1180,362 L1240,372 L1300,380 L1360,388 L1400,395 L1400,400 L0,400 Z";

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
    const [mouseSpeed, setMouseSpeed] = useState(0);
    const containerRef = useRef(null);
    const lastMouseRef = useRef({ x: 0, y: 0, time: Date.now() });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

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

                // Track mouse speed for noise reactivity
                const now = Date.now();
                const dt = now - lastMouseRef.current.time;
                if (dt > 0) {
                    const dx = e.clientX - lastMouseRef.current.x;
                    const dy = e.clientY - lastMouseRef.current.y;
                    const speed = Math.sqrt(dx * dx + dy * dy) / dt;
                    setMouseSpeed(Math.min(speed * 8, 1));
                }
                lastMouseRef.current = { x: e.clientX, y: e.clientY, time: now };

                setMouseTrail(prev => [
                    newPos,
                    ...prev.slice(0, 499)
                ]);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Decay mouse speed back to 0
    useEffect(() => {
        const interval = setInterval(() => {
            setMouseSpeed(prev => prev * 0.92);
        }, 50);
        return () => clearInterval(interval);
    }, []);

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

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key.toLowerCase() === 'c' && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
                setMouseTrail([]);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    useEffect(() => {
        if (mouseTrail.length > 10) {
            const timer = setTimeout(() => setShowClearHint(true), 800);
            return () => clearTimeout(timer);
        } else {
            setShowClearHint(false);
        }
    }, [mouseTrail.length]);

    // Noise opacity: base 0.06, ramps up to 0.18 on fast mouse movement
    const noiseOpacity = 0.06 + mouseSpeed * 0.12;

    return (
        <div
            ref={containerRef}
            className={`relative flex-1 overflow-hidden ${isHoveringNav ? 'cursor-auto' : 'cursor-none'}`}
            style={{ minHeight: '100%', backgroundColor: '#f0f0f0' }}
        >
            {/* SVG noise filter definition */}
            <svg className="absolute" width="0" height="0">
                <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
            </svg>

            {/* Noise overlay — reacts to mouse speed */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    zIndex: 1,
                    opacity: noiseOpacity,
                    filter: 'url(#noise)',
                    transition: 'opacity 0.15s ease-out',
                }}
            />

            <CustomCursor mousePos={mousePos} mouseTrail={mouseTrail} isHoveringNav={isHoveringNav} />

            {/* Mountain silhouettes — two layers for depth */}
            <motion.div
                className="absolute bottom-0 right-0 pointer-events-none"
                style={{ zIndex: 4, width: '75vw', height: '400px' }}
                initial={shouldAnimateIntro ? { opacity: 0, y: 50 } : false}
                animate={{ opacity: isLoaded ? 0.06 : 0, y: isLoaded ? 0 : 50 }}
                transition={shouldAnimateIntro ? { duration: 1.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}
            >
                <svg viewBox="0 0 1400 400" preserveAspectRatio="none" className="w-full h-full">
                    <path d={MOUNTAIN_BG_PATH} fill="black" />
                </svg>
            </motion.div>
            <motion.div
                className="absolute bottom-0 right-0 pointer-events-none"
                style={{ zIndex: 5, width: '70vw', height: '400px' }}
                initial={shouldAnimateIntro ? { opacity: 0, y: 40 } : false}
                animate={{ opacity: isLoaded ? 0.12 : 0, y: isLoaded ? 0 : 40 }}
                transition={shouldAnimateIntro ? { duration: 1.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}
            >
                <svg viewBox="0 0 1400 400" preserveAspectRatio="none" className="w-full h-full">
                    <path d={MOUNTAIN_PATH} fill="black" />
                </svg>
            </motion.div>

            {/* Editorial composition — name + description + resume, left-aligned */}
            <div className="absolute inset-0 flex items-start px-8 pt-[18vh]">
                <div className="relative flex flex-col" style={{ zIndex: 30, maxWidth: '65%' }}>
                    {/* Name — single line */}
                    <motion.h1
                        className="font-clash font-medium lowercase leading-[0.85] text-black whitespace-nowrap"
                        style={{
                            fontSize: 'clamp(64px, 11vw, 220px)',
                            letterSpacing: '-0.05em',
                        }}
                        initial={shouldAnimateIntro ? { opacity: 0, x: -60 } : false}
                        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -60 }}
                        transition={shouldAnimateIntro ? { duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}
                    >
                        will hunt
                    </motion.h1>

                    {/* Description — constrained to title width */}
                    <motion.p
                        className="mt-1.5 text-gray-600 text-base font-normal leading-relaxed"
                        style={{ letterSpacing: '0.01em', maxWidth: 'clamp(340px, 44vw, 720px)' }}
                        initial={shouldAnimateIntro ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                        transition={shouldAnimateIntro ? { duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}
                    >
                        I'm a software engineer who believes tech is a medium to do good. Previously, I built REV's mobile app from 0 to 10k users, interned on USAA's telematics innovation team, and led a fundraising guild for Seattle Children's Hospital. Currently, I'm wrapping up my CS degree at UW, interning at an AI startup, and hosting a{' '}
                        <a href="https://modelmadness.dev" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">March Madness data science competition</a>.
                    </motion.p>

                    {/* Resume button — below description */}
                    <motion.div
                        className="mt-8"
                        initial={shouldAnimateIntro ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                        transition={shouldAnimateIntro ? { duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}
                    >
                        <MagneticButton mousePos={mousePos} shouldAnimateIntro={false} />
                    </motion.div>
                </div>
            </div>

            {/* Photo — anchored to bottom-right, flush to edge */}
            <motion.div
                className="absolute bottom-0 right-0 pointer-events-none"
                style={{
                    zIndex: 15,
                }}
                initial={shouldAnimateIntro ? { opacity: 0, y: 60 } : false}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 60 }}
                transition={shouldAnimateIntro ? { duration: 1.0, delay: 0.8, ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}
            >
                <img
                    src="/assets/headshot.png"
                    alt="Will Hunt"
                    style={{
                        height: 'clamp(300px, 65vh, 700px)',
                        width: 'auto',
                        filter: 'grayscale(100%) contrast(1.15)',
                        objectFit: 'contain',
                        display: 'block',
                    }}
                />
            </motion.div>

            {/* Bottom bar — left info column | right resume */}
            <div className="absolute bottom-0 left-0 right-0 px-8 py-6 flex items-end justify-between" style={{ zIndex: 40 }}>
                {/* Left: information column — metadata + social icons on one vertical axis */}
                <motion.div
                    className="flex flex-col gap-3"
                    initial={shouldAnimateIntro ? { opacity: 0, y: 16 } : false}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 16 }}
                    transition={shouldAnimateIntro ? { duration: 0.8, delay: 1.6 } : { duration: 0 }}
                >
                    {/* <div className="flex flex-col gap-0.5">
                        <span className="text-[10px] text-gray-500 font-light uppercase tracking-[0.2em]">
                            Seattle, WA
                        </span>
                        <span className="text-[10px] text-gray-500 font-light uppercase tracking-[0.2em]">
                            Typescript · Python · React
                        </span>
                    </div> */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-125 ${hoverBg[social.name]} text-gray-400 hover:text-white`}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Right: clear hint */}
                {showClearHint && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="text-gray-400 text-xs font-light pointer-events-none"
                    >
                        press c to clear
                    </motion.span>
                )}
            </div>

            {/* Navigation */}
            <div className="cursor-auto">
                <MagneticNav mousePos={mousePos} setIsHoveringNav={setIsHoveringNav} shouldAnimateIntro={shouldAnimateIntro} />
            </div>
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
                        d={mouseTrail.length > 1 ? `M ${mouseTrail.map((pos) => `${pos.x},${pos.y}`).join(' L ')}` : ''}
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
                className="relative overflow-hidden rounded-lg bg-black px-7 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-black/30 focus-visible:outline-black before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out whitespace-nowrap cursor-none"
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

const MagneticNav = ({ mousePos, setIsHoveringNav, shouldAnimateIntro }) => {
    const navItems = [
        { label: 'Projects', href: '/projects' },
        { label: 'Favorites', href: '/favorites' },
    ];

    return (
        <nav className="absolute top-0 left-0 right-0" style={{ zIndex: 40 }}>
            <div className="flex justify-end items-center px-8 py-4" style={{ minHeight: '80px' }}>
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
            </div>
        </nav>
    );
};

const MagneticNavItem = ({ item, mousePos, index, setIsHoveringNav, shouldAnimateIntro }) => {
    const itemRef = useRef(null);
    const [itemPos, setItemPos] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (clicked) return;

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
    }, [mousePos, clicked]);

    const handleClick = (e) => {
        e.preventDefault();
        setClicked(true);
        setItemPos({ x: 0, y: 0 });
        setTimeout(() => {
            navigate(item.href);
        }, 250);
    };

    const springConfig = clicked
        ? { type: "spring", stiffness: 200, damping: 25 }
        : { type: "spring", stiffness: 300, damping: 30 };

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
                opacity: shouldAnimateIntro ? { duration: 0.6, delay: 2.2 + index * 0.1 } : { duration: 0 },
                x: springConfig,
                y: springConfig
            }}
            onMouseEnter={() => setIsHoveringNav(true)}
            onMouseLeave={() => setIsHoveringNav(false)}
        >
            <a href={item.href} onClick={handleClick} className="block">
                {item.label}
            </a>
        </motion.div>
    );
};
