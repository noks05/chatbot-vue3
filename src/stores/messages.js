import { defineStore } from 'pinia'
import { generateId } from '../utils/generateRandomId'

export const useMessagesStore = defineStore('counter', {
  state: () => ({
    messages: [

      {
        author: 'bot',
        texts: ['Привет! Что я могу для Вас сделать?']
      }
    ].map(obj => generateId(obj))
  }),
  actions: {
    addMessage(newMessage) {

      // console.log(this.messages)]

      const lastIndex = this.messages.length - 1
      const firstPart = this.messages.slice(0, lastIndex)
      const lastMessage = this.messages[lastIndex]

      if (lastMessage.author === newMessage.author) {
        this.messages = [
          ...firstPart,
          {
            author: lastMessage.author,
            texts: [...lastMessage.texts, newMessage.text]
          }
        ]
      } else {
        this.messages = [
          ...this.messages,
          {
            author: newMessage.author,
            texts: [newMessage.text]
          }
        ]
      }
    },
  },
})