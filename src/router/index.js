import { createRouter, createWebHistory } from 'vue-router'
import ContadorTeste from '@/views/contadorTeste.vue'
import HomeView from '../views/HomeView.vue'
import ToDoList from '@/views/toDoList.vue'
import BlogRoutes from '@/views/blogRoutes.vue'
import BlogPage1 from '@/views/blogPage1.vue'
import BlogPage2 from '@/views/blogPage2.vue'
import BlogPage3 from '@/views/blogPage3.vue'

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
            // beforeEnter:(to,from) =>{

            // },
      children: [
        {
          path: 'missan-blogRoutes-Carros',
          name: 'Carros',
          component: BlogPage1,
        
        },
        {
          path: 'blog-routes-Motos',
          name: 'Motos',
          component: BlogPage2
        },
        {
          path: 'blogRoutes-Barcos',
          name: 'Barcos',
          component: BlogPage3
        }
      ]
    }
  ]
})

const data = Date.now()

router.beforeEach((to, from, next) => {

  if (Date.now() < data + 100000000000000000000000) next()
  else {

   
    if (from.name !== 'home' && to.name !== 'home') {
      next({ name: 'home' })
    } else next()
  }
})

export default router
