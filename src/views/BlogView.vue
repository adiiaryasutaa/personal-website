<script setup>
import MainSection from '@/components/MainSection.vue';
</script>

<template>
	<main-section>
		<section class="flex justify-center container mt-12">
			<div class="text-center text-xl font-medium text-slate-600 rounded bg-slate-200 px-8 py-2 dark:text-slate-400 dark:bg-slate-800">
				{{ $t('in-development') }}
			</div>
		</section>
	</main-section>
</template>