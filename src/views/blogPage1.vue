<script setup>
import { onBeforeRouteEnter, onBeforeRouteLeave } from 'vue-router';


function beforeRouteEnter(to, from, next) {
  console.log("Indo para Lala de:", from.name);
  next(); 
}


function beforeRouteLeave(to, from, next) {
  console.log("Saindo de Lala para:", to.name);
  next();
}


onBeforeRouteEnter(beforeRouteEnter);
onBeforeRouteLeave(beforeRouteLeave);
</script>


<template>
  <div>
    <h2>Catalogo de carros</h2>
    <ul>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
      </li>
      <li>
        <h1>Carro Nome</h1>
        <img
          src="https://img.freepik.com/vetores-gratis/carro-esportivo-azul-isolado-no-branco-vector_53876-67354.jpg"
          alt="Carro esportivo azul"
          width="250"
          height="300"
        />
        <h1>2019</h1>
        <h1>R$:300,000,00</h1>
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
  flex-wrap:wrap
}
li {
  width: 250px; 
  margin: 20px; 
  text-align: center;
}
</style>
