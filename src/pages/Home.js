// import AnimatedPage from '../components/AnimatedPage';

// export default function Home() {
//     return (
//         <AnimatedPage>


//             <section className="">
//                 <h1 className="text-5xl text-gray-600">
//                     HI IM WILL
//                 </h1>

//             </section>
//         </AnimatedPage>
//     );
// }

import React, { useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    AnimatePresence,
} from "framer-motion";



export default function Homepage() {
    /* --------------------------- scroll reactive -------------------------- */
    const { scrollY } = useScroll();
    const scrollSpring = useSpring(scrollY, { stiffness: 300, damping: 40 });
    const bgOpacity = useTransform(scrollSpring, [0, 100], [0, 0.8]);
    const shadowOpacity = useTransform(scrollSpring, [0, 100], [0, 0.12]);
    const bgColor = useTransform(bgOpacity, (o) => `rgba(255,255,255,${o})`);
    const navShadow = useTransform(shadowOpacity, (o) => `0 2px 12px rgba(0,0,0,${o})`);

    /* ------------------------------- render ------------------------------- */
    return (
        <div className="relative overflow-x-visible bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* ----------------------------- hero ------------------------------- */}
            <section id="home" className="relative flex min-h-[90vh] items-center justify-center px-4 py-12 sm:py-16 lg:py-20 pt-20">
                <div className="relative z-10 grid w-full max-w-7xl gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
                    {/* text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, staggerChildren: 0.1 }}
                        className="space-y-6 lg:space-y-8 text-center lg:text-left"
                    >
                        <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Will Hunt
                            </span>
                        </motion.h1>

                        <motion.p className="mx-auto lg:mx-0 max-w-lg text-lg sm:text-xl text-gray-600">
                            Full stack engineer passionate about shipping high-impact software with speed, ownership, and purpose.
                        </motion.p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                className="relative overflow-hidden rounded-full bg-indigo-600 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white shadow-lg hover:shadow-indigo-500/30 focus-visible:outline-indigo-600 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out"
                                onClick={() => {
                                    const pdfUrl = '/assets/Resume.pdf';
                                    window.open(pdfUrl, '_blank');
                                }}
                            >
                                Download Resume
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* avatar */}
                    <motion.div
                        aria-hidden
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                            <motion.div
                                className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 shadow-2xl"
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                    scale: [1, 1.02, 1]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="relative z-10 flex h-full w-full items-center justify-center rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-indigo-500/90 via-purple-500/90 to-pink-500/90 overflow-hidden"
                                animate={{
                                    rotate: [0, -2, 2, 0],
                                    scale: [1, 0.98, 1]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            >
                                <img
                                    src="/assets/headshot.png"
                                    alt="Will Hunt"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* decorative floating blobs */}
                <Blobs />
            </section>
        </div>
    );
}



/* -----------------------------------------------------------------------
 * Floating blobs component
 * ---------------------------------------------------------------------*/
function Blobs() {
    const config = [
        { className: "top-20 left-10 w-32 h-32 bg-indigo-200/40 blur-xl", duration: 12 },
        { className: "top-60 right-16 w-24 h-24 bg-blue-200/50 blur-lg", duration: 15 },
        { className: "bottom-60 left-16 w-28 h-28 bg-rose-200/40 blur-xl", duration: 20 },
        { className: "top-1/3 right-1/4 w-20 h-20 bg-cyan-200/50 blur-lg", duration: 18 },
        { className: "bottom-1/3 right-10 w-36 h-36 bg-fuchsia-200/40 blur-2xl", duration: 25 },
        { className: "top-2/3 left-1/3 w-16 h-16 bg-emerald-200/50 blur-md", duration: 22 },
    ];

    return (
        <>
            {config.map((b, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full ${b.className}`}
                    animate={{ y: ["-20%", "20%", "-20%"], x: ["-10%", "10%", "-10%"], rotate: [0, 15, -15, 0] }}
                    transition={{ duration: b.duration, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
        </>
    );
}
