<template>
	<main class="bg-slate-50 space-y-2 scrollbar-hide min-h-screen dark:bg-slate-800">
		<Navbar />
		<section class="w-full pt-16">
			<router-view />
		</section>
		<Footer />
	</main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "Adi Aryasuta",
	components: { Navbar, Footer },
};
</script>
