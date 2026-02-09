const config = {
    autoSlideInterval: 3000, // Automatic slide transition time (ms)
    autoPlay: true, // Boolean value to control autoplay
    musicVolume: 0.05, // Default volume level (0 = 0%; 0.5 = 50%; 1 = 100%)

    logoURL: '/public/images/icon.png', // logo url

    background: {
        type: "video", // "image" or "video"
        url: "WM8MVlvUy-c&t=22s", // YouTube video ID or image file path
        videoProvider: "youtube" // Only for YouTube videos
    },

    socialMedia: [
        // Maximum of 4 items
        { name: "Web", icon: "/public/images/web.svg", link: "https://shrp.tebex.io/" },
        { name: "Discord", icon: "/public/images/discord.svg", link: "https://discord.gg/5YdTMRC7Pb" },
        { name: "YouTube", icon: "/public/images/youtube.svg", link: "https://www.youtube.com/@SANDYHILLSRP" },
        { name: "Instagram", icon: "/public/images/insta.svg", link: "https://discord.gg/5CZX9RJ2YV" }
    ],

    images: [
        '/public/images/images_1.png',
        '/public/images/images_2.png',
        '/public/images/images_3.png',
        '/public/images/images_4.png',
        // You can add more images
    ],

    songs: [
        // You can add more songs
        {
            title: 'SleepWalking',
            artist: 'The Chain Gang Of 1974',
            src: '/public/music/Chain-Gang-of-1974-Sleepwalking.mp3',
            img: '/public/images/sleepwalking.jpg'
        },
        {
            title: 'The Setup',
            artist: 'Favored Nations',
            src: '/public/music/The-Setup.mp3',
            img: '/public/images/the-setup.jpg'
        },
        {
            title: 'Welcome The Los Santos',
            artist: 'Oh No',
            src: '/public/music/Welcome-To-Los-Santos.mp3',
            img: '/public/images/welcome-lst.jpg'
        },
    ],

locales: {
    headerTitle: "SANDY HILLS RP",
    headerSubtitles: [
        "Welcome to Sandy Hills Roleplay",
        "The desert never sleeps… and neither does our RP.",
        "Your story starts here"
    ],
        cardTitles: [
            "Welcome to Sandy Hills Roleplay",
            "Explore Our Vast Waste Lands.",
            "Join Our Exciting Roleplay Community"
            // You can add more titles
        ],
        cardDescriptions: [
            "Sandy Hills RP is a serious roleplay community offering immersive scripts, custom vehicles, active staff support, and endless opportunities for every roleplayer. Whether you’re new or experienced, our team is here 24/7 to ensure the best RP experience possible.",
            "Welcome to Sandy Hills RP — a realistic roleplay server built for every type of player. With immersive scripts, custom vehicles and active staff.",
            "If you’ve been searching for a high-quality, realistic roleplay server and haven’t found the right place yet, Sandy Hills RP is here for you."
            // You can add more descriptions
        ],
        serverGalleryTitle: "Server Gallery", // Title for the server gallery section
        serverGalleryDescription: "Specially selected for you", // Description for the server gallery section
        socialMediaText: "Don't forget to visit", // Text for social media section
   
    },
};
