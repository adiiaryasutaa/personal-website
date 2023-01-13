<script setup>
import MainSection from '@/components/sections/MainSection.vue';
import ContainerTitle from '@/components/ContainerTitle.vue';
import Container from '@/components/Container.vue';
import blogDTO from '@/dto/BlogDTO';
import BlogCard from '@/components/cards/BlogCard.vue';

const blog = new blogDTO('an example blog', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa urna, feugiat non nisi vitae, tincidunt lobortis ipsum. Etiam varius metus eu nunc molestie maximus. Morbi vel dictum arcu. Curabitur tristique magna ut arcu...', 'technology', 'https://source.unsplash.com/user/c_v_r/1900x800', '2 days ago');
</script>

<template>
	<main-section>
		<container>
			<template #title>
				<container-title>{{ $t('blog') }}</container-title>
			</template>
			<div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:mt-6 lg:mt-8 xl:grid-cols-3 xl:gap-8 xl:mt-10">
				<blog-card :blog="blog"/>
				<blog-card :blog="blog"/>
				<blog-card :blog="blog"/>
				<blog-card :blog="blog"/>
				<blog-card :blog="blog"/>
				<blog-card :blog="blog"/>
			</div>
		</container>
	</main-section>
</template>