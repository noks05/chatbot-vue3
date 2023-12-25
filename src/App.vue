<script setup>
import TitleChatBot from './components/TitleChatBot.vue'
import MessageField from './components/MessageField.vue'
import MessageForm from './components/MessageForm.vue'
import { useMessagesStore } from './stores/messages'

const store = useMessagesStore()
</script>

<template>
  <TitleChatBot class="title" textTitle="Chatbot listens to you:)" />

  <div class="card p-4">
    <MessageField v-bind:messages-data="store.messages" />

    <MessageForm v-bind:actionDialog="store.actionDialogWithBot" />
  </div>
</template>

<style scoped>
.card {
  border: 0;
  background-color: rgb(243 243 243);
  box-shadow: 0 7px 10px 2px #dadada;
}
.title {
  margin-bottom: 20px;
}
.form {
  display: flex;
  margin-top: 20px;
}
.form-control {
  height: 40px;
  resize: none;
  margin-right: 10px;
  margin-bottom: 0;
  overflow: hidden;
  overflow-y: auto;
}
.form-control:focus {
  border-color: #11d29e;
  box-shadow: none;
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
.btn-send:focus {
  box-shadow: 0 0 0 0.25rem rgb(17 210 158 / 25%);
}
</style>
