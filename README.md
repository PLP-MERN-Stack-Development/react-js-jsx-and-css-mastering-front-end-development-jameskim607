# PLP Task Manager — React + Tailwind + Vite

This repository is a front-end demonstration project that teaches React fundamentals (components, hooks, routing) and Tailwind CSS styling using Vite as the build tool.

Primary purpose
- A small task manager UI that demonstrates:
	- Client-side routing with react-router
	- Theming (light/dark) via a context provider
	- Reusable, accessible components (Button, Card, Navbar, Footer)
	- Fetching and displaying API data (example page: API Data Explorer)

What the code contains
- `src/` — React source code, components, pages, and context.
- `src/index.css` — Tailwind entry (with a small component layer to ensure readable buttons across themes).
- `tailwind.config.js` & `postcss.config.js` — Tailwind + PostCSS setup.
- `package.json` — Scripts:
	- `npm run dev` — start Vite dev server with HMR
	- `npm run build` — build a production bundle into `dist/`
	- `npm run preview` — locally preview a production build

How to run locally
1. Clone the repository and change into the folder:

```powershell
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-jameskim607.git
cd react-js-jsx-and-css-mastering-front-end-development-jameskim607
```

2. Install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

3. Open the app in your browser at the printed local URL (e.g. http://localhost:5175/).

Production build

```powershell
npm run build
npm run preview
```

Notes and development tips
- The project uses Tailwind CSS and the PostCSS bridge; if you change Tailwind configuration, re-run the build/dev server to pick up changes.
- There is a small `Button` component and a `.btn` component-layer in `src/index.css` to support consistent contrast behavior across light/dark mode.

Contributing
- Feel free to open issues or PRs. If you plan to add features, keep UI components reusable and add documentation comments to new components.

License: MIT (same as starter templates)


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
