<script setup>
const barcos = [
  {
    id: 1,
    nome: 'barco 1',
    imagem:
      'https://img.freepik.com/fotos-gratis/imagem-do-barco-gerada-por-ai_23-2150647897.jpg?semt=ais_hybrid',
    preco: '250.000,00',
    ano: '2020'
  },
  {
    id: 2,
    nome: 'barco 2',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwFpsOyo8nwbAYw74Go7pqCiJIEDpyhntGQ&s',
    preco: '220.000,00',
    ano: '2021'
  }
]
</script>

<template>
  <div>
    <h2>
      <span><theButton>Previous</theButton></span
      >Catalogo de Motos <span><theButton>Next</theButton></span>
    </h2>

    <ul>
      <li v-for="barcodosmano in barcos" :key="barcodosmano.id">
        <h1>{{ barcodosmano.nome }}</h1>
        <img :src="barcodosmano.imagem" alt="" style="height: 150px; width: 220px" />

        <h1>{{ barcodosmano.preco }}</h1>
        <h1>{{ barcodosmano.ano }}</h1>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: aqua;
}
div {
  background-color: brown;
  padding: 20px;
}

ul {
  display: flex;
  list-style-type: none;
  margin: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
}
li {
  width: 250px;
  margin: 20px;
  text-align: center;
}
</style>
