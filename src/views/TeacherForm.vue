<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

    <link
    href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Noto+Sans+SC:wght@700&family=Oxygen&family=Plus+Jakarta+Sans:wght@300&family=Racing+Sans+One&family=Raleway:wght@100;200;700&family=Roboto+Slab:wght@500;700&family=Rowdies:wght@300&family=Rubik:wght@500&display=swap"
    rel="stylesheet">
  <div class="form">
      <div class="form-section">
        <div class="from">
          <h1 class="font-bold text-3xl mb-4 text-center">Add New Teacher Form</h1>
          <form class="space-y-6" @submit.prevent="onSubmit">
        <!-- firstname -->
        <div class="mt-2">
          <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">First name</label>

          <InputText type="text" v-model="firstname" :error="errors['firstname']"></InputText>
        </div>
           <!-- lastname -->
           <div class="mt-2">
          <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900"
            >Last Name</label
          >
          <InputText type="text" v-model="lastname" :error="errors['lastname']"></InputText>
        </div>
           <!-- username -->
           <div class="mt-2">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
            >User Name</label
          >
          <InputText type="text" v-model="username" :error="errors['username']"></InputText>
        </div>
           <!-- email -->
           <div class="mt-2">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email</label
          >
          <InputText type="text" v-model="email" :error="errors['email']"></InputText>
        </div>
           <!-- password -->
           <div class="mt-02">
          <div class="flex items-center justify-start">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>

          <div class="mt-2">
            <InputText v-model="password" type="password" :error="errors['password']"></InputText>
          </div>
        </div>
           <!-- repeat -->
           <div class="mt-02">
          <div class="flex items-center justify-start">
            <label for="passwordrepeat" class="block text-sm font-medium leading-6 text-gray-900"
              >Repeat Password</label
            >
          </div>

          <div class="mt-2">
            <InputText v-model="passwordrepeat" type="password" :error="errors['passwordrepeat']"></InputText>
          </div>
        </div>
        <button class="button-19 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" id="button-19-teacher" type="submit">Add Teacher</button>
      </form>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useAuthStore } from '@/stores/auth'
import { useRouter, RouterLink } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const router = useRouter()
const messageStore = useMessageStore()

const { message } = storeToRefs(messageStore)

const validationSchema = yup.object({
  username: yup.string().required('The username is required'),
  firstname: yup.string().required('The firstName is required'),
  lastname: yup.string().required('The lastName is required'),
  email: yup.string().email().required('The email is required'),
  password: yup.string().required('The password is required'),
  passwordrepeat: yup.string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm Password is required'),
})

const { errors, handleSubmit } = useForm({
  validationSchema,

  initialValues: {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordrepeat: '',
  }
})

const { value: username } = useField<string>('username')

const { value: firstname } = useField<string>('firstname')

const { value: lastname } = useField<string>('lastname')

const { value: email } = useField<string>('email')

const { value: password } = useField<string>('password')

const { value: passwordrepeat } = useField<string>('passwordrepeat')

const onSubmit = handleSubmit((values) => {
  authStore
    .teacherRegister(values.username, values.firstname, values.lastname, values.email, values.password)
    .then(() => {
      router.push({ name: 'TeacherRegister' })
      alert('Teacher Registration successful..');
      location.reload()
      setTimeout(() => {
        messageStore.resetMessage(),
        messageStore.resetSubmessage(),
        messageStore.resetSvgPath()
      }, 5000)
    })
    .catch(() => {
      messageStore.updateMessage('Username is already exists')
      messageStore.updateSubmessage('Please try another username')
      const svgPath = `
        <svg fill="#B9261C" class="h-10 w-10" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
          <title />
          <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z" />
          <path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z" />
        </svg>
    `
    messageStore.updateSvgPath(svgPath)
      setTimeout(() => {
        messageStore.resetMessage(),
        messageStore.resetSubmessage(),
        messageStore.resetSvgPath()
      }, 3000)
    })
})
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