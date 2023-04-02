<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from "@/components/Footer.vue";
</script>

<template>
	<div class="bg-gray-100 bg-image-light min-h-screen selection:bg-slate-300 dark:bg-gray-900 dark:bg-image-dark dark:selection:bg-slate-700">
  	<navbar/>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="in-out">
				<component :is="Component"/>
			</transition>
		</router-view>
		<Footer />
	</div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.25s ease;
}

.fade-enter-from, .fade-leave-to {
	opacity: 0;
}
</style>