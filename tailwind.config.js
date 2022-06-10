module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				'capriola': ['"Capriola"', 'sans-serif'],
				'quicksand': ['"Quicksand"', 'sans-serif'],
			},
		},
	},
	plugins: [
		require("flowbite/plugin"),
		require("tailwind-scrollbar"),
		require('tailwind-scrollbar-hide')
	],
};
