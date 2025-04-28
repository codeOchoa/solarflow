/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                fadeLeft: 'fadeLeft 3s ease-in-out',
                fadeRight: 'fadeRight 3s ease-in-out',
            },
            colors: {
                'custom-yellow': '#FED700',
                ccfirst: "#233d4d",
                ccsecond: "#fe7f2d",
                ccthird: "#fcca46",
                ccfourth: "#a1c181",
                ccfifth: "#619b8a",
            },
            fontFamily: {
                sans: ['"Josefin Sans"', 'sans-serif'],
            },
            keyframes: {
                fadeLeft: {
                    '0%': { transform: 'translateX(0)', opacity: 1 },
                    '100%': { transform: 'translateX(-50px)', opacity: 0 },
                },
                fadeRight: {
                    '0%': { transform: 'translateX(50px)', opacity: 0 },
                    '100%': { transform: 'translateX(0)', opacity: 1 },
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("daisyui"),
    ],
    daisyui: {
        themes: [
            {
                solarflow: {
                    "primary": "#233d4d",
                    "secondary": "#fe7f2d",
                    "accent": "#fcca46",
                    "neutral": "#2A2A2A",
                    "base-100": "#121212",
                    "base-200": "#2A2A2A",
                    "base-300": "#EAEAEA",
                    "info": "#619b8a",
                    "success": "#a1c181",
                    "warning": "#fcca46",
                    "error": "#fe7f2d",
                },
            },
            "light",
            "dark",
            "cupcake"
        ],
    },
};  