
<script setup>
import { ref, computed, watch, watchEffect } from 'vue'

const contador = ref(0)

const valorAtual = computed(() => {
  return contador.value > 10 ? 'Maior que 10' : 'Menor ou igual a 10'
})

const incrementar = () => {
  contador.value++
}

const decrementar = () => {
  contador.value--
}

const ultimoValorContador = ref(contador.value)
watch(contador, (novoValor) => {
  ultimoValorContador.value = novoValor -1
})

  const valorWatchEffect = ref(contador.value)
watchEffect(() => {
  valorWatchEffect.value = contador.value
})
</script>


<template>
  <div class="contador-simples">
    <h1>Contador Simples</h1>
    <div class="counter">
      <button @click="decrementar">-</button>
      <span>{{ contador }}</span>
      <button @click="incrementar">+</button>
    </div>
    <p>Valor atual do contador é {{ valorAtual }}</p>
    <br>
    
    <!-- Mensagens observadas -->
    <p>Último valor do contador: {{ ultimoValorContador }}</p>
    <br>
    <p>Valor do contador no atual: {{ valorWatchEffect }}</p>
  </div>
</template>

<style scoped>
.contador-simples {
  text-align: center;
  margin: 20px;
  background-color: darkgray;
}

.counter {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
}
</style>
