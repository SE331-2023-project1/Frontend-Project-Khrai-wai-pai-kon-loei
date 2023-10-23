<template>
  <main class="container">
    <!-- Student information -->
    <div v-if="student">
      <span class="block text-center rounded-t-lg p-3 font-semibold text-lg" style="background-color: #e8d3f4;">
      Student Profile
    </span>

    <!-- Student information -->
    <div style="background-color: #fff9fd;">
      <div class="p-6 rounded-lg shadow-md space-y-4">
        <div class="flex items-center space-x-4 m-5 mt-2">
          <div class="px-5">
            <img
              class="w-24 h-24 object-cover rounded-full shadow-lg"
              :src="student.profileimage"
            />
          </div>
          <div>
            <div class="grid grid-cols-1 gap-1 pt-5 pb-1.5 sm:grid-cols-2 sm:gap-4">
              <dt class="text-xl font-semibold px-8">Name</dt>
              <h1 class="text-lg">
                  {{ student.user.firstname }} {{ student.user.lastname }}
                </h1>
            </div>

            <div class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-2 sm:gap-4">
              <dt class="text-xl font-semibold px-8">Student ID</dt>
              <h1 class="text-lg">{{ student.id }}</h1>
            </div>
          </div>
        </div>

        <!-- Teacher information -->
        <h1 class="text-xl font-semibold" style="color: #c78ee8;">Student's Advisor</h1>
        <div class="p-5 rounded-lg shadow-md space-y-4" 
         :style="{ backgroundImage: 'url(https://tinyurl.com/bdd2b8t5)', backgroundSize: 'cover' }">
          <div class="flex items-center space-x-8 ">
            <img class="w-24 h-24 object-cover rounded-full shadow-lg" :src="teacher?.profileimage" />
            <div>
              <h1 class="text-xl font-bold py-1"> Name :
                {{ teacher.user.firstname }} {{ teacher.user.lastname }}
              </h1>

              <h1 class="text-lg py-1">Department : {{ teacher?.department }}</h1>
              <h1 class="text-lg py-1">Teacher ID : {{ student.teacher?.id }}</h1>
            </div>
          </div>
        </div>

        <!-- Comments section -->
        <div class="border-t border-gray-300 pt-4">
          <h2 class="text-lg font-semibold">All Comments</h2>
          <div v-for="(comment, index) in comments" :key="index">
            <p>{{ comment }}</p>
          </div>
        </div>

        <!-- Add Comment section -->
        <div class="border-t border-gray-300 pt-4">
          <h2 class="text-lg font-semibold">Add Comment</h2>
          <div class="comment-box mt-4">
            <textarea
              v-model="newComment"
              placeholder="Write a comment"
              class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
            <button
              @click="submitComment"
              class="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>
  </main>
</template>



<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import StudentService from "@/services/StudentService";
import type { Student } from "@/type";
import type { Teacher } from "@/type";
import { useCommentsStore } from "@/stores/comment";

const student = ref(null as Student | null);
const teacher = ref(null as Teacher | null);
const route = useRoute();

const commentsStore = useCommentsStore();

// Fetch student data based on the route parameter
const getStudent = async () => {
  try {
    const studentid = route.params.studentid;
    const studentIdAsString = Array.isArray(studentid) ? studentid[0] : studentid;

    if (studentIdAsString) {
      const response = await StudentService.getStudentById(studentIdAsString);
      student.value = response.data;

      // Now, fetch the teacher data based on the student
      if (student.value) {
        const teacherId = student.value.teacher.id; // Assuming that teacher.id is the correct identifier
        const teacherResponse = await StudentService.getTeacherById(teacherId);
        teacher.value = teacherResponse.data;
      }
    }
  } catch (error) {
    console.error("Error fetching student data:", error);
  }
};

const props = defineProps({
  studentid: String,
  teacherID: String,
});

const comments = computed(() => {
  if (student.value) {
    return commentsStore.getComments(student.value.id);
  }
  return [];
});
const newComment = ref("");

function submitComment() {
  if (newComment.value.trim() !== "") {
    const studentId = student.value.id;
    commentsStore.addComment(studentId, newComment.value);
    newComment.value = "";
  }
}

onMounted(() => {
  getStudent(); // Fetch student data when the component is mounted
});
</script>
