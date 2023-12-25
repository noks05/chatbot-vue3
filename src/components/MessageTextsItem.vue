<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="message-item animate__animated animate__fadeInDown">
    <span>
      {{ text }}
    </span>
  </li>
</template>

<style scoped>
.message-item {
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 3px;
}
.bot-response .message-item {
  justify-content: left;
}
.message-item span {
  display: inline-block;
  padding: 10px;
  color: #666;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
  border-radius: 0.25rem;
}
.bot-response .message-item span {
  background-color: #11d29e;
  color: #fff;
}
</style>
