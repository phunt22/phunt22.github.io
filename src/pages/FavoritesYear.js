import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { getFavoritesByYear, filterByTypes, FAVORITE_TYPES, TYPE_LABELS } from '../data/favorites';

// Fisher-Yates shuffle
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

function FavoriteCard({ data, onOpen }) {
    const [isHovered, setIsHovered] = useState(false);

    // Determine text color based on background brightness
    const getBrightness = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return (r * 299 + g * 587 + b * 114) / 1000;
    };

    const textColor = getBrightness(data.bgColor) > 128 ? 'text-black' : 'text-white';
    const textColorSecondary = getBrightness(data.bgColor) > 128 ? 'text-black/70' : 'text-white/70';

    return (
        <motion.li
            layout
            layoutId={data.id}
            className="relative cursor-pointer w-[calc(50vw)] h-[calc(50vw)] sm:w-[calc(33.333vw)] sm:h-[calc(33.333vw)] md:w-[calc(25vw)] md:h-[calc(25vw)] lg:w-[calc(20vw)] lg:h-[calc(20vw)] xl:w-[calc(16.666vw)] xl:h-[calc(16.666vw)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onOpen(data.id)}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
                layout: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
            }}
        >
            {/* Background color layer */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: data.bgColor }}
            />

            {/* Image - fades out on hover */}
            <motion.img
                src={data.image}
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: isHovered ? 0 : 0.8 }}
                draggable={false}
            />

            {/* Text - fades in on hover, centered */}
            <motion.div
                className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center ${textColor}`}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: isHovered ? 0 : 0.8 }}
            >
                <h3 className="font-semibold text-sm leading-tight">{data.title}</h3>
                <p className={`text-xs mt-1 ${textColorSecondary}`}>{data.author}</p>
            </motion.div>
        </motion.li>
    );
}

function FavoriteModal({ data, onClose }) {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.aside
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Backdrop */}
            <motion.div
                className="absolute inset-0 bg-black/80 cursor-pointer"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut", delay: 0.15 }}
            />

            {/* Modal content - wider, sharper */}
            <motion.div
                className="relative max-w-[700px] w-[90vw] max-h-[90vh] overflow-y-auto shadow-2xl bg-white"
                exit={{ scale: 0.95 }}
            >
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full aspect-square object-cover"
                    draggable={false}
                />

                {/* Close button - no background */}
                <motion.button
                    className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors"
                    onClick={onClose}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </motion.button>

                {/* Content - no category tag */}
                <div className="p-6 space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">{data.title}</h2>
                        <p className="text-gray-600 mt-1">{data.author}</p>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        {data.description}
                    </p>
                </div>
            </motion.div>
        </motion.aside>
    );
}

function FilterBar({ activeFilters, toggleFilter, clearFilters }) {
    const types = Object.values(FAVORITE_TYPES);
    const hasActiveFilters = activeFilters.size > 0;

    return (
        <div className="fixed bottom-4 z-40 w-full flex justify-center pointer-events-none">
            <div className="relative pointer-events-auto">
                <div
                    className="flex items-center py-3 px-6"
                    style={{
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        backgroundColor: "rgba(0, 0, 0, 0.7)"
                    }}
                >
                    <div className="flex items-center space-x-6 md:space-x-8">
                        {types.map((type) => (
                            <motion.button
                                key={type}
                                onClick={() => toggleFilter(type)}
                                className="text-sm font-medium"
                                animate={{
                                    color: activeFilters.has(type) ? '#ffffff' : '#6b7280'
                                }}
                                transition={{ duration: 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    color: activeFilters.has(type) ? '#e5e5e5' : '#9ca3af'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {TYPE_LABELS[type]}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* X button - positioned to the right, outside main bar */}
                <AnimatePresence>
                    {hasActiveFilters && (
                        <motion.button
                            onClick={clearFilters}
                            className="absolute left-full top-0 h-full px-4 text-gray-400 hover:text-white transition-colors flex items-center"
                            style={{
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                                marginLeft: -1
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function FavoritesYear() {
    const { year } = useParams();
    const [openId, setOpenId] = useState(null);
    const [activeFilters, setActiveFilters] = useState(new Set());
    const [shuffleKey, setShuffleKey] = useState(0);

    const yearFavorites = getFavoritesByYear(year);
    const filteredFavorites = filterByTypes(yearFavorites, activeFilters);

    // Shuffle items whenever filters change or on initial load
    const shuffledFavorites = useMemo(() => {
        return shuffleArray(filteredFavorites);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shuffleKey, JSON.stringify([...activeFilters]), year]);

    const toggleFilter = (type) => {
        setActiveFilters(prev => {
            const next = new Set(prev);
            if (next.has(type)) {
                next.delete(type);
            } else {
                next.add(type);
            }
            return next;
        });
        setShuffleKey(k => k + 1);
    };

    const clearFilters = () => setActiveFilters(new Set());

    const open = (id) => setOpenId(id);
    const close = () => setOpenId(null);

    return (
        <AnimatedPage>
            <div className="w-full pt-20 pb-20">
                {/* Header */}
                <div
                    className="flex items-center space-x-3 py-2 px-4"
                    style={{
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        backgroundColor: "rgba(0, 0, 0, 0.85)"
                    }}
                >
                    <Link to="/favorites">
                        <motion.button
                            className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                    </Link>
                    <h1 className="text-base font-medium text-white">
                        {year}
                    </h1>
                </div>

                {/* Grid - centers when sparse */}
                <LayoutGroup>
                    <motion.ul
                        className="flex flex-wrap justify-start w-full"
                    >
                        <AnimatePresence mode="popLayout">
                            {shuffledFavorites.map((item) => (
                                <FavoriteCard
                                    key={item.id}
                                    data={item}
                                    onOpen={open}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.ul>

                    {/* Modal */}
                    <AnimatePresence mode="wait">
                        {openId && (
                            <FavoriteModal
                                key="modal"
                                data={shuffledFavorites.find((f) => f.id === openId) || yearFavorites.find((f) => f.id === openId)}
                                onClose={close}
                            />
                        )}
                    </AnimatePresence>
                </LayoutGroup>

                {/* Empty state */}
                {shuffledFavorites.length === 0 && (
                    <motion.div
                        className="flex flex-col items-center justify-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-gray-400 text-lg">No items match the selected filters</p>
                        <button
                            onClick={clearFilters}
                            className="mt-4 text-gray-600 hover:text-gray-900 underline"
                        >
                            Clear filters
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Filter bar */}
            <FilterBar
                activeFilters={activeFilters}
                toggleFilter={toggleFilter}
                clearFilters={clearFilters}
            />
        </AnimatedPage>
    );
}
