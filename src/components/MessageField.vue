<script setup>
import Simplebar from 'simplebar-vue'
import BotQuestions from './BotQuestions.vue'
import MessageBlock from './MessageBlock.vue'
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
      <MessageBlock v-bind:messages="messagesData" />

      <BotQuestions />
    </div>
  </Simplebar>
</template>

<style scoped>
.chat-field {
  min-height: 400px;
  max-height: 400px;
  width: 100%;
  padding: 3px 12px;
}

[data-simplebar='init'] {
  max-height: 400px !important;
}
</style>
