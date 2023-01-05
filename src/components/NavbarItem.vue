<script setup>
defineProps({
	label: String,
	href: String,
});
</script>

<template>
	<router-link :to="href"
							 class="block font-medium rounded py-2 px-4 md:py-2"
							 active-class="router-link-active bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:bg-slate-700 dark:text-slate-300"
							 exact-active-class="router-link-exact-active bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:bg-slate-700 dark:text-slate-300"
	>
		{{ label }}
	</router-link>
</template>