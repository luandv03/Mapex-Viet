/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            borderWidth: {
                DEFAULT: "1px",
                0: "0",
                2: "2px",
                3: "3px",
                4: "4px",
                6: "6px",
                8: "8px",
            },
        },
    },
    plugins: [],
};
