<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

    <link
    href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Noto+Sans+SC:wght@700&family=Oxygen&family=Plus+Jakarta+Sans:wght@300&family=Racing+Sans+One&family=Raleway:wght@100;200;700&family=Roboto+Slab:wght@500;700&family=Rowdies:wght@300&family=Rubik:wght@500&display=swap"
    rel="stylesheet">
  <div class="form">
      <div class="form-section">
        <div class="from">
          <h1 class="font-bold text-3xl mb-4 text-center">Add New Teacher Form</h1>
      <form @submit.prevent="signup">
        <!-- firstname -->
          <div class="mt-2">
            <input id="firstname" v-model="formData.firstname" type="text" autocomplete="username" required placeholder="Teacher Firstname" class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
           <!-- lastname -->
          <div class="mt-2">
            <input id="lastname" v-model="formData.lastname" type="text" autocomplete="username" required placeholder="Teacher Lastname" class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
           <!-- username -->
          <div class="mt-2">
            <input id="username" v-model="formData.username" type="text" autocomplete="username" required placeholder="Teacher Username" class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
           <!-- email -->
          <div class="mt-2">
            <input id="email" v-model="formData.email" type="email" autocomplete="email" required placeholder="Teacher Email" class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
           <!-- password -->
          <div class="mt-2">
            <input id="password" v-model="formData.password" type="password" autocomplete="new-password" required placeholder="Teacher Password" class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
           <!-- repeat -->
          <div class="mt-2">
            <input id="passwordRepeat" v-model="formData.passwordRepeat" type="password" autocomplete="new-password" required placeholder="Repeat Password" class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        <button class="button-19 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" id="button-19-teacher" type="submit">Add Teacher</button>
      </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'; // Make sure to import Axios

export default {
  data() {
    return {
      formData: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        passwordRepeat: '',
      },
    };
  },
  methods: {
    sendPost() {
      // Create a payload object from formData
      const postData = {
        firstname: this.formData.firstname,
        lastname: this.formData.lastname,
        email: this.formData.email,
        username: this.formData.username,
        password: this.formData.password,
      };

      axios.post("http://localhost:8080/api/v1/auth/register/teacher", postData)
        .then(res => {
          // Handle the API response, e.g., store access token in local storage
          localStorage.setItem('access_token', res.data.access_token);
        })
        .catch(error => {
          // Handle API errors here
          console.error('Error:', error);
        });
    },
    signup() {
  if (!this.formData.firstname || !this.formData.lastname || !this.formData.username || !this.formData.email || !this.formData.password || !this.formData.passwordRepeat) {
    alert('Please fill in all required fields.');
  } else if (this.formData.password !== this.formData.passwordRepeat) {
    alert('Passwords do not match. Please check and try again.');
  } else {
    this.sendPost(); // Call the sendPost function to send registration data to the API
    alert('Teacher Registration successful..');

    // Clear the input fields by resetting the formData object
    this.formData.firstname = '';
    this.formData.lastname = '';
    this.formData.username = '';
    this.formData.email = '';
    this.formData.password = '';
    this.formData.passwordRepeat = '';
  }
},
  },
};

</script>
<style scoped>
    .form {
      font-family: 'Roboto', sans-serif;
      padding: 20px;
    }
    
    #formSelect {
      margin: 10px 0;
      padding: 8px;
      font-size: 16px;
      border-radius:20px ;
    
    }
    
    .form-section {
      margin-top: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      /* background-color: #9dcdff; */
      background-image: url(https://tinyurl.com/52pvsnnd);
      border-radius: 10px;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
      color:#5f5f5f;
      
    }
    
    input {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    #button-19-student{
      margin: auto;
      display: block;
      margin-top: 20px;
    }

    #button-19-teacher{
      margin: auto;
      display: block;
      margin-top: 20px;
    }
      .button-19 {
        appearance: button;
      background-color: #b062b7;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-family: din-round,sans-serif;
      font-size: 15px;
      margin-left: 20px;
      margin-top: 20px;
      font-weight: 700;
      letter-spacing: .8px;
      line-height: 20px;
      outline: none;
      overflow: visible;
      padding: 13px 16px;
      text-align: center;
      text-transform: uppercase;
      touch-action: manipulation;
      transform: translateZ(0);
      transition: filter .2s;
      user-select: none;
      -webkit-user-select: none;
      vertical-align: middle;
      white-space: nowrap;
      width: 40%;
      transition: transform 0.2s, rotate 0.2s;
    }
    
    .button-19:after {
      background-clip: padding-box;
      background-color: #cf6ed7;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      bottom: -4px;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    
    }
    
    .button-19:main,
    .button-19:focus {
      outline: 2px solid #4F46E5;
      user-select: auto;
      outline-offset: 4px
    }
    
    .button-19:hover:not(:disabled) {
      filter: brightness(1.1);
      -webkit-filter: brightness(1.1);
      transform: rotate(2deg) scale(1.1);
    }
    
    .button-19:disabled {
      cursor: auto;
    }
    h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    
    @media (min-width: 1024px) {
      /* .form {
        margin-top: 100px;
      } */
      input{
        width: 100%;
      }
      #button-19-student{
        margin-left: 310px;
      }
    }
    
  </style>