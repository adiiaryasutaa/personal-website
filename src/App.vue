<template>
	<main class="bg-slate-50 space-y-2 scrollbar-hide min-h-screen dark:bg-slate-800">
		<Navbar :current-theme="currentTheme" :toggle-theme="toggleTheme" />
		<section class="w-full pt-16">
			<router-view />
		</section>
		<Footer />
	</main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
import { themeVariants, setTheme } from "@/theme.js";

export default {
	name: "App",
	setup() {
		const currentTheme = ref(themeVariants.DARK);

		const toggleTheme = () => {
			currentTheme.value = currentTheme.value === themeVariants.LIGHT ? themeVariants.DARK : themeVariants.LIGHT;
			setTheme(currentTheme.value);
		};

		setTheme(currentTheme.value);

		return { currentTheme, toggleTheme };
	},
	components: { Navbar, Footer },
};
</script>
