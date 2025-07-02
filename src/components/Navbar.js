import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll effect for navbar - almost invisible initially, compact when scrolling
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 25, 50],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.95)']
    );
    const backdropBlur = useTransform(
        scrollY,
        [0, 25, 50],
        ['blur(0px)', 'blur(8px)', 'blur(16px)']
    );
    const navPadding = useTransform(
        scrollY,
        [0, 50],
        ['1rem', '0.75rem']
    );
    const borderOpacity = useTransform(
        scrollY,
        [0, 50],
        [0, 0.1]
    );

    const navLinks = [
        { path: '/projects', label: 'Projects' },
        // { path: '/experience', label: 'Experience' }, // temporarily removed
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                backgroundColor,
                backdropFilter: backdropBlur,
                WebkitBackdropFilter: backdropBlur,
                borderBottom: `1px solid rgba(255, 255, 255, ${borderOpacity})`
            }}
        >
            <motion.div
                className="container mx-auto px-4"
                style={{ paddingTop: navPadding, paddingBottom: navPadding }}
            >
                <div className="flex justify-between items-center">
                    {/* Logo/Name */}
                    <motion.div
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                        className="cursor-pointer"
                    >
                        <Link to="/" className="flex items-center space-x-3">
                            <motion.div
                                className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                                variants={{
                                    hover: {
                                        rotate: -8,
                                        scale: 1.1
                                    }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                            >
                                <img
                                    src="/assets/headshot.png"
                                    alt="Will Hunt"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-800">Will Hunt</h1>
                                <p className="text-sm text-gray-600">Software Engineer</p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(({ path, label }) => (
                            <motion.div
                                key={path}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                <Link
                                    to={path}
                                    className={`relative py-2 px-1 transition-all duration-200 font-medium ${location.pathname === path
                                        ? 'text-indigo-600 font-semibold'
                                        : 'text-gray-700 hover:text-indigo-600'
                                        }`}
                                >
                                    {label}
                                    {location.pathname === path && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                                            layoutId="activeTab"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden flex flex-col justify-center items-center w-6 h-6"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative w-6 h-6 flex flex-col justify-center items-center gap-2">
                            <motion.div
                                className="w-6 h-0.5 bg-gray-600 absolute top-2"
                                animate={isMenuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.4 }}
                            />
                            <motion.div
                                className="w-6 h-0.5 bg-gray-600 absolute bottom-2"
                                animate={isMenuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    className="md:hidden overflow-hidden rounded-xl mt-3 shadow-lg border border-gray-200/30"
                    initial={false}
                    style={{
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)"
                    }}
                    animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="py-4 space-y-2">
                        {navLinks.map(({ path, label }) => (
                            <motion.div
                                key={path}
                                whileHover={{ x: 3 }}
                                whileTap={{ x: 0 }}
                            >
                                <Link
                                    to={path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block py-3 px-6 transition-all duration-200 ${location.pathname === path
                                        ? 'text-indigo-600 bg-indigo-50/90 font-semibold mx-2 rounded-lg'
                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50/90 mx-2 rounded-lg'
                                        }`}
                                >
                                    {label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </motion.nav>
    );
}