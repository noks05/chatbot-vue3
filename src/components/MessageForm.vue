<script setup>
import { ref } from 'vue'

const { actionDialog } = defineProps({
  actionDialog: {
    type: Function,
    required: true
  }
})
const formRef = ref(null)

function handlerClick(ref) {
  const value = ref.children[0].value.trim()
  if (!value.length) return

  const botQuestBlock = document.querySelector('.quest-list')
  botQuestBlock.classList.add('animate__fadeOutLeft')

  actionDialog(value)
}
</script>

<template>
  <from class="form" ref="formRef">
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="2"
      placeholder="Сообщение..."
    ></textarea>

    <button
      class="btn btn-send"
      type="submit"
      @click="() => handlerClick(formRef)"
    >
      Отправить
    </button>
  </from>
</template>

<style scoped>
.form {
  display: flex;
  margin-top: 20px;
}
.form-control {
  height: 40px;
  resize: none;
  margin-right: 10px;
  margin-bottom: 0;
  overflow: hidden;
  overflow-y: auto;
}
.form-control:focus {
  border-color: #11d29e;
  box-shadow: none;
}
.btn-send {
  color: #11d29e;
  border-color: #11d29e;
}
.btn-send:hover {
  color: #fff;
  border-color: #11d29e;
  background-color: #11d29e;
}
.btn-send:focus {
  box-shadow: 0 0 0 0.25rem rgb(17 210 158 / 25%);
}
</style>
