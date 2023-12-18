import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Login from  '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Forgot from '@/components/Forgot.vue'
import Reset from '@/components/Reset.vue'

// eslint-disable-next-line
/* eslint-disable */ 

const routes = [
    { path: '/', component: Home },
    { path: '/Login', component: Login },
    { path: '/Register', component: Register },
    { path: '/Forgot', component: Forgot},
    { path: '/Reset/:token', component: Reset}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;