<template>
  <main class="events">
    <!-- Search bar -->
    <div class="search-bar-container">
      <form class="search-bar">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative flex items-center">
          <input
            v-model="searchKeyword"
            @input="searchUsers"
            placeholder="Search by keyword"
            class="w-full p-3 text-gray-700 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 border border-gray-300"
          />
          <span v-for="user in searchResults" :key="user.id">
            {{ user.firstname }} {{ user.lastname }}
          </span>

          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H3"
          />
        </div>
      </form>
    </div>

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
        v-if="page !== 1"
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

<script setup lang="ts">
import StudentCard from "../../components/StudentCard.vue";
import type { Student, User } from "@/type";
import { ref, computed, defineProps, onMounted, type Ref } from "vue";
import { useRouter } from "vue-router";
import NProgress from "nprogress";
import StudentService from "@/services/StudentService";

const searchKeyword = ref("");
const searchResults = ref<User[]>([]);

const searchUsers = async () => {
  try {
    const response = await StudentService.searchUser(searchKeyword.value);
    searchResults.value = response.data;
  } catch (error) {
    console.error("Error searching users:", error);
  }
};

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});

const students: Ref<Student[]> = ref([]); // Initialize an empty array for students
const pageSize = 6;

const displayedStudents: Ref<Student[]> = computed(() => {
  const startIndex = (props.page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, students.value.length);
  return students.value.slice(startIndex, endIndex);
});

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(students.value.length / pageSize);
  return props.page < totalPages - 1;
});

onMounted(async () => {
  try {
    // Fetch your student data from the API
    // Replace this with your actual API call
    const response = await StudentService.getStudents(10, 1);
    console.log("API Response:", response.data);

    const studentsData = response.data.map((Student) => ({
      name: Student.user.firstname,
      surname: Student.user.lastname,
      studentid: Student.id,
      profileimage: "", // You can fill this in with the actual image URL
      courselist: [], // You can fill this in with the course data
      teacherID: Student.teacher ? Student.teacher.id.toString() : "N/A",
      comment: [], // You can fill this in with comment data
    }));

    students.value = studentsData;
  } catch (error) {
    console.error("API Error:", error);
  }
});
</script>

<style scoped>
.search-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  width: 100%;
}

.search-bar {
  /* Your search bar styling */
  max-width: 100%; /* Ensure it's responsive within the container */
  width: 80%;
}

.container {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 3rem;
}

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
