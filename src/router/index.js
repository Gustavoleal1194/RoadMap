import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
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
      path: '/contador-teste', 
      name: 'contador-teste',
      component: ContadorTeste 
    },{
      path: '/toDoList', 
      name: 'toDoList',
      component: ToDoList
    }
    
  ]
});

router.beforeEach((_, __, next) => {
  next();
});

export default router;
