<script setup>
import Robot from './icons/IconRobot.vue'
import User from './icons/IconUser.vue'
import MessageTexts from './MessageTexts.vue'
import 'simplebar-vue/dist/simplebar.min.css'

defineProps({
  messages: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div
    v-bind:class="
      [
        'message-wrapper',
        message.author === 'bot' ? 'bot-response' : ''
      ].join(' ')
    "
    v-for="message in messages"
    :key="message.id"
  >
    <MessageTexts v-bind:texts="message.texts" />

    <div class="avatar animate__animated animate__zoomIn">
      <Robot v-if="message.author === 'bot'" />
      <User v-if="message.author !== 'bot'" />
    </div>
  </div>
</template>

<style scoped>
.message-wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: right;
  max-width: 300px;
  margin-bottom: 20px;
}
.bot-response.message-wrapper {
  flex-direction: row-reverse;
  justify-content: left;
}
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  height: 40px;
  width: 40px;
  padding: 3px;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
  overflow: hidden;
}
.avatar img {
  border-radius: 100%;
}
</style>
