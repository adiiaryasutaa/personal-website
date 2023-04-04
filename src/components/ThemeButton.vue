<script setup>
import Cookies from "js-cookie";
import { MoonIcon, SunIcon } from '@heroicons/vue/20/solid';
import { ref, watch } from 'vue';

const inDarkMode = ref(false);

watch(inDarkMode, () => {
	if (inDarkMode.value) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}

	Cookies.set(
		'dark',
		inDarkMode.value ? '1' : '',
		{
			secure: true,
			expires: 365
		},
	);
});

inDarkMode.value = Boolean(Cookies.get('dark'));

const switchTheme = () => inDarkMode.value = !inDarkMode.value;
</script>

<template>
	<button @click="switchTheme"
					class="p-2 rounded text-slate-500 hover:text-slate-600 hover:bg-slate-50 active:bg-slate-100 focus:text-slate-600 focus:ring focus:ring-slate-200 dark:hover:text-slate-500 dark:hover:bg-slate-800 dark:focus:ring-slate-700">
		<sun-icon v-if="inDarkMode" class="w-5 h-5"/>
		<moon-icon v-else class="w-5 h-5"/>
	</button>
</template>