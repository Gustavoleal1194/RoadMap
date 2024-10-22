<script setup>
import eventBus from '@/utils/functions/eventBus'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const valorTotal = ref(0)
const itensCarrinho = ref([])

function calcularTotal() {
    valorTotal.value = itensCarrinho.value.reduce(
        (total, item) =>
        total + parseFloat(item.preco.replace('R$', '').replace('.', '').replace(',', '.')) * item.quantidadeItens,
        0
    )
}

function removeItem(item) {
    itensCarrinho.value = itensCarrinho.value.filter(carrinhoItem => carrinhoItem.id !== item.id)
    localStorage.setItem('carrinho', JSON.stringify(itensCarrinho.value))
    eventBus.dispatch('item-removido', item)
    calcularTotal()
}

function incrementar(item) {
    const foundItem = itensCarrinho.value.find(carrinhoItem => carrinhoItem.id === item.id)
    if (foundItem) {
        foundItem.quantidadeItens++ 
        calcularTotal()
    }
}

function decrementar(item) {
    const foundItem = itensCarrinho.value.find(carrinhoItem => carrinhoItem.id === item.id)
    if (foundItem && foundItem.quantidadeItens > 1) {
        foundItem.quantidadeItens--
        calcularTotal()
    }
}

onMounted(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || []
    itensCarrinho.value = carrinhoSalvo.map(item => ({
        ...item,
        quantidadeItens: 1 
    }))

    eventBus.on('item-adicionado', (item) => {
        const existingItem = itensCarrinho.value.find(carrinhoItem => carrinhoItem.id === item.id)
        if (existingItem) {
            existingItem.quantidadeItens++ 
        } else {
            itensCarrinho.value.push({ ...item, quantidadeItens: 1 })
        }
        calcularTotal()
    })

    eventBus.on('item-removido', (item) => {
        itensCarrinho.value = itensCarrinho.value.filter(carrinhoItem => carrinhoItem.id !== item.id)
        calcularTotal()
    })

    calcularTotal()
})

onBeforeUnmount(() => {
    eventBus.off('item-adicionado')
    eventBus.off('item-removido')
})
</script>

<template>
  <h1>Carrinho de compras</h1>

  <ul>
    <li v-for="item in itensCarrinho" :key="item.id" class="carrinho-item">
      <div>
        <span>{{ item.nome }}</span>
      </div>
      <div>
        <img :src="item.imagem" alt="" style="height: 150px; width: 220px" />
        <br />
        <p>Preço: {{ item.preco }}</p>
        <br />
        <div>
          <TheButton @click="decrementar(item)" style="font-size: 28px; width: 30px;height: 45px;margin: 16px;">-</TheButton>
          <span>{{ item.quantidadeItens }}</span> 
          <theButton @click="incrementar(item)" style="font-size: 28px; width: 30px; height: 45px;">+</theButton>
        </div>
        <theButton @click="removeItem(item)" style="width: 120px"> Remover </theButton>
      </div>
    </li>
  </ul>
  <p v-if="itensCarrinho.length === 0">O carrinho está vazio.</p>
  <h1>Valor Total : {{ valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</h1>
 <div class="button-container"> <theButton class="button">Finalizar Compra</theButton></div>
</template>

<style scoped>
h1 {
  font-size: 25px;
  justify-content: center;
  text-align: center;
}
p{
    font-size: 18px;
}
span {
  font-size: 28px;
}

.carrinho-item {
  display: grid;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 20px;
}
ul {
  display: flex;
  list-style-type: none;
  margin: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.button{
display: flex;
justify-content: center;
align-items: center;
font-size: 28px;
width: 350px;
text-align: center;
place-items: center;
}

.button-container {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  margin-top: 20px; /* Adiciona margem superior se necessário */
}

</style>
