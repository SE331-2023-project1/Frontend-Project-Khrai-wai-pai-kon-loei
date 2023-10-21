<template>
  <div class="container">
    <div class="form-container">
      <h1 class="text-center pb-4 font-semibold text-xl text-gray-600">Create New Announcement</h1>
      <form>
        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
            <div>
              <label for="title">Title</label>
              <InputText type="text" v-model="title" :error="errors['title']" placeholder="Title..."></InputText>
            </div>

            <div>
              <label for="content">Announcement Detail</label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-[#42b883] mt-1 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#42b883] sm:text-sm sm:leading-6"
                placeholder="Write your text here..."
              ></textarea>
            </div>

            <div>
              <label for="file-upload">Insert Image</label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-600" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-gray-600 hover:text-[#42b883] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#42b883]">
                      <span class="">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only">
                    </label>
                    <p class="pl-1 text-gray-600">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <div class="text-right mt-6">
              <button class="bg-[#42b883] hover:bg-[#27a26f] text-white font-bold py-2 px-4 rounded" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  width: 100%;
  max-width: 600px; /* Adjust the maximum width as needed */
  padding: 20px;
}
</style>

<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const validationSchema = yup.object({
  title: yup.string().required('Please fill out this field')
})

const { errors, handleSubmit } = useForm({
  validationSchema,

  initialValues: {
    title: '',
  }
})

const { value: title } = useField<string>('title')

const onSubmit = handleSubmit((values) => {
  console.log('title: ' + values.title)
})
</script>
