<script setup>
</script>

<template>
  <div>
    <h1>Blog Routes</h1>
    <br>
    <ul class="list">
        <li> 
           <h1> <router-link :to="{ name: 'blogRoutes-lala' }">Carros</router-link></h1>
      </li>
      <li>
      <h1>  <router-link :to="{ name: 'blogRoutes-lele' }">Motos</router-link></h1>
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
