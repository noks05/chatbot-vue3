<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="message-item">
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
  margin: 0px 5px;
  margin-bottom: 3px;
}
.response .message-item {
  justify-content: left;
}
.message-item span {
  display: inline-block;
  padding: 10px;
  background-color: #38b405;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 2px 0px;
  border-radius: 0.25rem;
}
.response .message-item span {
  background-color: #fff;
  color: #333;
}
</style>
