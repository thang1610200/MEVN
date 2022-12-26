import * as VueRouter from 'vue-router';

import Login from '@pages/Login.vue'

import Register from '@pages/Register.vue'

import Home from '@pages/Home.vue'


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [{
        path: '/auth/login',
        component: Login
    },{
    path: '/auth/register',
    component: Register
    },{
        path: '/',
        component: Home
    }]
 });

export default router;