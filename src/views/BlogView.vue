<script setup>
import MainSection from '@/components/sections/MainSection.vue';
import ContainerTitle from '@/components/ContainerTitle.vue';
import Container from '@/components/Container.vue';
</script>

<template>
	<main-section>
		<container>
			<template #title>
				<container-title>{{ $t('blog') }}</container-title>
			</template>
      <div class="grid justify-center mt-4">
        <div class="inline font-medium text-xl px-2 py-1.5 bg-slate-100 border-2 border-slate-200 rounded dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100">
          {{ $t('blog-under-development-message') }}
        </div>
      </div>
		</container>
	</main-section>
</template>