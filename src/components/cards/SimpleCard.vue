<script setup>
defineProps({ image: String, label: String });
</script>

<template>
	<div class="p-4 bg-slate-50 border border-slate-200 rounded shadow-sm shadow-slate-400/25 dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-700/25">
		<img :src="image" :alt="label" class="">
		<h4 class="text-slate-900 font-medium text-center dark:text-slate-100">{{ label }}</h4>
	</div>
</template>