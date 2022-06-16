<template>
	<div class="container mx-auto px-4">
		<div class="flex flex-col space-y-8 pb-20 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8 xl:space-x-12">
			<img class="rounded block mx-auto w-52 h-52 md:mx-0 xl:w-72 xl:h-72" :src="photo" alt="" />
			<div class="flex flex-col space-y-2">
				<div class="text-center space-y-2 md:text-left">
					<h1 class="text-2xl text-slate-500 font-quicksand font-semibold dark:text-gray-400">
						I Gusti Ngurah Agung
						<span class="text-slate-800 font-capriola font-semibold uppercase dark:text-gray-50">Adi Aryasuta</span>
					</h1>
					<p class="text text-slate-500 font-quicksand dark:text-gray-400">Here is description about me</p>
				</div>
				<div class="flex flex-col space-y-4 text-slate-600 text-justify font-quicksand font-bold w-full dark:text-slate-300">
					<p v-for="about in abouts">{{ about }}</p>
				</div>
			</div>
		</div>
		<div class="py-20">
			<h2 class="text-slate-600 text-2xl font-capriola text-center mb-8 dark:text-slate-300">Skills</h2>
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
				<Card v-for="skill in skills" :image="skill.image" :title="skill.name" />
			</div>
		</div>
		<div class="py-20">
			<h2 class="text-slate-600 text-2xl font-capriola text-center mb-8 dark:text-slate-300">Tools</h2>
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
				<Card v-for="tool in tools" :image="tool.image" :title="tool.name" />
			</div>
		</div>
	</div>
</template>

<script>
import Card from "@/components/Card.vue";
import skills from "@/../data/skills.js";
import tools from "@/../data/tools.js";

export default {
	data() {
		return {
			photo: require("@/assets/img/adi-aryasuta.jpg"),
			abouts: [
				`Hello everyone, my full name is I Gusti Ngurah Agung Adi Aryasuta, my friends call me Adi or Gung Adi. I was born in Denpasar, Bali on November 21, 2004. I currently live in Denpasar and study at Vocational High School 1 Denpasar majoring in Software Engineering. I am currently focusing on developing website and desktop applications and want to work as a freelancer.`,
				`I know programming since grade 9, at that time I learned the C++ programming language and at the same time it was the first programming language I learned. Then while studying C++ I also learned Java, when I was in grade 10 I started learning Web Programming until now. I started from learning HTML, CSS and Bootstrap then I continued with Javascript, PHP, Laravel and MySQL. Later when I graduate, I want to major in Information Engineering. I also want to get into mobile app development and make a game.`,
			],
			skills,
			tools,
		};
	},
	components: { Card },
};
</script>
