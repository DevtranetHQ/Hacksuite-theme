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
};

@tailwind base;
@tailwind components;
@tailwind utilities;

/*
 * Set up font families
 */
@font-face {
    font-family: "Myriad Pro";
    src: url("../public/fonts/MyriadPro-Regular.woff") format("woff");
}

@font-face {
    font-family: "Myriad Pro";
    font-style: italic;
    src: url("../public/fonts/MyriadPro-Regular.woff") format("woff");
}

@font-face {
    font-family: "Myriad Pro";
    font-weight: 700;
    src: url("../public/fonts/MyriadPro-Bold.woff") format("woff");
}

@font-face {
    font-family: "Myriad Pro";
    font-style: italic;
    font-weight: 700;
    src: url("../public/fonts/MyriadPro-BoldItalic.woff") format("woff");
}

@layer base {
    a {
        @apply text-link;
    }

    body, html {
        @apply overflow-x-hidden;
    }

    p {
        @apply text-[22px];
    }

    /*
     * Code components
     */
    code {
        @apply bg-[#ededed] rounded px-1 pt-1 font-sans text-deep-sky-blue;
    }

    code a {
        @apply decoration-red-500 text-deep-sky-blue underline;
    }

    pre {
        @apply bg-[#e0e0e0] rounded px-5 py-3 font-sans leading-[1.75rem] overflow-auto text-[1.25rem] text-[#4d4d4d];
    }
}

@layer components {
    /*
     * Typography
     */
    .heading {
        @apply font-bold text-36px md:text-42px;
    }

    .ultratitle {
        @apply font-bold text-66px md:text-120px;
    }

    .title {
        @apply font-bold text-60px md:text-66px;
    }

    .subtitle {
        @apply text-30px md:text-36px text-body;
    }

    .headline {
        @apply font-bold text-36px md:text-42px;
    }

    .subheadline {
        @apply font-bold text-24px;
    }

    .eyebrow {
        @apply font-bold text-30px md:text-36px text-body uppercase;
    }

    .lead {
        @apply text-24px;
    }

    .caption {
        @apply text-18px text-body;
    }

    /*
     * Buttons
     */
    .button-big, .button-medium, .button-small {
        @apply flex items-center justify-center bg-deep-sky-blue font-bold px-5 py-1 mr-2 mb-2 rounded-md text-white transition-all hover:scale-105 focus:scale-105;
    }

    .outline-button-big, .outline-button-medium, .outline-button-small {
        @apply flex items-center justify-center border-[3px] border-deep-sky-blue font-bold px-5 py-1 mr-2 mb-2 rounded-md text-deep-sky-blue transition-all hover:scale-105 focus:scale-105;
    }

    .cta-button-big, .cta-button-medium, .cta-button-small {
        @apply flex items-center justify-center font-bold px-5 py-1 mr-2 mb-2 rounded-md text-white transition-all hover:scale-105 focus:scale-105;
        background: linear-gradient(98.64deg, #FFFFFF -26.46%, #03A9F4 56.71%);
    }

    .button-big, .outline-button-big, .cta-button-big {
        @apply text-36px;
    }

    .button-medium, .outline-button-medium, .cta-button-medium, form button {
        @apply text-24px;
    }

    .button-small, .outline-button-small, .cta-button-small {
        @apply text-18px;
    }

    /*
     * Cards
     */
    .card-primary, .card-sunken, .card-interactive, .card-gradient-text, .card-gradient {
        @apply mb-3 p-3 rounded text-center;
    }

    .card-primary, .card-interactive, .card-gradient-text {
        @apply bg-white shadow-md;
    }

    .card-sunken {
        @apply bg-[#a3a3a3];
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .card-interactive {
        @apply cursor-pointer hover:shadow-lg;
    }

    .card-gradient-text h1 {
        background: linear-gradient(94.14deg, #FFFFFF -48.74%, #03A9F4 57.74%);
        @apply text-transparent bg-clip-text;
    }

    .card-gradient {
        @apply text-white;
        background: linear-gradient(96.34deg, #F8FBFF -27.94%, #03A9F4 59.6%);
    }

    .card-translucent, .card-translucent-dark {
        @apply mb-3 p-10 text-center;
    }

    .card-translucent {
        @apply bg-[#f1f1f1];
    }

    .card-translucent-dark {
        @apply bg-[#5c5c5c] text-white;
    }

    /*
     * Badges
     */
    .pill-badge {
        @apply border-deep-sky-blue border-[3px] bg-deep-sky-blue inline-block mb-2 mr-2 px-5 py-1 rounded-full text-center text-24px text-white;
    }

    .outline-badge {
        @apply border-deep-sky-blue border-[3px] inline-block mb-2 mr-2 px-5 py-1 rounded-full text-center text-24px text-deep-sky-blue;
    }

    /*
     * Form components
     */
    form {
        @apply bg-[#E8E8E8] p-3 md:p-10 rounded;
    }

    .form-button {
        @apply flex items-center justify-center min-w-[64%] bg-deep-sky-blue font-bold px-5 py-1 mx-auto rounded-md text-white text-24px transition-all hover:scale-105 focus:scale-105;
    }

    .form-input {
        @apply text-18px bg-white border-[#c1c1c1] border block w-full px-3 py-2 rounded;
        outline: none !important;
    }

    .form-checkbox, .form-radio {
        @apply cursor-pointer flex gap-2 items-center text-18px leading-[18px];
    }

    .form-checkbox label {
        @apply self-end;
    }

    .form-checkbox input[type="checkbox"] {
        @apply appearance-none h-[20px] w-[20px] border-2 border-[#1a1a1a] rounded-sm bg-transparent checked:bg-deep-sky-blue checked:border-deep-sky-blue focus:outline-none transition-all duration-200 bg-no-repeat bg-center bg-contain float-left cursor-pointer;
    }

    .form-checkbox input[type="checkbox"]:checked {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    }

    .form-radio input[type="radio"] {
        @apply appearance-none rounded-full h-[20px] w-[20px] border-2 border-[#1a1a1a] bg-transparent checked:bg-deep-sky-blue checked:border-deep-sky-blue focus:outline-none transition-all duration-200 bg-no-repeat bg-center bg-contain float-left cursor-pointer;
    }

    .form-radio input[type="radio"]:checked {
        background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3E%3Ccircle r=%222%22 fill=%22%23fff%22/%3E%3C/svg%3E");
    }

    .form-range {
        @apply appearance-none w-full h-[6px] rounded p-0 bg-[#a0a0a0] focus:outline-none focus:ring-0 focus:shadow-none;
    }

    .form-range::-moz-range-thumb, .form-range::-webkit-slider-thumb {
        @apply border-0 bg-deep-sky-blue rounded-full;
    }
}

@layer utilities {
    /*
     * Containers
     */
    .container-screen {
        @apply box-border mx-auto my-3 w-full md:max-w-screen p-3;
    }

    .container-regular {
        @apply mx-auto my-3 w-full md:max-w-regular p-3;
    }

    .container-medium {
        @apply mx-auto my-3 w-full md:max-w-medium p-3;
    }

    .container-small {
        @apply mx-auto my-3 w-full md:max-w-small p-3;
    }
}`;

export default configValue;
