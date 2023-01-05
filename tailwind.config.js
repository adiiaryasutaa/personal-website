/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				capriola: ['"Capriola"', 'sans-serif'],
				quicksand: ['"Quicksand"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
