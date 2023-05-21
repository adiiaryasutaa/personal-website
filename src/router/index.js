import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomeView.vue'),
			meta: {
				title: 'Adi Aryasuta',
			},
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('@/views/AboutView.vue'),
			meta: {
				title: 'Adi Aryasuta | About',
			},
		},
		{
			path: '/project',
			name: 'project',
			component: () => import('@/views/ProjectView.vue'),
			meta: {
				title: 'Adi Aryasuta | Project',
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
