import { createRouter, createWebHistory } from 'vue-router'
import ContadorTeste from '@/views/contadorTeste.vue'
import HomeView from '../views/HomeView.vue'
import ToDoList from '@/views/toDoList.vue'
import BlogRoutes from '@/views/blogRoutes.vue'
import BlogPage1 from '@/views/blogPage1.vue'
import BlogPage2 from '@/views/blogPage2.vue'
import BlogPage3 from '@/views/blogPage3.vue'
import CarrinhoCompra from '@/views/carrinhoCompra.vue'

function soma(){
  var result
   result = 2 + 2
   console.log('entrou aqui e somou resultado :' +result)
}
function subtrair(){
  var result
   result = 2 - 2
   console.log('entrou aqui e subtraiu resultado :' +result)


}
function dividir(){
  var result
   result = 2 /2
   console.log(result)
   console.log('entrou aqui e dividiu resultado :' +result)

}

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
          beforeEnter: (to, from, next) => {
            soma()
            console.log(`Entrando na página ${to.name}`)
            next() 
          }
        
        },
        {
          path: 'blog-routes-Motos',
          name: 'Motos',
          component: BlogPage2,
          beforeEnter: (to, from, next) => {
            subtrair()
            console.log(`Entrando na página ${to.name}`)
            next()
          }
          
        },
        {
          path: 'blogRoutes-Barcos',
          name: 'Barcos',
          component: BlogPage3,
          beforeEnter: (to, from, next) => {
            dividir()
            console.log(`Entrando na página ${to.name}`)
            next() 
          }
        }
      ]
    },
    {
      path: '/Carrinho-de-compras',
      name: 'carrinhoDeCompras',
      component: CarrinhoCompra
    },
  ]
})

const data = Date.now() + 30000
// const routerCycle = ['Carros','Motos','Barcos']
// let routeIndex = 0

// function startCycle(){
//   setInterval(() =>{
//     routeIndex = (routeIndex + 1) % routerCycle.length
//     router.push({name: routerCycle[routeIndex]},
//     )
//   },30000)
// }
// startCycle()

router.beforeEach((to, from, next) => {

  if (Date.now() < data + 300000000000) next()
  else {

   
    if (from.name === 'home' && to.name !== 'home') {
      next({ name: 'home' })
    } else next()
  }
})

export default router
