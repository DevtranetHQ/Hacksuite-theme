## Getting Started

This is the theme for Hacksuite, built on top of [TailwindCSS](https://tailwindcss.com/). To get started, you can either clone this React app and tweak it to your needs, or you can download the following files individually from this repository:

- `fonts` folder, located in `public/fonts`
- `tailwind.config.js`, which contains our custom configuration options for TailwindCSS, including default fonts, theme colors, and so forth
- `index.css` in `src/index.css`, which contains custom styles and classes built on top of TailwindCSS through the use of `@apply` directives.

## Using The Theme

To use the theme in your own app, integrate TailwindCSS into your app and then download the above files and merge them into your own app as necessary. For example, this React app uses the following file structure so styles and fonts are applied globally:

```
theme
├── tailwind.config.js
├── public/
│   ├── fonts/
│   └── ...
├── src/
│   ├── index.css
│   └── ...
└── ...
```

If you are new to TailwindCSS and need help setting it up, please take a look at their [documentation](https://tailwindcss.com/docs/installation). You may need to edit this line in `tailwind.config.js` so TailwindCSS is applied to your app:

```javascript
...
    // Replace with paths to your template files
    content: ["./pages/**/*.{js,jsx,ts,tsx},./components/**/*.{js,jsx,ts,tsx}"],
...
```
