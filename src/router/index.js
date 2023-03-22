import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ProjectView from '@/views/ProjectView.vue';
import BlogView from '@/views/BlogView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
		{
			path: '/project',
			name: 'project',
			component: ProjectView,
		},
		{
			path: '/blog',
			name: 'blog',
			component: BlogView,
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			redirect: { name: 'home' }
		}
	],
	scrollBehavior(to, from, savedPosition) {
		document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
	},
});

export default router;
