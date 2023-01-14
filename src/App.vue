<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
	<div class="bg-gray-100 bg-image-light min-h-screen dark:bg-gray-900 dark:bg-image-dark">
		<header>
			<navbar/>
		</header>
		<router-view/>
	</div>
</template>

<style scoped>

</style>