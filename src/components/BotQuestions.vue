<script setup>
import { useMessagesStore } from '../stores/messages'

const botResponse = ['закажу пиццу', 'установлю будильник', 'выведу погоду']
const items = ['Заказать пиццу', 'Установить будильник', 'Вывести погоду']

const store = useMessagesStore()

function handlerClick(event) {
  const target = event.target
  const index = items.indexOf(target.textContent)
  const indexEl = index >= 0 ? index : 'это сделаю'
  store.addMessage({ author: 'human', text: target.textContent })
  setTimeout(
    () =>
      store.addMessage({
        author: 'bot',
        text: `Хорошо, я ${botResponse[indexEl]}. Что еще могу сделать?`
      }),
    1200
  )
}
</script>

<template>
  <div class="quest-list animate__animated animate__fadeInLeft">
    <button
      class="quest-item btn btn-outline-dark"
      type="button"
      v-for="item in items"
      :key="item"
      @click="handlerClick"
    >
      {{ item }}
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
