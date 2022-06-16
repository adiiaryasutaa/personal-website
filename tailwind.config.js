/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ["./index.html", "./src/**/*.{vue,js}"],
	theme: {
		extend: {
			fontFamily: {
				capriola: ['"Capriola"', "sans-serif"],
				quicksand: ['"Quicksand"', "sans-serif"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};

