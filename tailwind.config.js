/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  safelist: [
    'bg-red-500', 'bg-green-500', 'bg-sky-600', 'bg-sky-500', 'text-white', 'text-gray-900', 'dark:text-gray-100',
    { pattern: /bg-(red|green|blue|sky|gray|yellow|purple|pink)-(100|200|300|400|500|600|700|800|900)/ },
    { pattern: /text-(red|green|blue|sky|gray|yellow|purple|pink)-(100|200|300|400|500|600|700|800|900)/ },
    { pattern: /hover:bg-(red|green|blue|sky|gray|yellow|purple|pink)-(100|200|300|400|500|600|700|800|900)/ }
  ],
  plugins: [],
}