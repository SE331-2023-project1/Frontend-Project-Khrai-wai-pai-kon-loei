<script setup lang="ts">
import type { Student } from '@/type'
import { ref } from 'vue'
import { useStudentAllStore } from '@/stores/all_student'

const store = useStudentAllStore()
const student = ref<Student | null>(null)

const props = defineProps({
  id: String
})
// eslint-disable-next-line vue/no-setup-props-destructure
store
  .getStudentById(props.id!)
  .then((result) => {
    if (result) {
      student.value = result
    } else {
      console.warn(props.id)
    }
  })
  .catch((error) => {
    console.error(error)
  })
</script>

<template>
  <div>
    <div v-if="student">
      <RouterView :oneStudent="student"></RouterView>
    </div>
  </div>
</template>
