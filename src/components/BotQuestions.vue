<script setup>
import { useMessagesStore } from '../stores/messages'

const store = useMessagesStore()

function handlerClick(event) {
  const target = event.target
  event.target.parentNode.classList.add('animate__fadeOutLeft')
  store.actionDialogWithBot(target.textContent)
}
</script>

<template>
  <div
    class="quest-list animate__animated animate__fadeInLeft"
    v-if="store.questions.status"
  >
    <button
      class="quest-item btn btn-outline-dark"
      type="button"
      v-for="quest in store.questions.text"
      :key="quest"
      @click="handlerClick"
    >
      {{ quest }}
    </button>
  </div>
</template>

<style scoped>
.quest-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.quest-item {
  padding: 5px 10px;
}
.quest-item:not(last-child) {
  margin-bottom: 5px;
}
.btn-outline-dark:focus {
  box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.25);
}
</style>
