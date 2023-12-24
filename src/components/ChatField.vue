<script setup>
import Avatar from './icons/IconDocumentation.vue'
import MessageList from './MessageList.vue'
</script>

<template>
  <div class="chat-field">
    <div class="message-wrapper">
      <MessageList />
      <div class="avatar"><Avatar /></div>
    </div>
  </div>
</template>

<style scoped>
.chat-field {
  height: 350px;
  width: 100%;
  margin-bottom: 20px;
  padding: 3px 0;
  overflow-y: auto;
}

.message-wrapper {
  display: flex;
  flex-wrap: nowrap;
  max-width: 300px;
  margin-bottom: 20px;
}
.response.message-wrapper {
  flex-direction: row-reverse;
}

.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
  overflow: hidden;
}
</style>
