import { createRouter, createWebHistory } from 'vue-router';
import ContadorTeste from '@/views/contadorTeste.vue';
import HomeView from '../views/HomeView.vue';
import ToDoList from '@/views/toDoList.vue';
import BlogRoutes from '@/views/blogRoutes.vue';
import BlogPage1 from '@/views/blogPage1.vue';
import BlogPage2 from '@/views/blogPage2.vue';

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
    },
    {
      path: '/toDoList', 
      name: 'toDoList',
      component: ToDoList
    },
    {
      path: '/blogRoutes', 
      name: 'blogRoutes',
      component: BlogRoutes,
      children:[
        {
          path: 'lala', 
          name: 'blogRoutes-lala',
          component: BlogPage1,
        },
        {
          path: 'lele', 
          name: 'blogRoutes-lele',
          component: BlogPage2,
        }
      ]
    }
    
  ]
});

router.beforeEach((_, __, next) => {
  next();
});

export default router;
