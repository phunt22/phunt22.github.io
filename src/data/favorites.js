// Content type constants for filtering
export const FAVORITE_TYPES = {
    MUSIC: 'music',
    BOOK: 'book',
    ARTICLE: 'article',
    MOVIE: 'movie',
    VIDEO: 'video'
};

// Type display labels for filter bar
export const TYPE_LABELS = {
    [FAVORITE_TYPES.MUSIC]: 'Music',
    [FAVORITE_TYPES.BOOK]: 'Books',
    [FAVORITE_TYPES.ARTICLE]: 'Articles',
    [FAVORITE_TYPES.MOVIE]: 'Movies',
    [FAVORITE_TYPES.VIDEO]: 'Videos'
};

// Available years (for landing page)
export const FAVORITE_YEARS = [2026];

// Per-year color themes
export const YEAR_THEMES = {
    2026: { bg: '#000000', text: '#B8CDE0' },
};

const DEFAULT_THEME = { bg: '#1E1E1E', text: '#D4D4D4' };
export const getYearTheme = (year) => YEAR_THEMES[year] || DEFAULT_THEME;

// Favorites data with background colors
export const favorites = [
    // ==================== 2026 MUSIC ====================
    {
        id: "fav-2026-music-1",
        type: FAVORITE_TYPES.MUSIC,
        title: "Manning Fireworks",
        author: "MJ Lenderman",
        image: "/assets/favorites/manning-fireworks.png",
        bgColor: "#34423d",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-music-2",
        type: FAVORITE_TYPES.MUSIC,
        title: "Son of Spergy",
        author: "Daniel Caesar",
        image: "/assets/favorites/son-of-spergy.png",
        bgColor: "#6d282b",
        description: "coming soon",
        year: 2026
    },

    // ==================== 2026 MOVIES ====================
    {
        id: "fav-2026-movie-1",
        type: FAVORITE_TYPES.MOVIE,
        title: "Her",
        author: "Spike Jonze",
        image: "/assets/favorites/her movie.jpg",
        bgColor: "#b52943",
        description: "coming soon",
        year: 2026
    },

    // ==================== 2026 VIDEOS ====================
    {
        id: "fav-2026-video-1",
        type: FAVORITE_TYPES.VIDEO,
        title: "Maniac",
        author: "Cary Joji Fukunaga",
        image: "/assets/favorites/maniac.jpg",
        bgColor: "#000000",
        description: "coming soon",
        year: 2026
    }
];

// Helper function to filter by year
export const getFavoritesByYear = (year) =>
    favorites.filter(f => f.year === parseInt(year));

// Helper function to filter by type(s)
export const filterByTypes = (items, types) => {
    if (!types || types.size === 0) return items;
    return items.filter(f => types.has(f.type));
};
