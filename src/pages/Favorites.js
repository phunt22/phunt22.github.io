import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { FAVORITE_YEARS } from '../data/favorites';

export default function Favorites() {
    return (
        <AnimatedPage>
            <div className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-8">
                <motion.h1
                    className="text-4xl font-semibold text-gray-800 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Favorites
                </motion.h1>

                <div className="flex flex-col items-center space-y-8">
                    {FAVORITE_YEARS.map((year, index) => (
                        <motion.div
                            key={year}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            <Link to={`/favorites/${year}`}>
                                <motion.span
                                    className="text-8xl md:text-9xl font-bold text-gray-300 hover:text-gray-900 transition-colors duration-300 cursor-pointer block"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {year}
                                </motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedPage>
    );
}
