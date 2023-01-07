<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
	<div class="bg-gray-100 dark:bg-gray-900 min-h-screen">
		<header>
			<navbar/>
		</header>
		<router-view/>
	</div>
</template>
