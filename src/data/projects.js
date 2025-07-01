export const projects = [
    {
        id: "emojigen",
        category: "Machine Learning",
        title: "EmojiGen",
        subtitle: "Open-source emoji generation",
        period: "March 2025 - June 2025",
        description: "Aimed to explore modern deep learning techniques to recreate Apple's Genmoji. Fine tuned multiple open-source models on a dataset of 1,900 emoji-caption pairs and implemented techniques like Prompt Augmentation with light LM and RAG using precomputed CLIP embeddings. Also includes dev and client CLIs",
        skills: ["Python", "Google Cloud Platform", "Machine Learning"],
        attachments: [
            { name: "Poster", url: "/assets/projects/EmojiGEN-Poster.pdf" },
            { name: "Repository", url: "#" }
        ],
        img: "/assets/projects/thumbnails/emojigen_thumb.png",
        dark: true,
    },
    {
        id: "rev-delivery",
        category: "Mobile Development",
        title: "REV Delivery",
        subtitle: "App for scooter delivery startup, 8k+ users",
        period: "March 2024 - September 2024 | Seattle, Washington",
        description: "Solely developed, launched, and matintained mobile app for rapdily growing local scooter delivery startup. The app became the primary revenue driver, accounting for 75%+ of sales with 8k active users and 10k+ monthly orders within a 1mi radius of UW Campus!",
        skills: ["Mobile Development", "Payment Processing", "Database Management"],
        attachments: [
            { name: "Video Demo", url: "/assets/projects/rev_vday_video.mp4" }
        ],
        img: "/assets/projects/thumbnails/rev_thumb.png",
        dark: true,
    },
    {
        id: "ripple",
        category: "Mobile Development",
        title: "Ripple",
        subtitle: "Second-hand marketplace for UW students",
        period: "November 2024 - May 2025",
        description: "Second-hand marketplace mobile app for over 500 UW students. Placed 18th (of 180+ teams) in the Dempsey Startup Competition. Headline presenter at UW DubHacks Next's Demo Day",
        skills: ["React Native", "JavaScript", "Google Cloud Platform"],
        attachments: [
            { name: "Website", url: "https://rippleu.net" }
        ],
        img: "/assets/projects/thumbnails/ripple_thumb.png",
        dark: true,
    },
    {
        id: "dr-bayes",
        category: "Data Visualization",
        title: "Dr. Bayes",
        subtitle: "Interactive Bayesian inference \nvisualization",
        period: "January 2025 - March 2025",
        description: "Interactive data visualization that demonstrates how diagnostic probabilites can change with different symptom profiles using Bayesian inference with real COVID-19 data.",
        skills: ["JavaScript", "HTML", "D3.js", "Probability Theory"],
        attachments: [
            { name: "Website", url: "https://dr-bayes-41882b.pages.cs.washington.edu/" },
            { name: "Repository", url: "https://gitlab.cs.washington.edu/cse442/25wi/fp/Dr.Bayes" },
        ],
        img: "/assets/projects/thumbnails/drbayes_thumb.png",
        dark: true,
    },
    {
        id: "ngram-model",
        category: "Machine Learning",
        title: "ngram Model",
        subtitle: "Lightweight character prediction model",
        period: "January 2025 - March 2025",
        description: "A lightweight model to predict the three most likely next characters in a text string. Combined a 5-gram and a unigram model to optimize for speed while maintaing a high accuracy",
        skills: ["Python", "Bash", "Google Cloud Platform"],
        attachments: [
            { name: "Project Report", url: "/assets/projects/nlp_final_report_formatted.pdf" }
        ],
        img: "/assets/projects/thumbnails/ngram_thumb.png",
        dark: true,
    },
    {
        id: "kinarow",
        category: "Machine Learning",
        title: "KInARow (LeBot)",
        subtitle: "AI Agent playing KInARow (with the personality of LeBron)",
        period: "September 2024 - December 2024",
        description: 'Developed an AI agent to play a variation of connect 4 with a variable size. Used an A* search with a defensive and attacking heuristic. Agent makes "utterances" with the personality of LeBron James, based on the game state',
        skills: ["Python", "Machine Learning"],
        attachments: [
            { name: "Example Game", url: "/assets/projects/phunt22_kinarowgame.pdf" }
        ],
        img: "/assets/projects/thumbnails/kinarow_thumb.png",
        dark: true,
    },
    {
        id: "shout",
        category: "Web Development",
        title: "Shout",
        subtitle: "Anonymous reporting web app",
        period: "October 2023 - January 2024",
        description: "An anonymous reporting web app. Focused on gaining project experience and learning best practices of web development.",
        skills: ["Firebase", "React.js", "JavaScript"],
        attachments: [
            { name: "Video Demo", url: "https://youtu.be/74wTpJIU6AA" }
        ],
        img: "/assets/projects/thumbnails/shout_thumb.png", dark: false,
    },
    {
        id: "meal-maker",
        category: "Mobile Development",
        title: "Meal Maker",
        subtitle: "AI-powered meal suggestion app",
        period: "August 2023 - December 2023",
        description: "Mobile app that generates meal suggestions (with example images, ingredients, and instructions) based on available ingredients, dietary restrictions, and user preferences. My first AI and mobile project, was focused mainly on learning",
        skills: ["JavaScript", "Firebase", "React Native", "OpenAI API"],
        attachments: [
            { name: "Video Demo", url: "https://youtu.be/ZBi613l0N6w" }
        ],
        img: "/assets/projects/thumbnails/mealmaker_thumb.png",
        dark: true,
    },
    {
        id: "snapchat-lenses",
        category: "Snapchat Lenses",
        title: "Snapchat Lenses",
        subtitle: "6 Snapchat lenses gaining 12 million views",
        period: "January 2021 - January 2022",
        description: "Created 6 lenses gaining over 12 million views and 700k shares. While not very great, they were very fun to make and was my introduction to computer science",
        skills: ["Snapchat Lens Studio"],
        attachments: [
            { name: "My Lenses", url: "https://www.snapchat.com/add/whunt43" }
        ],
        img: "/assets/projects/thumbnails/snapchat_thumb.png",
        dark: true,
    },
]; 