## Getting Started

This is the theme for The Dynamics, built on top of [TailwindCSS](https://tailwindcss.com/). To get started, you can either clone this React app and tweak it to your needs, or you can download the following files individually from this repository:

* `fonts` folder, located in `public/fonts`
* `tailwind.config.js`, which contains our custom configuration options for TailwindCSS, including default fonts, theme colors, and so forth
* `index.css` in `src/index.css`, which contains custom styles and classes built on top of TailwindCSS through the use of `@apply` directives.

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

If you are new to TailwindCSS and need help setting it up, please take a look at their [documentation](https://tailwindcss.com/docs/installation).

## App Specific Configurations

The demo theme website at [https://theme.dynamics.tech](https://theme.thedynamics.tech) has specific styling applied to the various React components. Therefore, you may find that some of our styles don't transfer over. For example, we use React Helmet to set custom browser bar colors on mobile. In such cases, you can either choose to edit your own app so it follows our styles, or open an issue if you believe that the styling not included is an integral part of the theme.

## Contributing

There may or may not be abnormal idiosyncrasies in the styles, so we appreciate your contributions and feedback! Bug reports and pull requests are welcome on GitHub at [https://github.com/TheDynamics/theme](https://github.com/TheDynamics/theme). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Acknowledgements

Special thanks to Vercel, which helps power the theme site at [theme.thedynamics.tech](https://theme.thedynamics.tech).

<a href="https://vercel.com/?utm_source=thedyanmics&utm_campaign=oss">![powered-by-vercel](https://user-images.githubusercontent.com/90291337/155862031-c91f28cc-b098-4a03-9c59-fe9e7f4abb09.svg)
