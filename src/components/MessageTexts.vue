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
  <div class="message-list-wrapper">
    <ul>
      <MessageTextsItem
        v-for="text in texts"
        :key="text"
        v-bind:text="text"
      ></MessageTextsItem>
    </ul>
  </div>
</template>

<style scoped>
.message-list-wrapper {
  margin: 0px 5px;
}
</style>
