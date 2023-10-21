<template>
    <div v-if="message" class="flash-message">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: null,
      };
    },
    methods: {
      showMessage(message, duration = 3000) {
        this.message = message;
        setTimeout(() => {
          this.clearMessage();
        }, duration);
      },
      clearMessage() {
        this.message = null;
      },
    },
  };
</script>
  


<style scoped>
  .flash-message {
    background-color: #ff0000;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  