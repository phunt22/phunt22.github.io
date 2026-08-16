// Content type constants for filtering
export const FAVORITE_TYPES = {
    MUSIC: 'music',
    BOOK: 'book',
    MOVIE: 'movie',
    VIDEO: 'video'
};

// Type display labels for filter bar
export const TYPE_LABELS = {
    [FAVORITE_TYPES.MUSIC]: 'Music',
    [FAVORITE_TYPES.BOOK]: 'Books',
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
        bgColor: "#31443E",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-music-2",
        type: FAVORITE_TYPES.MUSIC,
        title: "Son of Spergy",
        author: "Daniel Caesar",
        image: "/assets/favorites/son-of-spergy.png",
        bgColor: "#7B262D",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-music-3",
        type: FAVORITE_TYPES.MUSIC,
        title: "Heavy Metal",
        author: "Cameron Winter",
        image: "/assets/favorites/heavy-metal.jpg",
        bgColor: "#717086",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-music-4",
        type: FAVORITE_TYPES.MUSIC,
        title: "BULLDAWG",
        author: "Kenny Mason",
        image: "/assets/favorites/bulldawg.jpg",
        bgColor: "#131219",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-music-5",
        type: FAVORITE_TYPES.MUSIC,
        title: "How Do You Sleep at Night?",
        author: "Teezo Touchdown",
        image: "/assets/favorites/how-do-you-sleep-at-night.jpg",
        bgColor: "#FBFBFB",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-music-6",
        type: FAVORITE_TYPES.MUSIC,
        title: "F65",
        author: "IDK",
        image: "/assets/favorites/f65.jpg",
        bgColor: "#003F78",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-music-7",
        type: FAVORITE_TYPES.MUSIC,
        title: "Blizzard",
        author: "Dove Ellis",
        image: "/assets/favorites/blizzard-dove-ellis.jpg",
        bgColor: "#717428",
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
        bgColor: "#CC073E",
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
        bgColor: "#CFAE27",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-movie-4",
        type: FAVORITE_TYPES.MOVIE,
        title: "Reversion",
        author: "David Orlowitz",
        image: "/assets/favorites/reversion.jpg",
        bgColor: "#154553",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-movie-5",
        type: FAVORITE_TYPES.MOVIE,
        title: "The Wild Robot",
        author: "Chris Sanders",
        image: "/assets/favorites/the-wild-robot.jpg",
        bgColor: "#0E2B25",
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
        bgColor: "#5566D0",
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
        bgColor: "#524A38",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-video-4",
        type: FAVORITE_TYPES.VIDEO,
        title: "The Truly Absurd Secrets of An Incredible Americano",
        author: "James Hoffmann",
        image: "/assets/favorites/incredible-americano.jpg",
        bgColor: "#D4D4D4",
        description: "Got an espresso machine and am becoming a student of the game. This video has some interesting espresso history and anatomy, along with some unexpected tips on how to make a great Americano.",
        year: 2026
    },

    // ==================== 2026 BOOKS ====================
    {
        id: "fav-2026-book-1",
        type: FAVORITE_TYPES.BOOK,
        title: "Society of the Spectacle",
        author: "Guy Debord",
        image: "/assets/favorites/society-of-the-spectacle.jpg",
        bgColor: "#252324",
        description: "coming soon",
        year: 2026
    },
    {
        id: "fav-2026-book-2",
        type: FAVORITE_TYPES.BOOK,
        title: "The Design of Everyday Things",
        author: "Don Norman",
        image: "/assets/favorites/design-of-everyday-things.jpg",
        bgColor: "#DBD10B",
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
