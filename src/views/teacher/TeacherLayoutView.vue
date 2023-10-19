<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { type Teacher } from "@/type";
import TeacherService from "@/services/TeacherService";
import { useCommentsStore } from "@/stores/comment";
import { onBeforeRouteLeave } from "vue-router";
import { useRouter } from "vue-router";
import { useTeacherStore } from '@/stores/teacher';

const teacherStore = useTeacherStore()

const router = useRouter()

const commentsStore = useCommentsStore();

const teacherComments = ref<{ [teacherID: string]: string[] }>({});

const props = defineProps({
  teacherID: String,
});

const teacher = ref<Teacher | null>(null);


console.log(props)
onMounted(async () => {

  // const studentResponse = await StudentService.getStudentById(props.studentid);
  teacher.value = useTeacherStore().getAllTeacher()
  console.log(useTeacherStore().getAllTeacher())
  // No need to call loadComments();
});


</script>

<template>
  <main class="container">
    <!-- Student information -->
    <div v-if="teacher">
      <span class=" block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://shorturl.at/bmCE2')]">Teacher information</span>
      <div class="bg-white p-6 rounded-b-lg shadow-md space-y-4">
        <div class="flex items-center space-x-8">
          <img
            class="w-24 h-24 object-cover rounded-full shadow-lg"
            :src="teacher.profileimage"/>
          <div>
          <div class="grid grid-cols-1 gap-1 pt-5 pb-1.5 sm:grid-cols-3 sm:gap-4">
            <dt class="text-xl font-semibold">Name</dt>
            <h1 class="text-lg">
              {{ teacher.name }} {{ teacher.surname }}
            </h1>
          </div>

          <div class="grid grid-cols-1 gap-1 py-1.5  sm:grid-cols-3 sm:gap-4">
            <dt class="text-xl font-semibold">ID</dt>
            <h1 class="text-lg">{{ teacher.teacherID }}</h1>
          </div>

          </div>
        </div>

          
        <!-- Comments section -->
        <!-- <div class="border-t border-gray-300 pt-4">
          <h2 class="text-lg font-semibold">Comment</h2>
          <p class="mb-2">{{ student.comment }}</p>

          <div class="mt-4">
            <div
              v-for="(comment, index) in comments"
              :key="index"
              class="bg-gray-100 p-2 rounded-lg mb-2 flex justify-between items-center"
            >
              <span>{{ comment }}</span>
              <button @click="deleteComment(index)" class="text-red-500">
                Delete
              </button>
            </div>
          </div>

          <div class="comment-box mt-4">
            <textarea
              v-model="newComment"
              placeholder="Write a comment"
              class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
            <button
              @click="submitComment"
              class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div> -->
      </div>
    </div>


  </main>
</template>
