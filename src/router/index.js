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
			meta: {
				title: 'Adi Aryasuta',
			},
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
			meta: {
				title: 'Adi Aryasuta | About',
			},
		},
		{
			path: '/project',
			name: 'project',
			component: ProjectView,
			meta: {
				title: 'Adi Aryasuta | Project',
			},
		},
		{
			path: '/blog',
			name: 'blog',
			component: BlogView,
			meta: {
				title: 'Adi Aryasuta | Blog',
			},
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

router.afterEach((to, from) => {
	document.title = to.meta.title
})

export default router;
