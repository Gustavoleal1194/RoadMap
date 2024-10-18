<script setup>
const carros = [
  {
    id:1,
    nome: 'Carro Vermelho',
    imagem:
      'https://www.comparaonline.com.br/blog-statics/br/uploads/2022/06/carro-esportivo-vermelho-1-1024x576.jpg',
    preco: 'R$ 200.000,00',
    ano: '2019'
  },
  {
    id:2,
    nome: 'Carro azul',
    imagem: 'https://img0.icarros.com/dbimg/imgnoticia/4/27915_1',
    preco: 'R$ 200.000,00',
    ano: '2019'
  }
]
</script>

<template>
  <div>
    <h2>
      Catalogo de carros<span><theButton>Next</theButton></span>
    </h2>
    <ul>
      <li v-for="carro in carros" :key="carro.id">
        <h1>{{ carro.nome }}</h1>
        <img :src="carro.imagem" alt="" style="height:150px;width:220px" />

        <h1>{{ carro.ano }}</h1>
        <h1>R$: {{ carro.preco }}</h1>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1{
  font-size: 25px;
  color: white;
}
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
  height: auto;
  width: 250px;
  margin: 20px;
  text-align: center;
}
</style>
