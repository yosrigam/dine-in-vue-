import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:id',
            name: 'home',
            component: () => import('../components/Customer/home.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/Dashboard.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')

        },
        {
            path: '/orders',
            name: 'orders',
            component: () => import('../components/Admin/Orders/index.vue')
        },
        {
            path: '/orderStatus',
            name: 'orderStatus',
            component: () => import('../components/Admin/Orders/orderStatus.vue'),
            props: true,
        },
        {
            path: '/categories/create',
            name: 'create-categories',
            component: () => import('../components/Admin/Categories/create.vue')
        },
        {
            path: '/categories/edit/:id',
            name: 'edit-categories',
            component: () => import('../components/Admin/Categories/edit.vue')
        },
        {
            path: '/categories',
            name: 'categories',
            component: () => import('../components/Admin/Categories/index.vue')
        },
        {
            path: '/dishes/edit/:id',
            name: 'edit-dishes',
            component: () => import('../components/Admin/Dishes/edit.vue')
        },
        {
            path: '/dishes/create',
            name: 'create-dishes',
            component: () => import('../components/Admin/Dishes/create.vue')
        },
        {
            path: '/dishes',
            name: 'dishes',
            component: () => import('../components/Admin/Dishes/index.vue'),
        },

        {
            path: '/clients',
            name: 'clients',
            component: () => import('../components/Admin/Clients/index.vue')
        },
        {
            path: '/payment',
            name: 'payment',
            component: () => import('../components/Customer/stripe.vue'),
            props: true,
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('../components/Customer/order.vue'),
            props: true,
        },

        {
            path: '/success',
            name: 'success',
            component: () => import('../components/Customer/success.vue'),
            props: true,
        },
        {
            path: '/failure',
            name: 'failure',
            component: () => import('../components/Customer/failure.vue'),
            props: true,
        },

    ]
})

export default router
