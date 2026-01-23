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
export const FAVORITE_YEARS = [2026, 2025];

// Favorites data with background colors
export const favorites = [
    // ==================== 2025 MUSIC ====================
    {
        id: "fav-2025-music-1",
        type: FAVORITE_TYPES.MUSIC,
        title: "In Rainbows",
        author: "Radiohead",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2e/In_Rainbows_Official_Cover.jpg",
        bgColor: "#c94a4a",
        description: "A masterpiece of texture and emotion. The way this album balances delicate acoustic moments with electronic experimentation continues to inspire me.",
        year: 2025
    },
    {
        id: "fav-2025-music-2",
        type: FAVORITE_TYPES.MUSIC,
        title: "The Money Store",
        author: "Death Grips",
        image: "https://upload.wikimedia.org/wikipedia/en/d/dc/Death_Grips_-_The_Money_Store.png",
        bgColor: "#2d5a27",
        description: "Aggressive, chaotic, and somehow catchy. This album pushed my understanding of what music can be.",
        year: 2025
    },
    {
        id: "fav-2025-music-3",
        type: FAVORITE_TYPES.MUSIC,
        title: "Blonde",
        author: "Frank Ocean",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
        bgColor: "#e8d5b7",
        description: "Vulnerable and experimental. Frank Ocean created something that feels like a late-night conversation with yourself.",
        year: 2025
    },
    {
        id: "fav-2025-music-4",
        type: FAVORITE_TYPES.MUSIC,
        title: "Vespertine",
        author: "Bjork",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Bj%C3%B6rk_-_Vespertine_album_cover.png",
        bgColor: "#f5f0eb",
        description: "Intimate and crystalline. The micro-beats and music box sounds create a world that feels both fragile and infinite.",
        year: 2025
    },
    {
        id: "fav-2025-music-5",
        type: FAVORITE_TYPES.MUSIC,
        title: "Lift Your Skinny Fists",
        author: "Godspeed You! Black Emperor",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Lift_Your_Skinny_Fists_Like_Antennas_to_Heaven_cover.png",
        bgColor: "#1a1a1a",
        description: "Apocalyptic beauty. These long-form compositions feel like watching civilizations rise and fall.",
        year: 2025
    },
    {
        id: "fav-2025-music-6",
        type: FAVORITE_TYPES.MUSIC,
        title: "Currents",
        author: "Tame Impala",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png",
        bgColor: "#d4a574",
        description: "Psychedelic pop perfection. Kevin Parker's production is endlessly rewarding on repeated listens.",
        year: 2025
    },
    {
        id: "fav-2025-music-7",
        type: FAVORITE_TYPES.MUSIC,
        title: "Illinois",
        author: "Sufjan Stevens",
        image: "https://upload.wikimedia.org/wikipedia/en/e/ec/Sufjan_Stevens_-_Illinois.png",
        bgColor: "#4a7c59",
        description: "Ambitious americana with orchestral flourishes. Every song is a universe unto itself.",
        year: 2025
    },
    {
        id: "fav-2025-music-8",
        type: FAVORITE_TYPES.MUSIC,
        title: "Selected Ambient Works 85-92",
        author: "Aphex Twin",
        image: "https://upload.wikimedia.org/wikipedia/en/1/18/Selected_Ambient_Works_85-92.png",
        bgColor: "#3d2c1f",
        description: "The blueprint for ambient electronic music. These tracks sound like memories of dreams.",
        year: 2025
    },
    {
        id: "fav-2025-music-9",
        type: FAVORITE_TYPES.MUSIC,
        title: "Loveless",
        author: "My Bloody Valentine",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1e/My_Bloody_Valentine_-_Loveless.png",
        bgColor: "#d65c8a",
        description: "A wall of beautiful noise. This album redefined what guitars could sound like.",
        year: 2025
    },
    {
        id: "fav-2025-music-10",
        type: FAVORITE_TYPES.MUSIC,
        title: "Remain in Light",
        author: "Talking Heads",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Talking_Heads_-_Remain_in_Light.png",
        bgColor: "#cc3333",
        description: "Afrobeat meets new wave. The polyrhythms and anxious energy are perfectly captured.",
        year: 2025
    },

    // ==================== 2025 BOOKS ====================
    {
        id: "fav-2025-book-1",
        type: FAVORITE_TYPES.BOOK,
        title: "Godel, Escher, Bach",
        author: "Douglas Hofstadter",
        image: "https://upload.wikimedia.org/wikipedia/en/7/73/G%C3%B6del%2C_Escher%2C_Bach_%28first_edition%29.jpg",
        bgColor: "#8b4513",
        description: "A mind-bending exploration of consciousness, self-reference, and the beautiful patterns that emerge from simple rules.",
        year: 2025
    },
    {
        id: "fav-2025-book-2",
        type: FAVORITE_TYPES.BOOK,
        title: "The Pragmatic Programmer",
        author: "David Thomas & Andrew Hunt",
        image: "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
        bgColor: "#2c5f2d",
        description: "Essential reading for any developer. The principles here have shaped how I approach software craftsmanship.",
        year: 2025
    },
    {
        id: "fav-2025-book-3",
        type: FAVORITE_TYPES.BOOK,
        title: "Infinite Jest",
        author: "David Foster Wallace",
        image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Infinite_jest_cover.jpg",
        bgColor: "#87ceeb",
        description: "Dense, hilarious, and heartbreaking. A novel about addiction, entertainment, and the search for meaning.",
        year: 2025
    },
    {
        id: "fav-2025-book-4",
        type: FAVORITE_TYPES.BOOK,
        title: "Blood Meridian",
        author: "Cormac McCarthy",
        image: "https://upload.wikimedia.org/wikipedia/en/3/38/CormacMcCarthy_BloodMeridian.jpg",
        bgColor: "#8b0000",
        description: "Brutal and beautiful prose. McCarthy's meditation on violence is unforgettable.",
        year: 2025
    },
    {
        id: "fav-2025-book-5",
        type: FAVORITE_TYPES.BOOK,
        title: "Structure and Interpretation",
        author: "Abelson & Sussman",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/SICP_cover.jpg",
        bgColor: "#663399",
        description: "The wizard book. Changed how I think about computation and abstraction.",
        year: 2025
    },
    {
        id: "fav-2025-book-6",
        type: FAVORITE_TYPES.BOOK,
        title: "House of Leaves",
        author: "Mark Z. Danielewski",
        image: "https://upload.wikimedia.org/wikipedia/en/3/31/House_of_leaves.jpg",
        bgColor: "#1a1a2e",
        description: "A labyrinthine horror novel that plays with the form of the book itself. Genuinely unsettling.",
        year: 2025
    },
    {
        id: "fav-2025-book-7",
        type: FAVORITE_TYPES.BOOK,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Thinking%2C_Fast_and_Slow.jpg",
        bgColor: "#ff6b35",
        description: "A comprehensive look at how we think and make decisions. Eye-opening research presented clearly.",
        year: 2025
    },
    {
        id: "fav-2025-book-8",
        type: FAVORITE_TYPES.BOOK,
        title: "Siddhartha",
        author: "Hermann Hesse",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hesse_Siddhartha_1922.jpg",
        bgColor: "#daa520",
        description: "A lyrical journey toward enlightenment. Simple prose that carries profound wisdom.",
        year: 2025
    },
    {
        id: "fav-2025-book-9",
        type: FAVORITE_TYPES.BOOK,
        title: "The Design of Everyday Things",
        author: "Don Norman",
        image: "https://m.media-amazon.com/images/I/71rqp4HcJUL._AC_UF1000,1000_QL80_.jpg",
        bgColor: "#4169e1",
        description: "Once you read this, you'll never look at doors the same way. Fundamental design principles.",
        year: 2025
    },
    {
        id: "fav-2025-book-10",
        type: FAVORITE_TYPES.BOOK,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        image: "https://upload.wikimedia.org/wikipedia/en/0/06/Sapiens_A_Brief_History_of_Humankind.jpg",
        bgColor: "#cd853f",
        description: "A sweeping history of humankind. Changed my perspective on civilization and progress.",
        year: 2025
    },

    // ==================== 2025 ARTICLES ====================
    {
        id: "fav-2025-article-1",
        type: FAVORITE_TYPES.ARTICLE,
        title: "What I Wish I Knew When Learning Haskell",
        author: "Stephen Diehl",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400",
        bgColor: "#5e4b8b",
        description: "A comprehensive guide that demystified functional programming for me. Dense but rewarding.",
        year: 2025
    },
    {
        id: "fav-2025-article-2",
        type: FAVORITE_TYPES.ARTICLE,
        title: "The Bitter Lesson",
        author: "Rich Sutton",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400",
        bgColor: "#2f4f4f",
        description: "A profound observation about AI research: general methods that leverage computation win in the long run.",
        year: 2025
    },
    {
        id: "fav-2025-article-3",
        type: FAVORITE_TYPES.ARTICLE,
        title: "Choose Boring Technology",
        author: "Dan McKinley",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
        bgColor: "#708090",
        description: "A wise take on technology choices. Innovation tokens are limited - spend them wisely.",
        year: 2025
    },
    {
        id: "fav-2025-article-4",
        type: FAVORITE_TYPES.ARTICLE,
        title: "Reflections on Trusting Trust",
        author: "Ken Thompson",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
        bgColor: "#2e8b57",
        description: "A classic computer security paper that shows you can never fully trust software.",
        year: 2025
    },
    {
        id: "fav-2025-article-5",
        type: FAVORITE_TYPES.ARTICLE,
        title: "The Tyranny of Structurelessness",
        author: "Jo Freeman",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400",
        bgColor: "#b8860b",
        description: "An essay about how informal hierarchies emerge even in supposedly flat organizations.",
        year: 2025
    },
    {
        id: "fav-2025-article-6",
        type: FAVORITE_TYPES.ARTICLE,
        title: "How Complex Systems Fail",
        author: "Richard Cook",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400",
        bgColor: "#dc143c",
        description: "18 observations about system failures. Essential reading for anyone building reliable systems.",
        year: 2025
    },
    {
        id: "fav-2025-article-7",
        type: FAVORITE_TYPES.ARTICLE,
        title: "Out of the Tar Pit",
        author: "Moseley & Marks",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400",
        bgColor: "#4682b4",
        description: "A compelling argument for functional-relational programming and managing complexity.",
        year: 2025
    },
    {
        id: "fav-2025-article-8",
        type: FAVORITE_TYPES.ARTICLE,
        title: "Computers Can Be Understood",
        author: "Nelson Elhage",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
        bgColor: "#3cb371",
        description: "An empowering reminder that systems are knowable - we can understand how things work.",
        year: 2025
    },
    {
        id: "fav-2025-article-9",
        type: FAVORITE_TYPES.ARTICLE,
        title: "The Night Watch",
        author: "James Mickens",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400",
        bgColor: "#191970",
        description: "Hilarious and insightful essay about systems programming and security research.",
        year: 2025
    },
    {
        id: "fav-2025-article-10",
        type: FAVORITE_TYPES.ARTICLE,
        title: "A Cypherpunk's Manifesto",
        author: "Eric Hughes",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
        bgColor: "#2f2f2f",
        description: "The foundational document of the privacy movement. More relevant than ever.",
        year: 2025
    },

    // ==================== 2025 MOVIES ====================
    {
        id: "fav-2025-movie-1",
        type: FAVORITE_TYPES.MOVIE,
        title: "Stalker",
        author: "Andrei Tarkovsky",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8f/Stalker_%281979%29.png",
        bgColor: "#4a5d23",
        description: "Slow, meditative, and profound. A film about hope, faith, and the human desire for meaning.",
        year: 2025
    },
    {
        id: "fav-2025-movie-2",
        type: FAVORITE_TYPES.MOVIE,
        title: "Blade Runner 2049",
        author: "Denis Villeneuve",
        image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
        bgColor: "#ff8c00",
        description: "A rare sequel that expands on the original while standing on its own. Visually stunning.",
        year: 2025
    },
    {
        id: "fav-2025-movie-3",
        type: FAVORITE_TYPES.MOVIE,
        title: "Mulholland Drive",
        author: "David Lynch",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7d/Mulholland_Drive_poster.png",
        bgColor: "#1a0a2e",
        description: "A puzzle box of a film. Lynch at his most dreamlike and disturbing.",
        year: 2025
    },
    {
        id: "fav-2025-movie-4",
        type: FAVORITE_TYPES.MOVIE,
        title: "In the Mood for Love",
        author: "Wong Kar-wai",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6a/In_the_Mood_for_Love_movie.jpg",
        bgColor: "#8b0a50",
        description: "Achingly beautiful. Every frame is a painting, every moment weighted with longing.",
        year: 2025
    },
    {
        id: "fav-2025-movie-5",
        type: FAVORITE_TYPES.MOVIE,
        title: "2001: A Space Odyssey",
        author: "Stanley Kubrick",
        image: "https://upload.wikimedia.org/wikipedia/en/1/11/2001_A_Space_Odyssey_%281968%29.png",
        bgColor: "#000033",
        description: "Cinema as pure experience. Kubrick's vision of humanity's past and future remains unmatched.",
        year: 2025
    },
    {
        id: "fav-2025-movie-6",
        type: FAVORITE_TYPES.MOVIE,
        title: "The Matrix",
        author: "The Wachowskis",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        bgColor: "#003300",
        description: "Revolutionary action filmmaking with genuine philosophical depth. Still thrilling.",
        year: 2025
    },
    {
        id: "fav-2025-movie-7",
        type: FAVORITE_TYPES.MOVIE,
        title: "Eternal Sunshine",
        author: "Michel Gondry",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Eternal_Sunshine_of_the_Spotless_Mind.png",
        bgColor: "#4169e1",
        description: "A heartbreaking exploration of love, memory, and identity. Charlie Kaufman at his best.",
        year: 2025
    },
    {
        id: "fav-2025-movie-8",
        type: FAVORITE_TYPES.MOVIE,
        title: "Spirited Away",
        author: "Hayao Miyazaki",
        image: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
        bgColor: "#4ecdc4",
        description: "Pure imagination made visible. Miyazaki's masterpiece of wonder and growth.",
        year: 2025
    },
    {
        id: "fav-2025-movie-9",
        type: FAVORITE_TYPES.MOVIE,
        title: "There Will Be Blood",
        author: "Paul Thomas Anderson",
        image: "https://upload.wikimedia.org/wikipedia/en/d/dd/There_Will_Be_Blood_Poster.jpg",
        bgColor: "#1a0000",
        description: "Daniel Day-Lewis is mesmerizing. A study of ambition and corruption in American capitalism.",
        year: 2025
    },
    {
        id: "fav-2025-movie-10",
        type: FAVORITE_TYPES.MOVIE,
        title: "Arrival",
        author: "Denis Villeneuve",
        image: "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg",
        bgColor: "#808080",
        description: "Science fiction that prioritizes ideas and emotion. The ending recontextualizes everything.",
        year: 2025
    },

    // ==================== 2025 VIDEOS ====================
    {
        id: "fav-2025-video-1",
        type: FAVORITE_TYPES.VIDEO,
        title: "The Art of Code",
        author: "Dylan Beattie",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
        bgColor: "#6b5b95",
        description: "A delightful talk about the creative and playful side of programming. Made me fall in love with code all over again.",
        year: 2025
    },
    {
        id: "fav-2025-video-2",
        type: FAVORITE_TYPES.VIDEO,
        title: "The Last Lecture",
        author: "Randy Pausch",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400",
        bgColor: "#ff6f61",
        description: "Wisdom about living fully from someone facing mortality. Moving and practical.",
        year: 2025
    },
    {
        id: "fav-2025-video-3",
        type: FAVORITE_TYPES.VIDEO,
        title: "Simple Made Easy",
        author: "Rich Hickey",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400",
        bgColor: "#45b8ac",
        description: "A crucial distinction between simple and easy. Changed how I evaluate technical decisions.",
        year: 2025
    },
    {
        id: "fav-2025-video-4",
        type: FAVORITE_TYPES.VIDEO,
        title: "The Mother of All Demos",
        author: "Doug Engelbart",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400",
        bgColor: "#9b2335",
        description: "1968: hypertext, video conferencing, the mouse. Engelbart invented the future.",
        year: 2025
    },
    {
        id: "fav-2025-video-5",
        type: FAVORITE_TYPES.VIDEO,
        title: "Boundaries",
        author: "Gary Bernhardt",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
        bgColor: "#efc050",
        description: "A clear explanation of functional core, imperative shell. Practical architecture advice.",
        year: 2025
    },
    {
        id: "fav-2025-video-6",
        type: FAVORITE_TYPES.VIDEO,
        title: "Hammock Driven Development",
        author: "Rich Hickey",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
        bgColor: "#88b04b",
        description: "Why thinking away from the computer is essential. Great advice for hard problems.",
        year: 2025
    },
    {
        id: "fav-2025-video-7",
        type: FAVORITE_TYPES.VIDEO,
        title: "Wat",
        author: "Gary Bernhardt",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400",
        bgColor: "#d65076",
        description: "A hilarious lightning talk about JavaScript and Ruby quirks. Four minutes of joy.",
        year: 2025
    },
    {
        id: "fav-2025-video-8",
        type: FAVORITE_TYPES.VIDEO,
        title: "Media for Thinking the Unthinkable",
        author: "Bret Victor",
        image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400",
        bgColor: "#5b5ea6",
        description: "How dynamic media can extend our ability to think. Inspiring and challenging.",
        year: 2025
    },
    {
        id: "fav-2025-video-9",
        type: FAVORITE_TYPES.VIDEO,
        title: "Growing a Language",
        author: "Guy Steele",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",
        bgColor: "#92a8d1",
        description: "A brilliant talk about language design, delivered with a clever constraint.",
        year: 2025
    },
    {
        id: "fav-2025-video-10",
        type: FAVORITE_TYPES.VIDEO,
        title: "Stop Drawing Dead Fish",
        author: "Bret Victor",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
        bgColor: "#f7cac9",
        description: "A vision of interactive, responsive digital art. Makes you rethink creative tools.",
        year: 2025
    },

    // ==================== 2026 MUSIC ====================
    {
        id: "fav-2026-music-1",
        type: FAVORITE_TYPES.MUSIC,
        title: "Titanic Rising",
        author: "Weyes Blood",
        image: "https://upload.wikimedia.org/wikipedia/en/1/15/Weyes_Blood_-_Titanic_Rising.png",
        bgColor: "#a8d5e5",
        description: "Lush orchestration meets melancholic songwriting. An album that feels like it exists outside of time.",
        year: 2026
    },
    {
        id: "fav-2026-music-2",
        type: FAVORITE_TYPES.MUSIC,
        title: "LP!",
        author: "JPEGMAFIA",
        image: "https://upload.wikimedia.org/wikipedia/en/9/92/Jpegmafia_-_LP%21.png",
        bgColor: "#ff1493",
        description: "Experimental hip-hop that rewards repeated listens. Every track reveals new details.",
        year: 2026
    },
    {
        id: "fav-2026-music-3",
        type: FAVORITE_TYPES.MUSIC,
        title: "To Pimp a Butterfly",
        author: "Kendrick Lamar",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png",
        bgColor: "#2d2d2d",
        description: "A jazz-funk odyssey through Black American experience. Dense, political, and musically adventurous.",
        year: 2026
    },
    {
        id: "fav-2026-music-4",
        type: FAVORITE_TYPES.MUSIC,
        title: "Fetch the Bolt Cutters",
        author: "Fiona Apple",
        image: "https://upload.wikimedia.org/wikipedia/en/9/98/Fiona_Apple_-_Fetch_the_Bolt_Cutters.png",
        bgColor: "#c9b1ff",
        description: "Raw, percussive, and liberating. Apple at her most uncompromising.",
        year: 2026
    },
    {
        id: "fav-2026-music-5",
        type: FAVORITE_TYPES.MUSIC,
        title: "The Glow Pt. 2",
        author: "The Microphones",
        image: "https://upload.wikimedia.org/wikipedia/en/2/24/Microphones-glow-pt2.jpg",
        bgColor: "#ffa500",
        description: "Lo-fi folk that feels like the earth breathing. Phil Elverum captures something primal.",
        year: 2026
    },
    {
        id: "fav-2026-music-6",
        type: FAVORITE_TYPES.MUSIC,
        title: "Spirit of Eden",
        author: "Talk Talk",
        image: "https://upload.wikimedia.org/wikipedia/en/2/25/Talk_Talk_-_Spirit_of_Eden.jpeg",
        bgColor: "#228b22",
        description: "Post-rock before post-rock existed. Atmospheric and patient.",
        year: 2026
    },
    {
        id: "fav-2026-music-7",
        type: FAVORITE_TYPES.MUSIC,
        title: "Dummy",
        author: "Portishead",
        image: "https://upload.wikimedia.org/wikipedia/en/3/33/PortisheadDummy.jpg",
        bgColor: "#36454f",
        description: "Cinematic trip-hop. Beth Gibbons' voice and the production are hypnotic.",
        year: 2026
    },
    {
        id: "fav-2026-music-8",
        type: FAVORITE_TYPES.MUSIC,
        title: "Merriweather Post Pavilion",
        author: "Animal Collective",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2b/Animal_Collective_-_Merriweather_Post_Pavilion.png",
        bgColor: "#ff69b4",
        description: "Psychedelic summer sounds. Euphoric and experimental.",
        year: 2026
    },
    {
        id: "fav-2026-music-9",
        type: FAVORITE_TYPES.MUSIC,
        title: "Carrie & Lowell",
        author: "Sufjan Stevens",
        image: "https://upload.wikimedia.org/wikipedia/en/d/dc/Sufjan_Stevens_-_Carrie_%26_Lowell.png",
        bgColor: "#d3d3d3",
        description: "Devastating beauty. Stevens processes grief with quiet intensity.",
        year: 2026
    },
    {
        id: "fav-2026-music-10",
        type: FAVORITE_TYPES.MUSIC,
        title: "The Fragile",
        author: "Nine Inch Nails",
        image: "https://upload.wikimedia.org/wikipedia/en/0/07/The_Fragile_%28album%29.png",
        bgColor: "#000000",
        description: "Industrial rock as art. Trent Reznor's maximalist double album is endlessly detailed.",
        year: 2026
    },

    // ==================== 2026 BOOKS ====================
    {
        id: "fav-2026-book-1",
        type: FAVORITE_TYPES.BOOK,
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        image: "https://m.media-amazon.com/images/I/91YfNb49PLL._AC_UF1000,1000_QL80_.jpg",
        bgColor: "#4a90d9",
        description: "The definitive guide to building reliable, scalable systems. Changed how I think about data architecture.",
        year: 2026
    },
    {
        id: "fav-2026-book-2",
        type: FAVORITE_TYPES.BOOK,
        title: "The Remains of the Day",
        author: "Kazuo Ishiguro",
        image: "https://upload.wikimedia.org/wikipedia/en/3/31/The_Remains_of_the_Day.jpg",
        bgColor: "#8b7355",
        description: "A meditation on dignity, regret, and wasted potential. Quietly devastating.",
        year: 2026
    },
    {
        id: "fav-2026-book-3",
        type: FAVORITE_TYPES.BOOK,
        title: "Working in Public",
        author: "Nadia Eghbal",
        image: "https://m.media-amazon.com/images/I/71sDfUUmfWL._AC_UF1000,1000_QL80_.jpg",
        bgColor: "#7cb9e8",
        description: "Essential reading about open source communities. Eghbal maps the territory clearly.",
        year: 2026
    },
    {
        id: "fav-2026-book-4",
        type: FAVORITE_TYPES.BOOK,
        title: "The Dispossessed",
        author: "Ursula K. Le Guin",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8c/TheDispossed%281stEdHardworker%29.jpg",
        bgColor: "#d2691e",
        description: "Science fiction as political philosophy. Le Guin imagines alternative social structures.",
        year: 2026
    },
    {
        id: "fav-2026-book-5",
        type: FAVORITE_TYPES.BOOK,
        title: "Zen and the Art of Motorcycle Maintenance",
        author: "Robert Pirsig",
        image: "https://upload.wikimedia.org/wikipedia/en/8/85/Zen_and_the_Art_of_Motorcycle_Maintenance.jpg",
        bgColor: "#98d8c8",
        description: "Philosophy disguised as a road trip. Pirsig's inquiry into quality resonates.",
        year: 2026
    },
    {
        id: "fav-2026-book-6",
        type: FAVORITE_TYPES.BOOK,
        title: "Meditations",
        author: "Marcus Aurelius",
        image: "https://m.media-amazon.com/images/I/51cQEdN9KuL._AC_UF1000,1000_QL80_.jpg",
        bgColor: "#c4a35a",
        description: "Stoic philosophy from a Roman emperor. Practical wisdom for difficult times.",
        year: 2026
    },
    {
        id: "fav-2026-book-7",
        type: FAVORITE_TYPES.BOOK,
        title: "Neuromancer",
        author: "William Gibson",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Neuromancer_%28Book%29.jpg",
        bgColor: "#00ced1",
        description: "The book that defined cyberpunk. Gibson's prose crackles with electric energy.",
        year: 2026
    },
    {
        id: "fav-2026-book-8",
        type: FAVORITE_TYPES.BOOK,
        title: "On Writing Well",
        author: "William Zinsser",
        image: "https://m.media-amazon.com/images/I/71EYfk71gdL._AC_UF1000,1000_QL80_.jpg",
        bgColor: "#f5deb3",
        description: "Clear, practical advice for nonfiction writing. I return to it regularly.",
        year: 2026
    },
    {
        id: "fav-2026-book-9",
        type: FAVORITE_TYPES.BOOK,
        title: "The Art of Doing Science",
        author: "Richard Hamming",
        image: "https://m.media-amazon.com/images/I/71UrCjYlvCL._AC_UF1000,1000_QL80_.jpg",
        bgColor: "#9370db",
        description: "Career advice from a computing legend. How to do significant work.",
        year: 2026
    },
    {
        id: "fav-2026-book-10",
        type: FAVORITE_TYPES.BOOK,
        title: "Amusing Ourselves to Death",
        author: "Neil Postman",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Amusing_Ourselves_to_Death.jpg",
        bgColor: "#ff6347",
        description: "Prescient critique of television culture. Even more relevant in the internet age.",
        year: 2026
    },

    // ==================== 2026 ARTICLES ====================
    {
        id: "fav-2026-article-1",
        type: FAVORITE_TYPES.ARTICLE,
        title: "Taste and The Craft of Software",
        author: "Dan Luu",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
        bgColor: "#5f9ea0",
        description: "A thoughtful piece on what separates good engineers from great ones.",
        year: 2026
    },
    {
        id: "fav-2026-article-2",
        type: FAVORITE_TYPES.ARTICLE,
        title: "You and Your Research",
        author: "Richard Hamming",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400",
        bgColor: "#daa520",
        description: "What it takes to do first-class research. Hamming's talk transcribed and timeless.",
        year: 2026
    },
    {
        id: "fav-2026-article-3",
        type: FAVORITE_TYPES.ARTICLE,
        title: "The Grug Brained Developer",
        author: "Carson Gross",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400",
        bgColor: "#8b4513",
        description: "Humorous but wise advice about keeping things simple. Complexity bad.",
        year: 2026
    },
    {
        id: "fav-2026-article-4",
        type: FAVORITE_TYPES.ARTICLE,
        title: "No Silver Bullet",
        author: "Fred Brooks",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400",
        bgColor: "#708090",
        description: "Why software is essentially hard. Brooks' classic essay on complexity.",
        year: 2026
    },
    {
        id: "fav-2026-article-5",
        type: FAVORITE_TYPES.ARTICLE,
        title: "The Law of Leaky Abstractions",
        author: "Joel Spolsky",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
        bgColor: "#4682b4",
        description: "Why abstractions always leak, and what to do about it.",
        year: 2026
    },
    {
        id: "fav-2026-article-6",
        type: FAVORITE_TYPES.ARTICLE,
        title: "The Hardest Program I've Ever Written",
        author: "Bob Nystrom",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400",
        bgColor: "#9932cc",
        description: "The story behind Dart's formatter. A window into real engineering challenges.",
        year: 2026
    },
    {
        id: "fav-2026-article-7",
        type: FAVORITE_TYPES.ARTICLE,
        title: "Write Code Every Day",
        author: "John Resig",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
        bgColor: "#32cd32",
        description: "How small daily progress beats sporadic bursts. Simple but transformative.",
        year: 2026
    },
    {
        id: "fav-2026-article-8",
        type: FAVORITE_TYPES.ARTICLE,
        title: "Things You Should Never Do",
        author: "Joel Spolsky",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
        bgColor: "#dc143c",
        description: "Why rewriting from scratch is almost always wrong. Learn from Netscape's mistake.",
        year: 2026
    },
    {
        id: "fav-2026-article-9",
        type: FAVORITE_TYPES.ARTICLE,
        title: "Parse, Don't Validate",
        author: "Alexis King",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",
        bgColor: "#00bfff",
        description: "A shift in thinking about data handling. Make illegal states unrepresentable.",
        year: 2026
    },
    {
        id: "fav-2026-article-10",
        type: FAVORITE_TYPES.ARTICLE,
        title: "What Every Programmer Should Know About Memory",
        author: "Ulrich Drepper",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
        bgColor: "#2e8b57",
        description: "Deep dive into memory hierarchies. Essential for performance-sensitive work.",
        year: 2026
    },

    // ==================== 2026 MOVIES ====================
    {
        id: "fav-2026-movie-1",
        type: FAVORITE_TYPES.MOVIE,
        title: "Everything Everywhere All at Once",
        author: "Daniels",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
        bgColor: "#ff6b6b",
        description: "A maximalist masterpiece about family, meaning, and the multiverse. Made me laugh and cry.",
        year: 2026
    },
    {
        id: "fav-2026-movie-2",
        type: FAVORITE_TYPES.MOVIE,
        title: "Her",
        author: "Spike Jonze",
        image: "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
        bgColor: "#ffb6c1",
        description: "A tender sci-fi romance about connection in digital age. Prescient and moving.",
        year: 2026
    },
    {
        id: "fav-2026-movie-3",
        type: FAVORITE_TYPES.MOVIE,
        title: "Parasite",
        author: "Bong Joon-ho",
        image: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
        bgColor: "#3d5a45",
        description: "Genre-defying social commentary. Every scene serves the whole.",
        year: 2026
    },
    {
        id: "fav-2026-movie-4",
        type: FAVORITE_TYPES.MOVIE,
        title: "The Social Network",
        author: "David Fincher",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Social_Network_film_poster.png",
        bgColor: "#1c2841",
        description: "Sorkin's dialogue and Fincher's direction are perfect. A modern tragedy.",
        year: 2026
    },
    {
        id: "fav-2026-movie-5",
        type: FAVORITE_TYPES.MOVIE,
        title: "Lost in Translation",
        author: "Sofia Coppola",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Lost_in_Translation_poster.jpg",
        bgColor: "#ffe4e1",
        description: "Quiet connection between two lost souls. Tokyo has never looked more beautiful or lonely.",
        year: 2026
    },
    {
        id: "fav-2026-movie-6",
        type: FAVORITE_TYPES.MOVIE,
        title: "Memories of Murder",
        author: "Bong Joon-ho",
        image: "https://upload.wikimedia.org/wikipedia/en/9/91/Memoriesofmurder.jpg",
        bgColor: "#556b2f",
        description: "True crime procedural that becomes something deeper. The ending haunts.",
        year: 2026
    },
    {
        id: "fav-2026-movie-7",
        type: FAVORITE_TYPES.MOVIE,
        title: "Synecdoche, New York",
        author: "Charlie Kaufman",
        image: "https://upload.wikimedia.org/wikipedia/en/2/27/Synecdoche%2C_New_York_poster.jpg",
        bgColor: "#696969",
        description: "A film about life, death, art, and everything. Demanding but rewarding.",
        year: 2026
    },
    {
        id: "fav-2026-movie-8",
        type: FAVORITE_TYPES.MOVIE,
        title: "The Grand Budapest Hotel",
        author: "Wes Anderson",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel.png",
        bgColor: "#e6a8d7",
        description: "Anderson at his most controlled and emotional. A confection with depth.",
        year: 2026
    },
    {
        id: "fav-2026-movie-9",
        type: FAVORITE_TYPES.MOVIE,
        title: "Drive",
        author: "Nicolas Winding Refn",
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Drive_2011_film_poster.jpg",
        bgColor: "#ffd700",
        description: "Neon-soaked noir with a beating heart. Style and substance in balance.",
        year: 2026
    },
    {
        id: "fav-2026-movie-10",
        type: FAVORITE_TYPES.MOVIE,
        title: "No Country for Old Men",
        author: "Coen Brothers",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        bgColor: "#a0522d",
        description: "McCarthy adapted perfectly. Chigurh is one of cinema's great villains.",
        year: 2026
    },

    // ==================== 2026 VIDEOS ====================
    {
        id: "fav-2026-video-1",
        type: FAVORITE_TYPES.VIDEO,
        title: "Inventing on Principle",
        author: "Bret Victor",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
        bgColor: "#e74c3c",
        description: "A legendary talk about immediate feedback in creative tools. Fundamentally shifted my perspective on software design.",
        year: 2026
    },
    {
        id: "fav-2026-video-2",
        type: FAVORITE_TYPES.VIDEO,
        title: "The Future of Programming",
        author: "Bret Victor",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
        bgColor: "#3498db",
        description: "A clever presentation disguised as a 1970s lecture. A reminder that the best ideas are often forgotten.",
        year: 2026
    },
    {
        id: "fav-2026-video-3",
        type: FAVORITE_TYPES.VIDEO,
        title: "How to Speak",
        author: "Patrick Winston",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400",
        bgColor: "#27ae60",
        description: "MIT's legendary lecture on communication. Practical techniques for better presentations.",
        year: 2026
    },
    {
        id: "fav-2026-video-4",
        type: FAVORITE_TYPES.VIDEO,
        title: "Preventing the Collapse of Civilization",
        author: "Jonathan Blow",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
        bgColor: "#34495e",
        description: "Why software quality matters for civilization. Provocative and important.",
        year: 2026
    },
    {
        id: "fav-2026-video-5",
        type: FAVORITE_TYPES.VIDEO,
        title: "The Birth & Death of JavaScript",
        author: "Gary Bernhardt",
        image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=400",
        bgColor: "#f39c12",
        description: "A satirical history of computing. Hilarious and oddly plausible.",
        year: 2026
    },
    {
        id: "fav-2026-video-6",
        type: FAVORITE_TYPES.VIDEO,
        title: "Performance Matters",
        author: "Emery Berger",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
        bgColor: "#1abc9c",
        description: "Why most performance benchmarks are wrong. Rigorous and eye-opening.",
        year: 2026
    },
    {
        id: "fav-2026-video-7",
        type: FAVORITE_TYPES.VIDEO,
        title: "Zebras All the Way Down",
        author: "Bryan Cantrill",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
        bgColor: "#8e44ad",
        description: "Debugging at the operating system level. Cantrill is a master storyteller.",
        year: 2026
    },
    {
        id: "fav-2026-video-8",
        type: FAVORITE_TYPES.VIDEO,
        title: "The Mess We're In",
        author: "Joe Armstrong",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400",
        bgColor: "#e67e22",
        description: "Erlang's creator on software complexity. Sobering and insightful.",
        year: 2026
    },
    {
        id: "fav-2026-video-9",
        type: FAVORITE_TYPES.VIDEO,
        title: "What the heck is the event loop anyway?",
        author: "Philip Roberts",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
        bgColor: "#3498db",
        description: "JavaScript's execution model explained clearly. Essential for any web developer.",
        year: 2026
    },
    {
        id: "fav-2026-video-10",
        type: FAVORITE_TYPES.VIDEO,
        title: "A Whole New World",
        author: "Gary Bernhardt",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
        bgColor: "#9b59b6",
        description: "Imagining better programming tools. Short but perspective-shifting.",
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
