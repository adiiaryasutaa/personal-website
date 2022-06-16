<template>
	<div class="container flex flex-col items-stretch space-y-8 px-4 mx-auto pb-20">
		<h2 class="text-slate-600 text-2xl font-capriola text-center dark:text-slate-300">Projects</h2>
		<div class="grid grid-cols-1 place-items-center items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<Card v-for="project in projects" :title="project.title" :description="project.description" :image="project.image">
				<template #action>
					<div class="space-y-4 mt-4">
						<div class="flex flex-wrap gap-1">
							<Badge v-for="tag in project.tags" :name="tag" />
						</div>
						<div v-if="project.githubLink || project.webLink" :class="{ 'space-x-4': project.githubLink && project.webLink }" class="flex justify-center items-center">
							<a
								v-if="project.githubLink"
								:href="project.githubLink"
								class="text-slate-400 hover:text-slate-500 active:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 dark:active:text-slate-200"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
									/>
								</svg>
							</a>
							<a
								v-if="project.webLink"
								:href="project.webLink"
								class="text-slate-400 hover:text-slate-500 active:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 dark:active:text-slate-200"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
									<path
										fill-rule="evenodd"
										d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
									/>
									<path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
								</svg>
							</a>
						</div>
					</div>
				</template>
			</Card>
		</div>
	</div>
</template>

<script>
import Card from "../../components/Card.vue";
import Badge from "@/components/Badge.vue";
import projects from "@/../data/projects.js";

export default {
	data() {
		return {
			projects,
		};
	},
	components: { Card, Badge },
};
</script>
