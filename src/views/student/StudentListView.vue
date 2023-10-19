<script setup lang="ts">
import StudentCard from '../../components/StudentCard.vue'
import type { Student } from '@/type'
import { ref, computed, type Ref, onMounted } from 'vue'
import type { AxiosResponse } from 'axios';
import { useRouter } from 'vue-router'
import NProgress from 'nprogress'
import { onBeforeRouteLeave } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useStudentAllStore } from '@/stores/all_student'
import isFormValid from '@/views/StudentForm.vue'
import addStudent from '@/views/StudentForm.vue'
import StudentService from '@/services/StudentService'
import { onBeforeRouteUpdate } from 'vue-router'


const studentStore_all = useStudentAllStore()
const { student_all } = storeToRefs(studentStore_all)
const students: Ref<Student[]> = ref([])
const totalStudent = ref<number>(0)
const router = useRouter
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})


const pageSize = 6;

const displayedStudents: Ref<Student[]> = computed(() => {
  const startIndex = (props.page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, student_all.value.length);
  return student_all.value.slice(startIndex, endIndex);
});

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(student_all.value.length / pageSize);
  return props.page < totalPages;
});

onBeforeRouteLeave((to, from, next) => {
  if (isFormValid.value) {
    new addStudent()
  }
  next()
});
NProgress
</script>


<template>
  <main class="events">
      <div class="container">
          <StudentCard
            class="student"
            v-for="student in displayedStudents"
            :key="student.studentid"
            :student="student"
          ></StudentCard>
      </div>
      <div class="flex"></div>
      <div class="pagination flex justify-between items-center mt-8">
        <RouterLink
          :to="{ name: 'students', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          class="btn btn-blue group relative overflow-hidden"
        >
         
          <span class="absolute -start-full transition-all group-hover:start-4">
            <svg
              class="h-5 w-5 rtl:rotate-180"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </span>
          <span class="text-sm font-bold transition-all group-hover:ms-8">
            Prev Page
          </span>
        </RouterLink>
    
  <RouterLink
          :to="{ name: 'students', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          class="btn btn-blue group relative overflow-hidden"
        >
         
          <span class="absolute -end-full transition-all group-hover:end-4">
            <svg
              class="h-5 w-5 rtl:rotate-180"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <span class="text-sm font-bold transition-all group-hover:me-8">
            Next Page
          </span>
        </RouterLink>
  
  </div>
    </main>
  </template>









<!-- <template>
  <main class="events">
    <div class="container">
      <StudentCard
        v-for="student in students"
        :key="student.studentid"
        :student="student"
      ></StudentCard>
    </div>
    <div class="flex"></div>
    <div class="pagination flex justify-between items-center mt-8">
      <div>
        <RouterLink
          :to="{ name: 'students', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          class="btn btn-blue group relative overflow-hidden"
        >
         
          <span class="absolute -start-full transition-all group-hover:start-4">
            <svg
              class="h-5 w-5 rtl:rotate-180"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </span>
          <span class="text-sm font-bold transition-all group-hover:ms-8">
            Prev Page
          </span>
        </RouterLink>
      </div>

      <div>
        <RouterLink
          :to="{ name: 'students', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          class="btn btn-blue group relative overflow-hidden"
        >
         
          <span class="absolute -end-full transition-all group-hover:end-4">
            <svg
              class="h-5 w-5 rtl:rotate-180"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <span class="text-sm font-bold transition-all group-hover:me-8">
            Next Page
          </span>
        </RouterLink>
      </div>
    </div>
  </main>
</template> -->

<style scoped>

#nprogress .bar {
background: rgb(34, 221, 90) !important;
}
.flex {
  @apply flex-1;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 340px;
  align-items: baseline;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
.pageSize {
  padding: 0 0 20px 0;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
.container {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 3rem;
}
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 1rem;
  text-align: center;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn-blue {
  background-color: rgb(251, 221, 239);
  color: white;
}

.btn-blue:hover {
  background-color: #9370db;
}

@media (max-width: 1149px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 859px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
