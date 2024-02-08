import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue';
import Kontaktskjema from './components/Kontaktskjema.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/kontaktskjema', component: Kontaktskjema },
    ],
});

export default router;