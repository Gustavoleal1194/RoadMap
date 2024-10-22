<script setup>
import router from '@/router/index';
import { calcularIdade } from './functions'

import { adicionarAoCarrinho } from '@/utils/functions/cart';
function adicionarItems(moto) {
  adicionarAoCarrinho(moto);
  router.push({ name: 'carrinhoDeCompras' });
}
const motos = [
  { id:3,
    nome: 'Moto Vermelho',
    imagem:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jrEU-tHF9O6SJeOKvsBXEcw4g8di8IsDYg&s',
    preco: 'R$ 200.000,00',
    ano: '2019'
  },
  { id: 4,
    nome: 'Moto azul',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkMuNqR497pTqwAhH9jgTtpIb-e_aBhLS9g&s',
    preco: 'R$ 200.000,00',
    ano: '2019'
  }
]
</script>

<template>
  <div>
    <h2>
      <span><theButton>Previous</theButton></span
      >Catalogo de Motos
      <span><theButton @click="calcularIdade('11/09/1994')">Next</theButton></span>
    </h2>
    <ul>
      <li v-for="moto in motos" v-bind:key="moto.id">
        <h1>{{ moto.nome }}</h1>
        <img :src="moto.imagem" alt="" style="height:150px;width:220px" />
        <h1>{{ moto.preco }}</h1>
        <h1>{{ moto.ano }}</h1>
        <br>
        <theButton @click="adicionarItems(moto)">Adicionar ao carrinho</theButton>

      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: aqua;
}
div {
  background-color: blue;
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
