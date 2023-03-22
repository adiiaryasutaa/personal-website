<script setup>
import SimpleCard from '@/components/cards/SimpleCard.vue';
import Container from '@/components/Container.vue';
import ContainerTitle from '@/components/ContainerTitle.vue';
import { tools } from '@/data';
</script>

<template>
	<section>
		<container>
			<template #title>
				<container-title>{{ $t('tools') }}</container-title>
			</template>
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 mt-4 md:grid-cols-4 md:mt-6 lg:grid-cols-5 lg:mt-8 xl:grid-cols-6 xl:mt-10">
				<simple-card v-for="tool in tools" :data="tool"/>
			</div>
		</container>
	</section>
</template>