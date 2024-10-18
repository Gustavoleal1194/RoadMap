<script setup>
</script>

<template>
  <div>
    
    <h1>Compra de veiculos</h1>
    <br>
    <ul class="list">
        <li> 
           <h1> <router-link :to="{ name: 'Carros' }">Carros</router-link></h1>
      </li>
      <li>
      <h1>  <router-link :to="{ name: 'Motos' }">Motos</router-link></h1>
      </li>
      <li>
      <h1>  <router-link :to="{ name: 'Barcos' }">Barcos</router-link></h1>
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
