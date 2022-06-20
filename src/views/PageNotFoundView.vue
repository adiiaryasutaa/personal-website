<template>
	<div class="container mx-auto p-4">
		<img class="block mx-auto w-60 mb-4 rounded" :src="image404" alt="404 Image" />
		<h1 class="text-slate-800 text-2xl text-center font-semibold font-capriola dark:text-gray-50">404 | Page Not Found</h1>
	</div>
</template>

<script>
import { image404 } from "@/../data";

export default {
	data() {
		return {
			image404,
		};
	},
};
</script>
