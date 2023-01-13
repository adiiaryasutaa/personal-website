<script setup>
import BlogDTO from '@/dto/BlogDTO';
import { ClockIcon } from '@heroicons/vue/24/outline';

defineProps({ blog: BlogDTO });
</script>

<template>
	<div class="flex flex-col bg-slate-50 border border-slate-200 rounded drop-shadow-xl shadow-slate-200/25 dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-700/25">
		<img :src="blog.image" :alt="blog.title" class="rounded-t">
		<div class="space-y-4 p-4">
			<div class="flex">
				<span
					class="text-sm capitalize font-medium px-2 py-1.5 bg-slate-100 border-2 border-slate-200 rounded dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100">
						{{ blog.category }}
					</span>
			</div>

			<div class="flex flex-col space-y-2">
				<h4 class="font-semibold text-slate-900 capitalize dark:text-slate-100">{{ blog.title }}</h4>
				<p class="text-slate-500 text-sm leading-relaxed dark:text-slate-400">{{ blog.excerpt }}</p>
			</div>

			<div class="text-slate-500 dark:text-slate-400">
				<div class="inline-flex items-center">
					<clock-icon class="w-5 h-5"/>
					<span class="ml-1">{{ blog.date }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
