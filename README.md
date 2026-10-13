# Portfolio

My personal portfolio website, built with React, Vite and Tailwind CSS, and hosted on GitHub Pages.

**Live site:** https://aman2024nn-code.github.io/portfolio/

## About

A single-page portfolio that showcases who I am, the projects I have built, and how to get in touch.


## Tech stack

- [React](https://react.dev/) for the UI
- [Vite](https://vite.dev/) for development and builds
- [Tailwind CSS](https://tailwindcss.com/) and custom CSS for styling
- [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment to GitHub Pages

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Run locally

```bash
git clone https://github.com/aman2024nn-code/portfolio.git
cd portfolio
npm install
npm run dev
```

Vite prints a local address in the terminal (usually `http://localhost:5173/portfolio/`). Open it in your browser.

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the site into the `dist` folder |
| `npm run preview` | Previews the production build locally |
| `npm run deploy` | Builds the site and publishes `dist` to the `gh-pages` branch |

## Deployment

The site is deployed with the `gh-pages` package:

1. `vite.config.js` sets `base: '/portfolio/'` so assets load correctly under the repo path.
2. `npm run deploy` builds the project and pushes the `dist` folder to the `gh-pages` branch.
3. In the repo, **Settings → Pages** is set to **Deploy from a branch**, using `gh-pages` and `/ (root)`.

After each deploy, GitHub Pages takes a minute or two to update.

## Project structure

```
portfolio/
├── public/            # Static files served as-is
├── src/               # React components, styles and assets
├── index.html         # HTML entry point
├── vite.config.js     # Vite configuration (base path, plugins)
└── package.json       # Dependencies and scripts
```

## Contact

- GitHub: [aman2024nn-code](https://github.com/aman2024nn-code)
- Email: _add your email here_
- LinkedIn: _add your link here_

## License

This project is open source. Add a license (for example MIT) if you want others to reuse it.
