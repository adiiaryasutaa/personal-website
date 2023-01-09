<script setup>
import SimpleCardDTO from '@/dto/SimpleCardDTO';

defineProps({ dto: SimpleCardDTO });
</script>

<template>
	<div class="p-4 bg-slate-50 border border-slate-200 rounded shadow-sm shadow-slate-400/25 dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-700/25">
		<img :src="dto.image" :alt="dto.name" class="rounded">
		<h4 class="text-slate-900 font-medium text-center capitalize mt-2 dark:text-slate-100">{{ dto.name }}</h4>
	</div>
</template>