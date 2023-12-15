/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "2rem",
                    sm: "2.5rem",
                    xl: "5rem",
                },
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
