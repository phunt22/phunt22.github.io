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
    2026: { bg: '#f0f0f0', text: '#1a1a1a' },
};

const DEFAULT_THEME = { bg: '#1E1E1E', text: '#D4D4D4' };
export const getYearTheme = (year) => YEAR_THEMES[year] || DEFAULT_THEME;

// Static section banners (non-year). Each renders the same banner style on
// /favorites and links to its own page.
export const FAVORITE_SECTIONS = [
//     {
//         label: 'Seattle Beer',
//         slug: 'beer',
//         theme: { bg: '#C19A4A', text: '#ffffff' },
//     },
//     {
//         label: 'Seattle Coffee',
//         slug: 'coffee',
//         theme: { bg: '#1a0f08', text: '#c8b0a0' },
//     },
];

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

    {
        id: "fav-2026-movie-2",
        type: FAVORITE_TYPES.MOVIE,
        title: "Maniac",
        author: "Cary Joji Fukunaga",
        image: "/assets/favorites/maniac.jpg",
        bgColor: "#000000",
        contain: true,
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-movie-3",
        type: FAVORITE_TYPES.MOVIE,
        title: "Fantastic Planet",
        author: "René Laloux",
        image: "/assets/favorites/fantastic-planet.jpg",
        bgColor: "#c8a020",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-movie-4",
        type: FAVORITE_TYPES.MOVIE,
        title: "Reversion",
        author: "David Orlowitz",
        image: "/assets/favorites/reversion.jpg",
        bgColor: "#3a4a45",
        description: "coming soon",
        year: 2026
    },

    // ==================== 2026 VIDEOS ====================
    {
        id: "fav-2026-video-1",
        type: FAVORITE_TYPES.VIDEO,
        title: "Working with Zuckerberg & Carmack",
        author: "Philip Su × Ryan Peterman",
        image: "/assets/favorites/philip-su-ryan-peterman.jpg",
        bgColor: "#6470d4",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-video-2",
        type: FAVORITE_TYPES.VIDEO,
        title: "Why don't we die more often?",
        author: "Michael MacKelvie",
        image: "/assets/favorites/why-dont-we-die.jpg",
        bgColor: "#2a6496",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-video-3",
        type: FAVORITE_TYPES.VIDEO,
        title: "Birds Do Not Sing in Caves",
        author: "Horses",
        image: "/assets/favorites/birds-do-not-sing-in-caves.jpg",
        bgColor: "#b04a2a",
        description: "coming soon",
        year: 2026
    },

    // ==================== 2026 BOOKS ====================
    {
        id: "fav-2026-book-1",
        type: FAVORITE_TYPES.BOOK,
        title: "Society of the Spectacle",
        author: "Guy Debord",
        image: "/assets/favorites/society-of-the-spectacle.jpg",
        bgColor: "#1a1a1a",
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
