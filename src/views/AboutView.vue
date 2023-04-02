<script setup>
import AboutSection from '@/components/sections/AboutSection.vue';
import MainSection from '@/components/MainSection.vue';
import SkillSection from '@/components/sections/SkillSection.vue';
import ToolSection from '@/components/sections/ToolSection.vue';
</script>

<template>
	<main-section>
		<about-section class="pb-10" />
		<skill-section class="py-10"/>
		<tool-section class="py-10"/>
	</main-section>
</template>