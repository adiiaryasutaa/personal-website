<script setup>
import MainSection from '@/components/MainSection.vue';
</script>

<template>
	<main-section class="h-screen">
		<section class="container pt-16">
			<div class="flex flex-col items-center">
				<div class="">
					<img src="@/assets/adiaryasuta.jpg" alt="dd"
							 class="rounded-full w-40 ring-8 ring-slate-200 dark:ring-slate-700">
				</div>
				<div class="flex flex-col items-center mt-8">
					<h1 class="text-3xl text-slate-800 dark:text-slate-200">{{ $t('name') }}</h1>
					<p class="font-medium text-sm text-slate-500 text-center leading-relaxed mt-4 md:text-base dark:text-slate-400">
						{{ $t('description') }}
					</p>
					<router-link to="/about"
											 class="px-4 py-2 text-sm font-medium border border-slate-300 rounded mt-8 hover:bg-slate-100 active:bg-slate-200 focus:ring-2 focus:ring-slate-200 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-800 dark:active:bg-slate-700 dark:focus:ring-slate-700">
						{{ $t('see-more') }}
					</router-link>
				</div>
			</div>
		</section>
	</main-section>
</template>