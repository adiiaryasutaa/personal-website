<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import Project from '@/dtos/Project';
import MainSection from '@/components/MainSection.vue';

const project = new Project(
	'https://adiaryasuta.vercel.app/assets/no-image.788692b8.png',
	'Reaction Timer',
	'Reaction Timer powered by Vue 3 and TailwindCSS',
	['HTML', 'CSS', 'Javascript', 'Bootstrap'],
	'https://github.com/adiiaryasutaa',
	'https://adiaryasuta.vercel.app',
);
</script>

<template>
	<main-section>
		<section class="container">
			<h1 class="uppercase text-xl text-center font-medium text-slate-800">
				{{ $t('project') }}
			</h1>

			<div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
				<project-card :project="project"/>
				<project-card :project="project"/>
				<project-card :project="project"/>
				<project-card :project="project"/>
				<project-card :project="project"/>
			</div>
		</section>
	</main-section>
</template>