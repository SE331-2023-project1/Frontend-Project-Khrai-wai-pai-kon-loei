import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    message: '' as string,
    submessage: '' as string,
    svgPath: '' as string, // Change image to svgPath and set the type to string
  }),
  actions: {
    updateMessage(message: string) {
      this.message = message
    },
    resetMessage() {
      this.message = ''
    },
    updateSubmessage(submessage: string) {
      this.submessage = submessage
    },
    resetSubmessage() {
      this.submessage = ''
    },
    updateSvgPath(svgPath: string) {
      this.svgPath = svgPath
    },
    resetSvgPath() {
      this.svgPath = ''
    }
  }
})
