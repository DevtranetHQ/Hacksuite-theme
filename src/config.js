const configValue = `module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "deep-sky-blue": "#03A9F4",
        "fruit-salad": "#4CAF50",
        "orange-peel": "#FF9800",
        "link": "#3B4FE4",
        "heading": "#1A1A1A",
        "body": "#6E7180",
        "dark": "#202020",
        "gray-dark": "#2D2D2D"
      }
    },
    fontFamily: {
      sans: ['"Myriad Pro"', "sans-serif"],
      body: ['"Myriad Pro"']
    },
    fontSize: {
      "198px": ["198px"],
      "156px": ["156px"],
      "120px": ["120px"],
      "96px": ["96px"],
      "90px": ["90px"],
      "84px": ["84px"],
      "78px": ["78px"],
      "72px": ["72px"],
      "66px": ["66px"],
      "60px": ["60px"],
      "54px": ["54px"],
      "48px": ["48px"],
      "42px": ["42px"],
      "36px": ["36px"],
      "30px": ["30px"],
      "24px": ["24px"],
      "22px": ["22px"],
      "20px": ["20px"],
      "18px": ["18px"],
      "16px": ["16px"],
      "15px": ["15px"],
      "12px": ["12px"],
      "10px": ["10px"],
      "8px": ["8px"]
    },
    screens: {
      "xs": "428px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    maxWidth: {
      screen: "100%",
      regular: "95%",
      medium: "75%",
      small: "50%"
    }
  },
  plugins: [require("autoprefixer")]
};

@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

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

  body,
  html {
    @apply overflow-x-hidden scroll-smooth;
  }

  p,
  ul {
    @apply text-[20px] md:text-[22px];
  }

  p.sm,
  ul.sm {
    @apply text-18px;
  }

  p.xs,
  ul.xs {
    @apply text-16px;
  }

  /*
   * Code components
   */
  code {
    @apply bg-[#ededed] dark:bg-[#1c1c1c] rounded px-1 pt-1 font-sans text-deep-sky-blue;
  }

  code a {
    @apply decoration-red-500 text-deep-sky-blue underline;
  }

  pre {
    @apply bg-[#e0e0e0] dark:bg-[#2d2d2d] rounded px-5 py-3 font-sans leading-[1.75rem] overflow-auto text-[20px] md:text-[22px] text-[#4d4d4d] dark:text-white;
  }
}

@layer components {
  /* For TailwindCSS typography plugin */
  .prose {
    max-width: none !important;
  }

  .prose a {
    @apply text-link;
  }

  .prose p {
    @apply my-0 !important;
  }

  /*
   * Typography
   */
  .heading {
    @apply font-bold text-36px md:text-42px md:leading-[100px];
  }

  .ultratitle {
    @apply font-bold text-60px sm:text-66px md:text-120px leading-[80px] md:leading-[100px];
  }

  .title {
    @apply font-bold text-60px md:text-66px leading-[80px];
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
    @apply text-18px text-body dark:text-white;
  }

  /*
   * Buttons
   */
  .button-big,
  .button-medium,
  .button-small {
    @apply leading-tight flex items-center justify-center font-bold px-5 py-2 mr-2 mb-2 rounded-md text-white transition-all;
  }

  /*
   * Set up background colors for buttons
   * button-deep-sky-blue
   * button-fruit-salad
   * button-orange-peel
   * button-link
   * button-heading
   */
  .button-big.button-deep-sky-blue,
  .button-medium.button-deep-sky-blue,
  .button-small.button-deep-sky-blue {
    @apply bg-deep-sky-blue;
  }

  .button-big.button-fruit-salad,
  .button-medium.button-fruit-salad,
  .button-small.button-fruit-salad {
    @apply bg-fruit-salad;
  }

  .button-big.button-orange-peel,
  .button-medium.button-orange-peel,
  .button-small.button-orange-peel {
    @apply bg-orange-peel;
  }

  .button-big.button-link,
  .button-medium.button-link,
  .button-small.button-link {
    @apply bg-link;
  }

  .button-big.button-heading,
  .button-medium.button-heading,
  .button-small.button-heading {
    @apply bg-heading;
  }

  .outline-button-big,
  .outline-button-medium,
  .outline-button-small {
    /* Outline buttons */
    @apply leading-tight flex items-center justify-center border-[3px] font-bold px-5 py-2 mr-2 mb-2 rounded-md transition-all;
  }

  /*
   * Colors for outline buttons, where text and outline have a color
   */
  .outline-button-big.button-deep-sky-blue,
  .outline-button-medium.button-deep-sky-blue,
  .outline-button-small.button-deep-sky-blue {
    @apply border-deep-sky-blue text-deep-sky-blue;
  }

  .outline-button-big.button-fruit-salad,
  .outline-button-medium.button-fruit-salad,
  .outline-button-small.button-fruit-salad {
    @apply border-fruit-salad text-fruit-salad;
  }

  .outline-button-big.button-orange-peel,
  .outline-button-medium.button-orange-peel,
  .outline-button-small.button-orange-peel {
    @apply border-orange-peel text-orange-peel;
  }

  .outline-button-big.button-link,
  .outline-button-medium.button-link,
  .outline-button-small.button-link {
    @apply border-link text-link;
  }

  .outline-button-big.button-heading,
  .outline-button-medium.button-heading,
  .outline-button-small.button-heading {
    @apply border-heading text-heading;
  }

  .cta-button-big,
  .cta-button-medium,
  .cta-button-small {
    /* Buttons with gradients */
    @apply leading-tight flex items-center justify-center font-bold px-3 py-2 mr-2 mb-2 rounded-md text-white transition-all;
    background: linear-gradient(98.64deg, #ffffff -26.46%, #03a9f4 56.71%);
  }

  .button-big:not(:disabled),
  .button-medium:not(:disabled),
  .button-small:not(:disabled),
  .outline-button-big:not(:disabled),
  .outline-button-medium:not(:disabled),
  .outline-button-small:not(:disabled),
  .cta-button-big:not(:disabled),
  .cta-button-medium:not(:disabled),
  .cta-button-small:not(:disabled) {
    /* Hover and zoom effect for buttons */
    @apply hover:scale-105 focus:scale-105;
  }

  /*
   * Button font sizes
   */
  .button-big,
  .outline-button-big,
  .cta-button-big {
    @apply text-30px md:text-36px h-[58px] md:h-[64px];
  }

  .button-medium,
  .outline-button-medium,
  .cta-button-medium,
  form button {
    @apply text-24px h-[44px];
  }

  .button-small,
  .outline-button-small,
  .cta-button-small {
    @apply text-18px h-[42px];
  }

  /*
   * Cards
   * primary
   * sunken
   * interactive
   * gradient text
   * gradient background
   */
  .card-primary,
  .card-sunken,
  .card-interactive,
  .card-gradient-text,
  .card-gradient {
    @apply mb-5 p-3 rounded text-center;
  }

  .card-primary,
  .card-interactive,
  .card-gradient-text {
    @apply bg-white shadow-md;
  }

  .card-primary,
  .card-interactive {
    @apply dark:bg-gray-dark dark:shadow-black dark:shadow-sm;
  }

  .card-sunken {
    @apply bg-[#a3a3a3];
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .card-interactive {
    @apply cursor-pointer transition-all hover:scale-105 focus:scale-105;
  }

  .card-gradient-text h1 {
    background: linear-gradient(94.14deg, #ffffff -48.74%, #03a9f4 57.74%);
    @apply text-transparent bg-clip-text;
  }

  .card-gradient {
    @apply text-white;
    background: linear-gradient(96.34deg, #f8fbff -27.94%, #03a9f4 59.6%);
  }

  .card-translucent,
  .card-translucent-dark {
    @apply mb-5 p-10 text-center;
  }

  .card-translucent {
    @apply bg-[#f1f1f1] dark:text-black;
  }

  .card-translucent-dark {
    @apply bg-[#5c5c5c] text-white;
  }

  /*
   * Badges
   */
  .pill-badge {
    @apply border-deep-sky-blue border-[3px] bg-deep-sky-blue inline-block mb-2 mr-2 px-10 py-3 rounded-full text-center font-bold text-[14px] md:text-18px text-white;
  }

  .outline-badge {
    @apply border-deep-sky-blue border-[3px] inline-block mb-2 mr-2 px-10 py-3 rounded-full text-center font-bold text-[14px] md:text-18px text-deep-sky-blue;
  }

  /*
   * Form components
   */
  form {
    @apply bg-[#F4F4F4] dark:bg-[#444444] p-10 rounded-xl;
  }

  .form-label {
    /* Labels */
    @apply block mb-1 text-18px font-semibold md:text-[22px];
  }

  .form-button {
    /* Buttons */
    @apply flex items-center justify-center min-w-[64%] bg-deep-sky-blue font-bold px-5 py-1 mx-auto rounded-md text-white text-24px transition-all hover:scale-105 focus:scale-105;
    background: linear-gradient(98.64deg, #ffffff -26.46%, #03a9f4 56.71%);
  }

  .form-input {
    /* General input */
    @apply dark:text-black text-18px bg-white border-[#c9c9c9] border-2 block w-full px-3 py-2 mt-1 mb-4 rounded-lg;
    outline: none !important;
  }

  .form-input.sm {
    /* Small input */
    @apply text-15px;
  }

  .form-select {
    /* Selects */
    @apply appearance-none text-18px text-body bg-white border-[#c1c1c1] border-2 block w-full px-3 py-2 rounded;
    background-image: url("data:image/svg+xml,%3Csvg width='21' height='25' viewBox='0 0 19 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 16L0.406734 0.25L18.5933 0.25L9.5 16Z' fill='%238A8A8A'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 2.5% center;
    background-size: 14px;
    outline: none !important;
  }

  .form-checkbox,
  .form-radio {
    /* Checkboxes and radio buttons */
    @apply cursor-pointer flex gap-1 md:gap-2 items-center text-18px leading-[18px];
  }

  /*
   * Checkboxes
   */
  .form-checkbox label {
    @apply cursor-pointer self-end;
  }

  .form-checkbox input[type="checkbox"] {
    @apply dark:bg-white appearance-none h-[20px] w-[20px] border-2 border-[#1a1a1a] rounded-sm bg-transparent checked:bg-deep-sky-blue checked:dark:bg-deep-sky-blue checked:border-deep-sky-blue focus:outline-none bg-no-repeat bg-center bg-contain float-left cursor-pointer;
  }

  .form-checkbox input[type="checkbox"]:checked {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    background-size: 18px 18px;
  }

  /*
   * Radio buttons
   */
  .form-radio input[type="radio"] {
    @apply dark:bg-white appearance-none rounded-full h-[20px] w-[20px] border-2 border-[#1a1a1a] bg-transparent checked:bg-deep-sky-blue checked:dark:bg-deep-sky-blue checked:border-deep-sky-blue focus:outline-none bg-no-repeat bg-center bg-contain float-left cursor-pointer;
  }

  .form-radio input[type="radio"]:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-4 -4 8 8%22%3E%3Ccircle r=%222%22 fill=%22%23fff%22/%3E%3C/svg%3E");
    background-size: 18px 18px;
  }

  /*
   * Sliders
   */
  .form-range {
    @apply appearance-none w-full h-[6px] rounded p-0 bg-[#a0a0a0] focus:outline-none focus:ring-0 focus:shadow-none;
  }

  .form-range::-webkit-slider-thumb {
    @apply appearance-none w-[18px] h-[18px] border-0 bg-deep-sky-blue rounded-full;
  }

  .form-range::-moz-range-thumb {
    @apply appearance-none w-[18px] h-[18px] border-0 bg-deep-sky-blue rounded-full;
  }
}

@layer utilities {
  /*
     * Containers
     */
  .container-screen {
    @apply box-border mx-auto my-3 w-full md:max-w-screen p-5 md:p-3 dark:bg-dark dark:text-white;
  }

  .container-regular {
    @apply mx-auto my-3 w-full md:max-w-regular p-5 md:p-3 dark:bg-dark dark:text-white;
  }

  .container-medium {
    @apply mx-auto my-3 w-full md:max-w-medium p-5 md:p-3 dark:bg-dark dark:text-white;
  }

  .container-small {
    @apply mx-auto my-3 w-full md:max-w-small p-5 md:p-3 dark:bg-dark dark:text-white;
  }

  .container-gray-dark {
    @apply dark:bg-gray-dark;
  }
}
`;

export default configValue;
