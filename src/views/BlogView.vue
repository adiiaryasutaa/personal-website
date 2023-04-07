<script setup>
import MainSection from '@/components/MainSection.vue';
import ContainerTitle from '@/components/ContainerTitle.vue';
import Container from '@/components/Container.vue';
</script>

<template>
	<main-section>
		<container>
			<template #title>
				<container-title>{{ $t('blog.section-title') }}</container-title>
			</template>
      <div class="grid justify-center mt-4 md:mt-6 lg:mt-8 xl:mt-10">
        <div class="font-medium text-sm text-center text-slate-600 dark:text-slate-400">
          {{ $t('blog.message') }}
        </div>
      </div>
		</container>
	</main-section>
</template>