/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["El Messiri", "sans-serif"],
            radiotechnika: ["Radiotechnika", "sans-serif"],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                lg: "1.5rem",
            },
        },

        extend: {
            colors: {
                violet: "#452e47",
                beige: "#ad8d81",
                white: "#fff",
                "light-gray": "#F4F4F4",
            },
        },
    },
};
