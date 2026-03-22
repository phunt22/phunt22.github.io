import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { FavoriteGridCard, FavoriteModal } from '../components/FavoriteCard';
import { getFavoritesByYear, filterByTypes, FAVORITE_TYPES, TYPE_LABELS, getYearTheme } from '../data/favorites';

// Fisher-Yates shuffle
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

function FilterBar({ activeFilters, toggleFilter, clearFilters }) {
    const types = Object.values(FAVORITE_TYPES);
    const hasActiveFilters = activeFilters.size > 0;

    return (
        <div className="fixed bottom-4 z-40 w-full flex justify-center pointer-events-none">
            <div className="relative pointer-events-auto">
                <div
                    className="flex items-center py-3 px-4 md:px-6"
                    style={{
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        backgroundColor: "rgba(0, 0, 0, 0.7)"
                    }}
                >
                    <div className="flex items-center space-x-4 md:space-x-8">
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

    const theme = getYearTheme(year);
    const yearFavorites = getFavoritesByYear(year);

    // Shuffle once on mount, then keep stable order
    const stableOrder = useMemo(() => {
        return shuffleArray(yearFavorites);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year]);

    const displayedFavorites = filterByTypes(stableOrder, activeFilters);

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
    };

    const clearFilters = () => setActiveFilters(new Set());

    const open = (id) => setOpenId(id);
    const close = () => setOpenId(null);

    return (
        <AnimatedPage>
            <div className="w-full h-screen flex flex-col overflow-hidden pt-[96px] md:pt-[80px]">
                {/* Header */}
                <div
                    className="flex items-center space-x-3 py-3 px-4 shrink-0"
                    style={{ backgroundColor: theme.bg }}
                >
                    <Link to="/favorites">
                        <motion.button
                            className="w-8 h-8 flex items-center justify-center transition-colors"
                            style={{ color: theme.text, opacity: 0.7 }}
                            whileHover={{ scale: 1.05, opacity: 1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                    </Link>
                    <h1
                        className="text-lg font-clash font-semibold"
                        style={{ color: theme.text }}
                    >
                        {year}
                    </h1>
                </div>

                {/* Grid - scrollable area */}
                <div className={`flex-1 hide-scrollbar pb-20 ${openId ? 'overflow-hidden' : 'overflow-y-auto'}`}>
                    <LayoutGroup>
                        <motion.ul
                            className="flex flex-wrap justify-start w-full"
                        >
                            <AnimatePresence mode="popLayout">
                                {displayedFavorites.map((item) => (
                                    <FavoriteGridCard
                                        key={item.id}
                                        data={item}
                                        onOpen={open}
                                        hoverEnabled={!openId}
                                        isOpen={openId === item.id}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.ul>

                        {/* Modal */}
                        <AnimatePresence mode="wait">
                            {openId && (
                                <FavoriteModal
                                    key="modal"
                                    data={displayedFavorites.find((f) => f.id === openId) || yearFavorites.find((f) => f.id === openId)}
                                    onClose={close}
                                />
                            )}
                        </AnimatePresence>
                    </LayoutGroup>

                    {/* Empty state */}
                    {displayedFavorites.length === 0 && (
                        <motion.div
                            className="flex flex-col items-center justify-center py-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <p className="text-gray-400 text-lg">
                                {(() => {
                                    const types = [...activeFilters];
                                    const labels = types.map(t => TYPE_LABELS[t].toLowerCase());
                                    if (types.length === 1) {
                                        const t = types[0];
                                        const verb = (t === FAVORITE_TYPES.BOOK || t === FAVORITE_TYPES.ARTICLE) ? 'read' :
                                                     t === FAVORITE_TYPES.MUSIC ? 'listened to' : 'watched';
                                        return `guess I haven't ${verb} any ${labels[0]} this year`;
                                    }
                                    // Group by verb
                                    const read = types.filter(t => t === FAVORITE_TYPES.BOOK || t === FAVORITE_TYPES.ARTICLE);
                                    const watched = types.filter(t => t === FAVORITE_TYPES.MOVIE || t === FAVORITE_TYPES.VIDEO);
                                    const listened = types.filter(t => t === FAVORITE_TYPES.MUSIC);
                                    const parts = [];
                                    if (read.length) parts.push(`read any ${read.map(t => TYPE_LABELS[t].toLowerCase()).join(' or ')}`);
                                    if (watched.length) parts.push(`watched any ${watched.map(t => TYPE_LABELS[t].toLowerCase()).join(' or ')}`);
                                    if (listened.length) parts.push(`listened to any ${listened.map(t => TYPE_LABELS[t].toLowerCase()).join(' or ')}`);
                                    return `guess I haven't ${parts.join(' or ')} this year`;
                                })()}
                            </p>
                            <button
                                onClick={clearFilters}
                                className="mt-4 text-gray-600 hover:text-gray-900 underline"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </div>
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
