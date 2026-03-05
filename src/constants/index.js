import movieImage from "../assets/movie.png"
import bubbleImage from "../assets/bubble.png"
import weatherImage from "../assets/weather.png"
import passwordGeneratorImage from "../assets/pass.png"
import spylt from "../assets/spylt.png"


export const projects = [
    {
        title: "Movie App",
        image: movieImage,
        description: "A React + Vite based web app that lets users browse movies (e.g. via an API), view details (poster, release date, rating), and search for specific titles. The UI is responsive and provides a clean experience for exploring movie information.",
        technology: ["React", "TailwindCSS","AppWrite"],
        link: "https://movie-app-flame-one.vercel.app/",
    },
    {
        title: "SPYLT Clone",
        image: spylt,
        description: "Frontend recreation and learning project inspired by Spylt — the Awwwards-winning website for high-protein caffeinated chocolate milk (designed by Tubik Studio.",
        technology: ["HTML", "CSS", "JavaScript"],
        link: "https://spylt-clone-rakib.vercel.app/",

    },
    {
        title: "Mini Weather App",
        image: weatherImage,
        description: "A simple weather forecasting application built using plain HTML, CSS, and JavaScript. Users can search by city and see current weather including icons, temperature, humidity, etc.",
        technology: ["HTML", "CSS", "JavaScript"],
        link: "https://rakib-dhali.github.io/weather-app/",

    },
    {
        title: "Bubble Game",
        image: bubbleImage,
        description: "A browser-based bubble popping game built with JavaScript. Players pop bubbles (or click interactive elements), likely with some scoring or time mechanics. A fun interactive experience demonstrating handling of DOM, events, and simple game logic.",
        technology: ["HTML", "CSS", "JavaScript"],
        link: "https://rakib-dhali.github.io/js-bubble-game/",

    },
    {
        title: "Random Password Generator",
        image: passwordGeneratorImage,
        description: "A utility web app for generating secure random passwords. Users can specify criteria (length, inclusion of symbols/numbers etc.), and the app generates passwords accordingly. Easy to use and visually clean.",
        technology: ["HTML", "CSS", "JavaScript"],
        link: "https://password-generator-neon-psi.vercel.app/",
    }
];


export const contact = {
    address: "Madaripur, Dhaka, Bangladesh",
    phoneNumber: "+8801707******",
    email: "mdrakibhossain343@outlook.com",
}