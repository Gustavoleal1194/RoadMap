<script setup>
import { onBeforeRouteEnter, onBeforeRouteLeave } from 'vue-router';

// `beforeRouteEnter` só é chamado antes da rota ser inserida
function beforeRouteEnter(to, from, next) {
  console.log("Indo para Lala de:", from.name);
  next(); // Confirma a navegação
}

// `beforeRouteLeave` é chamado antes de deixar a rota
function beforeRouteLeave(to, from, next) {
  console.log("Saindo de Lala para:", to.name);
  next();
}

// Registrando os hooks de rota
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
            src="https://www.yamaha-motor.com.br/file/v8175103964778769023/products/lateral-mtseries-mt03-321-abs-30118-fx01-img-01-v02-desktop.jpg"
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
    background-color: blue;
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
  