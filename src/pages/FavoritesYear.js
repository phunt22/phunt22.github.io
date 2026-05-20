import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { FavoriteGridCard, FavoriteModal } from '../components/FavoriteCard';
import { getFavoritesByYear, filterByTypes, FAVORITE_TYPES, TYPE_LABELS, getYearTheme } from '../data/favorites';
import './FavoritesYear.css';

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
        <div className="filter-bar">
            <div className="filter-bar__inner">
                <div className="filter-bar__main">
                    <div className="filter-bar__list">
                        {types.map((type) => (
                            <motion.button
                                key={type}
                                onClick={() => toggleFilter(type)}
                                className="filter-bar__button"
                                animate={{ color: activeFilters.has(type) ? '#ffffff' : '#6b7280' }}
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

                <AnimatePresence>
                    {hasActiveFilters && (
                        <motion.button
                            onClick={clearFilters}
                            className="filter-bar__clear"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

    const theme = getYearTheme(year);
    const yearFavorites = getFavoritesByYear(year);
    const filteredFavorites = filterByTypes(yearFavorites, activeFilters);

    const shuffledFavorites = useMemo(() => {
        return shuffleArray(filteredFavorites);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shuffleKey, JSON.stringify([...activeFilters]), year]);

    const toggleFilter = (type) => {
        setActiveFilters(prev => {
            const next = new Set(prev);
            if (next.has(type)) next.delete(type);
            else next.add(type);
            return next;
        });
        setShuffleKey(k => k + 1);
    };

    const clearFilters = () => setActiveFilters(new Set());

    const open = (id) => setOpenId(id);
    const close = () => setOpenId(null);

    return (
        <AnimatedPage>
            <div className="favorites-year">
                <div className="favorites-year__header" style={{ backgroundColor: theme.bg }}>
                    <Link to="/favorites">
                        <motion.button
                            className="favorites-year__back"
                            style={{ color: theme.text }}
                            whileHover={{ scale: 1.05, opacity: 1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                    </Link>
                    <h1 className="favorites-year__title" style={{ color: theme.text }}>
                        {year}
                    </h1>
                </div>

                <div className="favorites-year__grid-wrapper">
                    <LayoutGroup>
                        <motion.ul className="favorites-year__grid">
                            <AnimatePresence mode="popLayout">
                                {shuffledFavorites.map((item) => (
                                    <FavoriteGridCard
                                        key={item.id}
                                        data={item}
                                        onOpen={open}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.ul>

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

                    {shuffledFavorites.length === 0 && (
                        <motion.div
                            className="favorites-year__empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <p className="favorites-year__empty-text">
                                {(() => {
                                    const types = [...activeFilters];
                                    const labels = types.map(t => TYPE_LABELS[t].toLowerCase());
                                    if (types.length === 1) {
                                        const t = types[0];
                                        const verb = (t === FAVORITE_TYPES.BOOK || t === FAVORITE_TYPES.ARTICLE) ? 'read' :
                                                     t === FAVORITE_TYPES.MUSIC ? 'listened to' : 'watched';
                                        return `guess I haven't ${verb} any ${labels[0]} this year`;
                                    }
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
                            <button onClick={clearFilters} className="favorites-year__empty-clear">
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>

            <FilterBar
                activeFilters={activeFilters}
                toggleFilter={toggleFilter}
                clearFilters={clearFilters}
            />
        </AnimatedPage>
    );
}
