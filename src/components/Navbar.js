import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Advanced scroll detection with Framer Motion
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 100, 200],
        ['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.75)', 'rgba(255, 255, 255, 0.85)']
    );
    const backdropBlur = useTransform(
        scrollY,
        [0, 100, 200],
        ['blur(12px)', 'blur(16px)', 'blur(20px)']
    );
    const borderOpacity = useTransform(
        scrollY,
        [0, 100],
        [0, 0.08]
    );
    const shadowOpacity = useTransform(
        scrollY,
        [0, 200],
        [0, 0.08]
    );

    const navItems = [
        { label: 'Projects', href: '/projects' },
        { label: 'Favorites', href: '/favorites' },
        // { label: 'Experience', href: '/experience' }
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                backgroundColor,
                backdropFilter: backdropBlur,
                WebkitBackdropFilter: backdropBlur,
                borderBottom: `1px solid rgba(229, 231, 235, ${borderOpacity})`,
                boxShadow: `0 1px 3px 0 rgba(0, 0, 0, ${shadowOpacity})`
            }}
        >
            <div className="flex justify-between items-center px-8 py-4">
                {/* Logo/Name */}
                <motion.div
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer"
                >
                    <Link to="/" className="flex items-center space-x-3">
                        <motion.div
                            className="w-12 h-12 bg-gradient-to-r from-[#4b2e83] to-[#32006e] rounded-full flex items-center justify-center shadow-lg overflow-hidden"
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
                        <div className="leading-tight">
                            <h1 className="text-xl font-clash font-medium text-gray-800">will hunt</h1>
                            <p className="text-sm text-gray-600">Software Engineer</p>
                        </div>
                    </Link>
                </motion.div>

                {/* Desktop Navigation - Exact Magnetic Nav Structure */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                        >
                            <Link to={item.href} className="block">
                                {item.label}
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
                className="md:hidden overflow-hidden rounded-xl mx-8 mb-4 shadow-lg border border-gray-200/30"
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
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            whileHover={{ x: 3 }}
                            whileTap={{ x: 0 }}
                        >
                            <Link
                                to={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-3 px-6 transition-all duration-200 ${location.pathname === item.href
                                    ? 'text-[#4b2e83] bg-[#4b2e83]/10 font-semibold mx-2 rounded-lg'
                                    : 'text-gray-700 hover:text-[#4b2e83] hover:bg-gray-50/90 mx-2 rounded-lg'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
}