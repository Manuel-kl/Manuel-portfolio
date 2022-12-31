import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/AboutView.vue')
    }, {
        path: '/blog',
        name: 'blog',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/BlogView.vue')
    }, {
        path: '/contact',
        name: 'contact',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/ContactView.vue')
    }, {
        path: '/projects',
        name: 'projects',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/ProjectsView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router