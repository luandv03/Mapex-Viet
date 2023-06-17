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
            boxShadow: {
                "bound-box": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                "bound-box-hover": "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            },
            animation: {
                "spin-slow": "spin 2s linear infinite",
            },
        },
    },
    plugins: [],
};
