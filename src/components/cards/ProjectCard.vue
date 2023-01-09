<script setup>
import Project from '@/dto/Project';
import { GlobeAltIcon } from '@heroicons/vue/24/outline';
import GithubIcon from '@/components/icons/GithubIcon.vue';

defineProps({ project: Project });
</script>

<template>
	<div
		class="bg-slate-50 border border-slate-200 rounded p-4 drop-shadow-xl shadow-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-700">
		<img :src="project.image ?? 'src/assets/imgs/projects/no-image.png'" :alt="project.title" class="rounded border border-slate-200 dark:border-slate-700">
		<div class="flex flex-col items-center mt-4">
			<h1 class="font-semibold text-slate-900 text-xl dark:text-slate-100">{{ project.title }}</h1>
			<p class="text-center text-slate-500 mt-1 leading-relaxed dark:text-slate-400">{{ project.description }}</p>
		</div>
		<div class="flex flex-wrap justify-center gap-2 mt-4">
			<span v-for="tag in project.tags"
						class="text-sm font-medium px-2 py-1.5 bg-slate-100 border-2 border-slate-200 rounded dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100">
				{{ tag }}
			</span>
		</div>
		<div class="flex justify-center items-center space-x-2 mt-4">
			<a :href="project.externalLink" target="_blank"
				 class="p-2 text-slate-700 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-200">
				<globe-alt-icon class="w-6 h-6"/>
			</a>
			<a :href="project.repository" target="_blank"
				 class="p-2 text-slate-700 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-200">
				<github-icon class="w-5 h-5 stroke-2"/>
			</a>
		</div>
	</div>
</template>