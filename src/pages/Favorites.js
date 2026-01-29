import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { FAVORITE_YEARS } from '../data/favorites';

const YEAR_THEMES = {
    2025: {
        bg: '#2C2418',
        text: '#E8D5B7',
    },
    2026: {
        bg: '#1A2332',
        text: '#B8CDE0',
    },
};

const DEFAULT_THEME = {
    bg: '#1E1E1E',
    text: '#D4D4D4',
};

export default function Favorites() {
    return (
        <AnimatedPage>
            <div className="w-full flex flex-col pt-20">
                {FAVORITE_YEARS.map((year, index) => {
                    const theme = YEAR_THEMES[year] || DEFAULT_THEME;
                    return (
                        <motion.div
                            key={year}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                        >
                            <Link to={`/favorites/${year}`} className="block">
                                <motion.div
                                    className="relative w-full cursor-pointer overflow-hidden flex items-center justify-center"
                                    style={{
                                        backgroundColor: theme.bg,
                                        height: '28vh',
                                        minHeight: '180px',
                                    }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                >
                                    {/* Noise grain overlay */}
                                    <div
                                        className="absolute inset-0 opacity-[0.06] pointer-events-none"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                                            backgroundSize: '128px 128px',
                                        }}
                                    />

                                    {/* Year text */}
                                    <span
                                        className="relative z-10 font-clash font-semibold text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight select-none"
                                        style={{ color: theme.text }}
                                    >
                                        {year}
                                    </span>
                                </motion.div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </AnimatedPage>
    );
}
