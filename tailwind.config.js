/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#09090b', // zinc-950
                foreground: '#fafafa', // zinc-50
                primary: {
                    DEFAULT: '#3b82f6', // blue-500 - placeholder, will refine
                    foreground: '#ffffff',
                },
                muted: {
                    DEFAULT: '#27272a', // zinc-800
                    foreground: '#a1a1aa', // zinc-400
                },
                accent: {
                    DEFAULT: '#27272a', // zinc-800
                    foreground: '#fafafa', // zinc-50
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
}
