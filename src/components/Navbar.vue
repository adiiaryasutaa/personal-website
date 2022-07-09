<template>
	<nav class="bg-transparent p-4">
		<div class="container flex flex-wrap justify-between items-center mx-auto">
			<router-link :to="{ name: 'home' }" class="self-center text-xl text-slate-900 font-capriola uppercase font-league-spartan whitespace-nowrap dark:text-slate-50">
				{{ brand }}
			</router-link>

			<div class="flex items-center md:order-3">
				<button @click="toggleTheme" class="text-slate-600 p-4 hover:text-slate-800 dark:hover:text-slate-400">
					<span v-show="currentTheme === theme.DARK">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path
								fill-rule="evenodd"
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
					<span v-show="currentTheme === theme.LIGHT">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					</span>
				</button>
				<button
					@click="toggleCollapseNavbarNavs"
					ref="navbarNavsToggler"
					type="button"
					class="inline-flex items-center p-2 ml-3 text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
				>
					<svg v-if="navbarNavsCollapsed" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
					<svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
			<div @click="toggleCollapseNavbarNavs" :class="{ hidden: navbarNavsCollapsed }" class="w-full md:block md:w-auto">
				<ul class="flex flex-col font-medium mt-2 md:flex-row md:space-x-4 md:mt-0 md:text-sm">
					<li v-for="nav in navs">
						<router-link
							:to="{ name: nav.routeName }"
							active-class="router-link-active cursor-default text-slate-800 bg-slate-300 dark:text-slate-200 dark:bg-slate-600"
							exact-active-class="router-link-exact-active cursor-default text-slate-800 bg-slate-300 dark:text-slate-200 dark:bg-slate-600"
							class="block font-quicksand font-bold rounded py-2 px-4"
						>
							{{ nav.name }}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import { themeVariants } from "@/theme.js";
import { ref } from "vue";

export default {
	name: "Navbar",
	props: {
		"current-theme": String,
		"toggle-theme": Function,
	},
	setup() {
		const brand = ref("Adi Aryasuta");
		const navs = ref([
			{ name: "Home", routeName: "home" },
			{ name: "About", routeName: "about" },
			{ name: "Projects", routeName: "project" },
			{ name: "Blogs", routeName: "blog" },
		]);
		const theme = ref(themeVariants);
		const navbarNavsCollapsed = ref(true);

		const toggleCollapseNavbarNavs = () => {
			navbarNavsCollapsed.value = !navbarNavsCollapsed.value;
		};

		return { brand, navs, theme, toggleCollapseNavbarNavs, navbarNavsCollapsed };
	},
};
</script>
