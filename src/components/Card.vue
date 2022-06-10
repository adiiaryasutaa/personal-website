<template>
	<div class="flex flex-col bg-slate-100 rounded border border-slate-200 p-4 dark:bg-slate-700 dark:border-transparent">
		<slot name="image">
			<img v-if="image" class="rounded" :src="image" :alt="title" />
		</slot>

		<div :class="{ 'flex flex-col justify-between': description }" class="grow mt-4">
			<div class="flex flex-col">
				<slot name="title">
					<h5 :class="{ 'text-center': !description }" class="text-lg text-slate-900 font-capriola mb-2 dark:text-slate-50">
						{{ title }}
					</h5>
				</slot>

				<slot name="description">
					<p v-if="description" class="text-sm text-slate-600 font-quicksand font-bold dark:text-slate-300">
						{{ description }}
					</p>
				</slot>
			</div>
			<slot name="action"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: ["image", "title", "description", "isLink"],
};
</script>
