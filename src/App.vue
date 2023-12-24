<script setup>
import ChatBotBlock from './components/ChatBot.vue'
import ChatField from './components/ChatField.vue'
import MessageItem from './components/MessageItem.vue'
import { ref, render, h } from 'vue'

const formRef = ref(null)

// onMounted(() => {
//   console.log(formRef)
// })

function handlerClick(ref) {
  const messageList = document.querySelector('.message-list')
  MessageItem.textContent = ref.children[0].value
  const itemMessage = Object.assign(MessageItem, {})
  const newComponent = h(itemMessage, { text: ref.children[0].value })
  console.log(newComponent)

  // Append it to p (which is an HTML Element)
  render(newComponent, messageList)
}
</script>

<template>
  <ChatBotBlock class="title" msg="Закажи пиццу!" />

  <div class="card p-4">
    <ChatField />
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
  color: #38b405;
  border-color: #38b405;
}
.btn-send:hover {
  color: #fff;
  border-color: #38b405;
  background-color: #38b405;
}
</style>
