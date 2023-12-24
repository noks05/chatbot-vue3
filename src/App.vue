<script setup>
import ChatBotBlock from './components/ChatBot.vue'
import ChatField from './components/ChatField.vue'
import { useMessagesStore } from './stores/messages'
import { ref } from 'vue'

const store = useMessagesStore()
const formRef = ref(null)

function handlerClick(ref) {
  store.addMessage({ author: 'human', text: ref.children[0].value })
}
</script>

<template>
  <ChatBotBlock class="title" msg="Закажи пиццу!" />

  <div class="card p-4">
    <ChatField v-bind:messages-data="store.messages" />

    <from class="form" ref="formRef">
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="2"
        placeholder="Сообщение..."
      ></textarea>
      <button class="btn btn-send" type="submit" @click="() => handlerClick(formRef)">
        Отправить
      </button>
    </from>
  </div>
</template>

<style scoped>
.card {
  background-color: rgb(243 243 243);
  border: 0;
}
.title {
  margin-bottom: 20px;
}
.form {
  display: flex;
}
.form-control {
  height: 40px;
  resize: none;
  margin-right: 10px;
  margin-bottom: 0;
  overflow: hidden;
  overflow-y: auto;
}
.btn-send {
  color: #11d29e;
  border-color: #11d29e;
}
.btn-send:hover {
  color: #fff;
  border-color: #11d29e;
  background-color: #11d29e;
}
</style>
