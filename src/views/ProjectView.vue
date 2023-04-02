<script setup>
import ProjectCard from '@/components/cards/ProjectCard.vue';
import MainSection from '@/components/MainSection.vue';
import { projects } from '@/data';
import Container from '@/components/Container.vue';
import ContainerTitle from '@/components/ContainerTitle.vue';
</script>

<template>
	<main-section>
		<container>
			<template #title>
				<container-title>{{ $t('project.section-title') }}</container-title>
			</template>
			<div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:mt-6 lg:mt-8 xl:grid-cols-3 xl:gap-8 xl:mt-10">
				<project-card v-for="project in projects" :project="project"/>
			</div>
		</container>
	</main-section>
</template>