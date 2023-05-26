<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid';

const prop = defineProps({
	label: {
		type: String,
		required: true,
	},
	to: {
		type: String,
		required: false,
	},
	external: {
		type: Boolean,
		required: false,
	}
});
</script>

<template>
	<a v-if="external" :href="to" class="flex items-center font-medium rounded py-2 px-4 md:py-2">
		<span class="mr-2">{{ prop.label }}</span>
		<arrow-top-right-on-square-icon class="w-5 h-5"/>
	</a>
	<router-link v-else
		:to="prop.to"
		class="block font-medium rounded py-2 px-4 md:py-2"
		active-class="router-link-active bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:bg-slate-700 dark:text-slate-300"
		exact-active-class="router-link-exact-active bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:bg-slate-700 dark:text-slate-300"
	>
		{{ prop.label }}
	</router-link>
</template>