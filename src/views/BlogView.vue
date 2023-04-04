<script setup>
import MainSection from '@/components/MainSection.vue';
import ContainerTitle from '@/components/ContainerTitle.vue';
import Container from '@/components/Container.vue';
</script>

<template>
	<main-section class="h-screen">
		<container>
			<template #title>
				<container-title>{{ $t('blog.section-title') }}</container-title>
			</template>
      <div class="grid justify-center mt-4">
        <div class="inline font-medium text-sm px-2 py-1.5 bg-slate-100 border-2 border-slate-200 rounded text-center dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100">
          {{ $t('blog.message') }}
        </div>
      </div>
		</container>
	</main-section>
</template>