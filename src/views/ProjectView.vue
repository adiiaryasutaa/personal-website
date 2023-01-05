<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import Project from '@/dtos/Project';

const project = new Project(
	'https://adiaryasuta.vercel.app/img/reaction-timer.071de2e2.png',
	'Reaction Timer',
	'Reaction Timer powered by Vue 3 and TailwindCSS',
	['HTML', 'CSS', 'Javascript', 'Bootstrap'],
	'https://github.com/adiiaryasutaa',
	'https://adiaryasuta.vercel.app',
);
</script>

<template>
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
</template>