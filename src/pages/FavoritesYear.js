import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ThemedPageHeader from '../components/ThemedPageHeader';
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

    const theme = getYearTheme(year);
    const yearFavorites = getFavoritesByYear(year);

    const stableOrder = useMemo(() => {
        return shuffleArray(yearFavorites);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year]);

    const displayedFavorites = filterByTypes(stableOrder, activeFilters);

    const toggleFilter = (type) => {
        setActiveFilters(prev => {
            const next = new Set(prev);
            if (next.has(type)) next.delete(type);
            else next.add(type);
            return next;
        });
    };

    const clearFilters = () => setActiveFilters(new Set());

    const open = (id) => setOpenId(id);
    const close = () => setOpenId(null);

    const wrapperClassName = `favorites-year__grid-wrapper${openId ? ' favorites-year__grid-wrapper--locked' : ''}`;

    return (
        <>
            <ThemedPageHeader title={year} backTo="/favorites" theme={theme} />
            <AnimatedPage>
            <div className="favorites-year">
                <div className={wrapperClassName}>
                    <LayoutGroup>
                        <motion.ul className="favorites-year__grid">
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

                    {displayedFavorites.length === 0 && (
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
        </>
    );
}
