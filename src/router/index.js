import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Add from '../views/Add.vue';
import NotFound from '../views/NotFound.vue'




const router = createRouter ({
    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/add',
            name: 'Add',
            component: Add
        },

        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});

export default router