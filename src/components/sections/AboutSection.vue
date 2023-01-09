<script setup>

</script>

<template>
	<section class="container">
		<div class="flex flex-col items-center md:flex-row md:items-start">
			<div class="flex flex-col items-center md:shrink-0">
				<img src="@/assets/imgs/adiaryasuta2.jpg"
						 class="rounded w-60 border-8 border-slate-200 xl:w-72 dark:border-slate-800">
				<div class="text-xs mt-2 text-slate-400 dark:text-slate-600">
					{{ $t('Adi Aryasuta at SMK Negeri 1 Denpasar') }}
				</div>
			</div>
			<div class="mt-10 text-justify leading-relaxed text-slate-700 space-y-4 dark:text-slate-400 md:mt-0 md:ml-10 xl:text-lg">
				<p>{{ $t('about') }}</p>
				<p>{{ $t('about') }}</p>
			</div>
		</div>
	</section>
</template>