<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
	<div class="bg-gray-100 bg-image-light min-h-screen dark:bg-gray-900 dark:bg-image-dark">
		<header>
			<navbar/>
		</header>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="in-out">
				<component :is="Component"/>
			</transition>
		</router-view>
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