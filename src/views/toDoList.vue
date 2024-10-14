<script setup>
import { ref } from 'vue'

const mensagem = ref('Formulario tarefas')
const inputName = ref('')
const inputDescription = ref('')
let idTarefa = 1

const tarefas = ref([])

function addTask() {
  if (inputName.value.trim !== '') {
    tarefas.value.push({
      id: idTarefa++,
      nome: inputName.value,
      descricao: inputDescription.value.trim() !== '' ? inputDescription.value : '',
      status: false
    })
    inputName.value = ''
    inputDescription.value = ''
  }
}
function removeTask(nomeQualquer) {
  tarefas.value = tarefas.value.filter((tarefa) => tarefa.id !== nomeQualquer)
}
function checkStatus(tarefa){
  tarefa.status = !tarefa.status

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
          <inputText id="input1" v-model="inputName" style="width: 580px"> </inputText>
        </div>
        <label for="input1" class="fontLabel">Descrição da tarefa(opcional)</label>

        <div class="paddingDescricao">
          <textarea
            id="input2"
            v-model="inputDescription"
            rows="4"
            cols="50"
            style="color: #333333; padding: 12px; resize: none"
          ></textarea>
        </div>
        <div class="theButton">
          <theButton type="submit" :disabled="inputName === ''" style="width: 275px"
            >Submit</theButton
          >
        </div>
      </form>
    </div>
    <div class="title">
      <p>Valor do primeiro input: {{ inputName }}</p>
    </div>
    <div class="title">
      <p>Valor do primeiro input: {{ inputDescription }}</p>
    </div>

    <div class="title"><h1>Tarefas</h1></div>
    <div class="task-list">
      <ul>
        <li v-for="taskKey in tarefas" :key="taskKey.id" :class="{
        tarefaAguardando: !taskKey.status,
        tarefaCompleta: taskKey.status
    }">
          <div class="taskLine" @click="checkStatus(taskKey)">
            <strong >{{ taskKey.nome }}</strong
            ><span
              ><theButton @click="removeTask(taskKey.id)" style="background-color: red"
                >Remover</theButton
              ></span
            >
          </div>
          <div class="backDescription">
            <p>{{ taskKey.descricao }}</p>
          </div>
          <hr class="full-width-line" />
        </li>
      </ul>
    </div>
    <br /><br />
  </body>
</template>

<style scoped>
.backDescription {
  background-color: bisque;
  margin: 10px;
  overflow-wrap: break-word;
  padding: auto;
  white-space: break-spaces;
}

body {
  background-color: #333333;
}

.fontLabel {
  font-size: 18px;
  margin-left: 10px;
}

.full-width-line {
  border: none;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  width: 100%;
}

.paddingDescricao {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  width: 600px;
}

.paddingNome {
  display: flex;
  padding: 12px;
}

.taskLine {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: auto;
}

.task-list {
  background-color: white;
  border: 1px solid pink;
  border-radius: 16px;
  color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  min-height: 150px;
  padding: 10px;
  width: 30%;
}

.task-list p {
  flex-grow: 1;
  margin: 0;
}

.theButton {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.tarefaAguardando {
  background-color: yellow;
}

.tarefaCompleta {
  background-color: lightgreen;
}

.title {
  align-items: center;
  background-color: #333333;
  color: white;
  display: flex;
  font-size: 28px;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
