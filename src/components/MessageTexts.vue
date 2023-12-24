<script setup>
import MessageTextsItem from './MessageTextsItem.vue'

defineProps({
  texts: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul class="message-list">
    <MessageTextsItem v-for="text in texts" :key="text" v-bind:text="text"></MessageTextsItem>
  </ul>
</template>

<style scoped></style>
