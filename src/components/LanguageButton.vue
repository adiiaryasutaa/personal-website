<script setup>
import Cookies from "js-cookie";
import { LanguageIcon } from '@heroicons/vue/20/solid';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });
const inBahasa = ref(false);

watch(inBahasa, () => {
	locale.value = inBahasa.value ? 'id' : 'en';

	Cookies.set(
		'bahasa',
		inBahasa.value ? '1' : '',
		{
			secure: true,
			expires: 365,
		},
	);
});

inBahasa.value = Boolean(Cookies.get('bahasa'));

const switchLanguage = () => inBahasa.value = !inBahasa.value;
</script>

<template>
	<button @click="switchLanguage"
					class="p-2 rounded text-slate-500 w-[4.1rem] hover:text-slate-600 hover:bg-slate-50 active:bg-slate-100 focus:text-slate-600 focus:ring focus:ring-slate-200 md:text-lg dark:hover:text-slate-500 dark:hover:bg-slate-800 dark:focus:ring-slate-700">
		<div class="flex justify-start items-center">
			<language-icon class="w-5 h-5"/>
			<span class="grow text-xs px-1 py-0.5 bg-slate-100 border border-slate-300 rounded ml-1 dark:bg-slate-800 dark:border-slate-600">{{ inBahasa ? 'id' : 'en' }}</span>
		</div>
	</button>
</template>