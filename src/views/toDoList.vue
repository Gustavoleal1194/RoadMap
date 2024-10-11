<script setup>
import { ref } from 'vue'

const mensagem = ref('Formulario tarefas')
const inputValue1 = ref('')
const inputValue2 = ref('')
let idTarefa = 1

const tarefas = ref([])

function addTask() {
  if (inputValue1.value.trim !== '') {
    tarefas.value.push({
      id: idTarefa++,
      nome: inputValue1.value,
      descricao: inputValue2.value.trim() !== '' ? inputValue2.value : '',
      status: false
    })
    inputValue1.value = ''
    inputValue2.value = ''
  }
}
</script>
<template>
  <body>
    <div class="title">
      <p>{{ mensagem }}</p>
    </div>
    <div class="title">
      <form @submit.prevent="addTask" action="">
        <label for="input1" class="fontLabel">Tarefa</label>
        <div class="paddingNome">
          <inputText id="input1" v-model="inputValue1" style="width: 580px"> </inputText>
        </div>
        <label for="input1" class="fontLabel">Descrição da tarefa(opcional)</label>

        <div class="paddingDescricao">
          <textarea id="input2" v-model="inputValue2" rows="4" cols="50"></textarea>
        </div>
        <div class="theButton">
          <theButton type="submit" :disabled="inputValue1 === ''" style="width: 275px"
            >Submit</theButton
          >
        </div>
      </form>
    </div>
    <div class="title">
      <p>Valor do primeiro input: {{ inputValue1 }}</p>
    </div>
    <div class="title">
      <p>Valor do primeiro input: {{ inputValue2 }}</p>
    </div>

    <div class="title"><h1>Tarefas</h1></div>
    <div class="task-list">
      <ul>
        <li v-for="xixicoco in tarefas" :key="xixicoco.id">
          <div class="taskLine">
            <strong>{{ xixicoco.nome }}</strong
            ><span><theButton style="background-color: red">Remover</theButton></span>
          </div>
          <div class="backDescription">
            <p>{{ xixicoco.descricao }}</p>
          </div>
          <hr class="full-width-line" />
        </li>
      </ul>
    </div>
    <br /><br />
  </body>
</template>

<style scoped>
body {
  background-color: #333333;
}
.title {
  background-color: #333333;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: white;
}
.paddingDescricao {
  width: 600px;
  padding: 12px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}
.paddingNome {
  padding: 12px;
  display: flex;
}
.fontLabel {
  font-size: 18px;
  margin-left: 10px;
}
.theButton {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
}
.task-list {
  width: 30%;
  padding: 10px;
  border: 1px solid pink;
  border-radius: 16px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background-color: white;
  justify-content: center;
  color: #333333;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: column;
}
.task-list p {
  flex-grow: 1;
  margin: 0;
}
.full-width-line {
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
}

.backDescription {
  background-color: bisque;
  padding: auto;
  margin: 10px;
  white-space: pre-wrap;
}
.taskLine {
  align-items: center;
  padding: auto;
  display: flex;
  margin: 10px;
  justify-content: space-between;
}
</style>
