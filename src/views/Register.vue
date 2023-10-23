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
    .studentRegister(values.username, values.firstname, values.lastname, values.email, values.password)
    .then(() => {
      router.push({ name: 'Login' })
      messageStore.updateMessage('Register Successful')
      messageStore.updateSubmessage('You can login to our website')
      const svgPath = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="h-10 w-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    `
    messageStore.updateSvgPath(svgPath)
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

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-60 w-60" src='../assets/logo.png' alt="logo" />
      <h2 class="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>

      
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="onSubmit">
        <div>
          <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">First name</label>

          <InputText type="text" v-model="firstname" :error="errors['firstname']"></InputText>
        </div>

        <div>
          <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900"
            >Last Name</label
          >
          <InputText type="text" v-model="lastname" :error="errors['lastname']"></InputText>
        </div>

        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
            >User Name</label
          >
          <InputText type="text" v-model="username" :error="errors['username']"></InputText>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email</label
          >
          <InputText type="text" v-model="email" :error="errors['email']"></InputText>
        </div>

        <div>
          <div class="flex items-center justify-start">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>

          <div class="mt-2">
            <InputText v-model="password" type="password" :error="errors['password']"></InputText>
          </div>
        </div>
        
        <div>
          <div class="flex items-center justify-start">
            <label for="passwordrepeat" class="block text-sm font-medium leading-6 text-gray-900"
              >Repeat Password</label
            >
          </div>

          <div class="mt-2">
            <InputText v-model="passwordrepeat" type="passwordrepeat" :error="errors['passwordrepeat']"></InputText>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            SignUp
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already a member?

        {{ ' ' }}

        <RouterLink
          :to="{ name: 'Login' }"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Login</RouterLink
        >
      </p>
    </div>
  </div>
</template>
