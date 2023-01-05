export const themeVariants = {
	LIGHT: "light",
	DARK: "dark",
};

export function setTheme(theme) {
	document.documentElement.className = theme;
}
