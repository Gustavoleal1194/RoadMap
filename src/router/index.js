import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import contadorSimples from '../views/contadorSimples.vue'; // Importe o componente
import ContadorTeste from '@/views/contadorTeste.vue';
import ToDoList from '@/views/toDoList.vue';

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
    },
    {
      path: '/contador-teste', // Defina o caminho para o novo componente
      name: 'contador-teste',
      component: ContadorTeste // Defina o componente para esta rota
    },{
      path: '/toDoList', // Defina o caminho para o novo componente
      name: 'toDoList',
      component: ToDoList// Defina o componente para esta rota
    }
    
  ]
});

router.beforeEach((_, __, next) => {
  next();
});

export default router;
