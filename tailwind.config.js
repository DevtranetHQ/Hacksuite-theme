module.exports = {
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
        },
        fontSize: {
            "198px": ["198px", "1.5"],
            "156px": ["156px", "1.5"],
            "120px": ["120px", "1.5"],
            "96px": ["96px", "1.5"],
            "90px": ["90px", "1.5"],
            "84px": ["84px", "1.5"],
            "78px": ["78px", "1.5"],
            "72px": ["72px", "1.5"],
            "66px": ["66px", "1.5"],
            "60px": ["60px", "1.5"],
            "54px": ["54px", "1.5"],
            "48px": ["48px", "1.5"],
            "42px": ["42px", "1.5"],
            "36px": ["36px"],
            "30px": ["30px", "1.5"],
            "24px": ["24px", "1.5"],
            "18px": ["18px", "1.5"],
            "12px": ["12px", "1.5"]
        },
        maxWidth: {
            "screen": "100%",
            "regular": "95%",
            "medium": "75%",
            "small": "50%"
        }
    },
    plugins: [
        require("autoprefixer")
    ]
};
