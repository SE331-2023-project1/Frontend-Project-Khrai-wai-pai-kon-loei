<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import { onMounted } from "vue";
import TeacherService from "@/services/TeacherService";
import { useTeacherAllStore } from "@/stores/all_teacher";
import StudentService from "@/services/StudentService";
import { useStudentAllStore } from "@/stores/all_student";
import { useMessageStore } from "./stores/message";
import { storeToRefs } from "pinia";

const store = useMessageStore();
const { message } = storeToRefs(store);
const studentStore_all = useStudentAllStore();
const teacherStoreAll = useTeacherAllStore();

onMounted(async () => {
  try {
    const response = await TeacherService.getTeachers();
    teacherStoreAll.setTeacherArray(response.data);
  } catch (error) {
    console.error(error);
  }
});

// onMounted(async () => {
//   try {
//     const response = await StudentService.getStudents();console.log('k',response);
//     studentStore_all.setStudentArray(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// });
</script>

<template>
  <header>
    <div id="flashMessage" v-if="message">
      <div
        role="alert"
        class="rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
      >
        <div class="flex items-start gap-4">
          <span class="text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          <div class="flex-1">
            <strong class="block font-medium text-gray-900"> Changes saved </strong>

            <p class="mt-1 text-sm text-gray-700">
              Your changes have been saved.
            </p>
          </div>

          <button class="text-gray-500 transition hover:text-gray-600">
            <span class="sr-only">Dismiss popup</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="app">
      <Sidebar />
      <RouterView />
    </div>
  </header>
</template>
<!-- 
<template>
  <header>
    <div id="flashMessage" v-if="message">
      <h4>{{ message }}</h4>
    </div>
    <div class="app">
      <Sidebar />
      <RouterView />
    </div>
  </header>
</template> -->

<!-- <template>
  <header>
    <div class="app">
     <Sidebar/>
      <router-view/> 
    </div>
  </header>
  
</template> -->

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}

body {
  background: rgb(197, 135, 210);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.1rem;
}

nav a:first-of-type {
  border: 0;
}

#flashMessage {
  animation: redfade 3s ease-in-out;
}

@keyframes redfade {
  from {
    background: rgb(255, 255, 255);
  }
  to {
    background: transparent;
  }
}
</style>
