const configValue = `module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "deep-sky-blue": "#03A9F4",
                "fruit-salad": "#4CAF50",
                "orange-peel": "#FF9800",
                "link": "#3B4FE4",
                "heading": "#1A1A1A",
                "body": "#6E7180"
            }
        },
        fontFamily: {
            "sans": ['"Myriad Pro"', "sans-serif"],
            "body": ['"Myriad Pro"']
        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("autoprefixer")
    ]
};`;

export default configValue;
