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
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () =>
            import ( /* webpackChunkName: "not-found" */ '../views/NotFoundView.vue')

    }
]

const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes,
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return { top: 0 }
            }
        },
    })
    // ...

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    // Track a pageview in Matomo
    window._paq.push(['setCustomUrl', to.fullPath]);
    window._paq.push(['trackPageView']);
    next()
})

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})


export default router