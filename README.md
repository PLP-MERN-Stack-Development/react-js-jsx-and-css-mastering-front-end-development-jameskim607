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

# PLP Task Manager (React + Tailwind + Vite)

This repository is a small front-end demo application: a Task Manager UI built with React, Tailwind CSS and Vite.

Key features
- Client-side routing with react-router-dom
- Light / Dark theming via a React context provider
- Reusable components (Button, Card, Navbar, Footer)
- Example API explorer page (fetches sample data and displays paginated results)

Project structure
- `src/` — React source (components, pages, context, hooks)
- `src/index.css` — Tailwind entry + a small component layer for consistent buttons
- `tailwind.config.js`, `postcss.config.js` — Tailwind + PostCSS configuration
- `package.json` — scripts and dependencies

Quickstart
1. Clone the repo and enter the folder:

```powershell
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-jameskim607.git
cd react-js-jsx-and-css-mastering-front-end-development-jameskim607
```

2. Install & run the dev server:

```powershell
npm install
npm run dev
```

Open the printed local URL (e.g. http://localhost:5175/) in your browser.

Production build:

```powershell
npm run build
npm run preview
```

Notes
- If you edit Tailwind configuration, restart the dev server.
- There is a minimal `.btn` component-layer in `src/index.css` to ensure button contrast across themes.

Contributing
- Pull requests & issues are welcome. Keep components reusable and documented.

License: MIT
