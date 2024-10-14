<script setup>
import { computed,reactive, ref, watch, watchEffect } from 'vue'

const visible = ref(false)
let isPrime = true

const numberObject = reactive({
contar: 0,
verificarPar: '',
valorPrimo:''
})





function incremento(){
  numberObject.contar++

}

function decremento(){
 numberObject.contar--

}
const valorAlterado = computed(() => {
  if (numberObject.contar < 10) {
    return 'Valor menor que 10'
  } else if (numberObject.contar === 10) return 'valor é igual a 10'
  else {
    return 'valor Maior que 10'
  }
})

watch(() => numberObject.contar ,(novoNumero)=> {
  if(novoNumero % 2 === 0){
    numberObject.verificarPar = 'numero par'
  }
  else {
    numberObject.verificarPar = 'numero impar'
  }
  
})

watchEffect(()=>{

  if (numberObject.contar < 2){
    numberObject.valorPrimo = 'Não é Primo'
  }else {
    for (let i = 2; i <= Math.sqrt(numberObject.contar);i++) {
    if (numberObject.contar % i === 0){
      isPrime = false
      break
    }
    else {
      isPrime = true
    }
  }
numberObject.valorPrimo = isPrime ? 'é primo' : 'não é primo'
}})



</script>

<template>
  <div class="contadorClass">
    <h1>Contador Em Vue</h1>
  </div>
  <div class="contadorClassCounter">
    <TheButton @click="decremento" style="font-size: 28px;width: 60px;">-</TheButton>
    <span>{{ numberObject.contar }}</span>
    <theButton @click="incremento" style="font-size: 28px;width: 60px;">+</theButton>
  </div>
  <div class="contadorClass">
    <h1>Ultimo valor do contador {{ valorAlterado }}</h1>
  </div>
  <div class="contadorClass">
    <h1> {{ numberObject.verificarPar }}</h1>
  </div>
  <div class="contadorClass">
    <theButton  class="contadorClassCounter" label="Verificar se é primo" @click="visible = true" />
  </div>
  <TheDialog v-model:visible="visible" modal header="Par ou Impar?" class="custom-header-dialog" :style="{width: '25rem',color:'#FFFFFF',}">
    <span class="text-surface-500 dark:text-surface-400 block mb-8 custom-dialog">o numero do contador {{ numberObject.valorPrimo }} .</span>
    <div class="flex items-center gap-4 mb-4">
    </div>
    <div class="flex items-center gap-4 mb-8">
    </div>
    <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = true"></Button>
    </div>
    
    <div>

    </div>
</TheDialog>
<div class="contadorClass">
      <h1>Tabela Completa</h1>
    </div>
    <div class="contadorClass">
      valor : {{ numberObject.contar }}
    </div>
    <div class="contadorClass">
      valor : {{ numberObject.verificarPar }}
    </div>
    <div class="contadorClass">
      valor : {{ numberObject.valorPrimo }}
    </div>

  
</template>

<style>
.contadorClass {
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 28px;
  height: 10vh;
}
.contadorClassCounter {
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 28px;
}
button {
  font-size: 28px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
}

.custom-dialog {
  background-color: var(--p-dialog-background); /* Usa a variável CSS */
  color: white;
  --p-dialog-background: green;
  text-align: center;
  
}
.custom-header-dialog{
  background-color: var(--p-dialog-background); /* Usa a variável CSS */
  color: white;
  font-size: 25px;
  --p-dialog-background: green;
  text-align: center;
  width: 100%;
}




</style>