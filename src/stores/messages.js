import { defineStore } from 'pinia'
import { generateId } from '../utils/generateRandomId'

export const useMessagesStore = defineStore('counter', {
  state: () => ({
    messages: [
      {
        author: 'bot',
        texts: ['Привет! Что я могу для Вас сделать?']
      }
    ].map(obj => generateId(obj)),

    questions: {
      status: true,
      text: ['Заказать пиццу', 'Установить будильник', 'Вывести погоду']
    }
  }),
  actions: {
    actionDialogWithBot(text) {

      const botResponse = ['закажу пиццу', 'установлю будильник', 'выведу погоду']

      const index = this.questions.text.indexOf(text)
      let respBot = 'Простите, не разобрал вашу просьбу :( , попробуйте снова!'
      if (index >= 0) {
        respBot = `Хорошо, я ${botResponse[index]}. Что еще могу сделать?`
      }
      setTimeout(
        () =>
          this.changeStatusQuestions(),
        1300
        // убираем блог с вопросами бота позже появления новых сообщений,
        //  чтобы  не было неприятного скачка по высоте
      )
      setTimeout(
        () => (
          this.messages = [
            ...this.messages,
            {
              author: 'human',
              texts: [text]
            }
          ]
        ),
        600
      )
      setTimeout(
        () => (
          this.messages = [
            ...this.messages,
            {
              author: 'bot',
              texts: [respBot]
            }
          ],
          this.changeStatusQuestions()
        ),
        1200
      )

    },

    changeStatusQuestions() {
      this.questions.status = !this.questions.status
    },
  },
})