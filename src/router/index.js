import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import contadorSimples from '../views/contadorSimples.vue'; // Importe o componente

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contador-simples', // Defina o caminho para o novo componente
      name: 'contador-simples',
      component: contadorSimples // Defina o componente para esta rota
    }
  ]
});

router.beforeEach((_, __, next) => {
  next();
});

export default router;
