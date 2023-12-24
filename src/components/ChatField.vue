<script setup>
import Robot from './icons/IconRobot.vue'
import User from './icons/IconUser.vue'
import MessageTexts from './MessageTexts.vue'
import Simplebar from 'simplebar-vue'
import BotQuestions from './BotQuestions.vue'
import 'simplebar-vue/dist/simplebar.min.css'

defineProps({
  messagesData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <Simplebar>
    <div class="chat-field">
      <div
        v-bind:class="['message-wrapper', item.author === 'bot' ? 'bot-response' : ''].join(' ')"
        v-for="item in messagesData"
        :key="item.id"
      >
        <MessageTexts v-bind:texts="item.texts" />

        <div class="avatar animate__animated animate__zoomIn">
          <Robot v-if="item.author === 'bot'" />
          <User v-if="item.author !== 'bot'" />
        </div>
      </div>

      <BotQuestions v-if="messagesData[messagesData.length - 1].author === 'bot'" />
    </div>
  </Simplebar>
</template>

<style scoped>
.chat-field {
  min-height: 400px;
  max-height: 400px;
  width: 100%;
  padding: 3px 10px;
}
[data-simplebar='init'] {
  max-height: 400px !important;
}
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
