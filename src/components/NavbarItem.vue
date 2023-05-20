<script setup>
const prop = defineProps({
	label: {
		type: String,
		required: true,
	},
	to: {
		type: String,
		required: false,
	},
	soon: {
		type: Boolean,
		required: false,
	}
});
</script>

<template>
	<div v-if="soon" class="flex items-center font-medium text-slate-600 py-2 px-4 md:py-2 dark:text-slate-400">
		<div>{{ prop.label }}</div>
		<div class="text-sm font-medium px-2 py-1.5 bg-slate-100 border-2 border-slate-200 rounded ml-2 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-100">
			{{ $t('soon') }}
		</div>
	</div>
	
	<router-link v-else 
		:to="prop.to"
		class="block font-medium rounded py-2 px-4 md:py-2"
		active-class="router-link-active bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:bg-slate-700 dark:text-slate-300"
		exact-active-class="router-link-exact-active bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:bg-slate-700 dark:text-slate-300"
	>
		{{ prop.label }}
	</router-link>
</template>