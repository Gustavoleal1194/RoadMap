<script setup>
import { useRouter } from "vue-router"


const router = useRouter()

function replaceROuterCarros(){

router.replace({name: 'Carros'})
}

function replaceRouterMotos(){
router.replace({name: 'Motos'})

}
function replaceRouterBarcos(){
router.replace({name: 'Barcos'})

}
function trocaRotas(){
  router.push({name: 'blogRoutes'})
}


</script>

<template>
  <div>
    
    <h1 @click="trocaRotas" style="cursor: pointer; ">Compra de veiculos</h1>
    <br>
    <ul class="list">
        <li> 
           <h1 @click="replaceROuterCarros" style="cursor: pointer; ">Carros</h1>
      </li>
      <li>
      <h1 @click="replaceRouterMotos" style="cursor: pointer;" > Motos</h1>
      </li>
      <li>
      <h1 @click="replaceRouterBarcos" style="cursor: pointer;"> Barcos</h1>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style scoped>
body {
  background-color: #333333;
}

h1 {
  color: blue;
  font-size: 28px;
  text-align: center;
}

.list{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
</style>
