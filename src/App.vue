<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
	<div class="bg-gray-100 dark:bg-gray-900 min-h-screen">
		<header>
			<navbar/>
		</header>
		<main class="py-24 md:py-32">
			<router-view/>
		</main>
	</div>
</template>
