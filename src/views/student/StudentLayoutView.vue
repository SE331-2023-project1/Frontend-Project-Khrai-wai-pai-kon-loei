<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { type Student } from "@/type";
import { type Teacher } from "@/type";
import { useCommentsStore } from "@/stores/comment";
import { onBeforeRouteLeave } from "vue-router";
import { useRouter } from "vue-router";
import { useStudentStore } from '@/stores/student';
import { useStudentAllStore } from '@/stores/all_student'

const studentStore = useStudentStore()

const router = useRouter()

const commentsStore = useCommentsStore();

const studentComments = ref<{ [studentId: string]: string[] }>({});

const props = defineProps({
  studentid: String,
  teacherID: String,
});

const student = ref<Student | null>(null);
const teacher = ref<Teacher | null | undefined>(null);

const comments = computed(() => {
  if (student.value) {
    return commentsStore.getComments(student.value.studentid);
  }
  return [];
});
const newComment = ref("");


console.log(props)
onMounted(async () => {

  student.value = useStudentStore().getAllStudent()

  const studentvalue = student.value
  if (studentvalue) {
    teacher.value = useStudentAllStore().getTeacherInStudent(studentvalue.studentid);
  }


});

function submitComment() {
  if (newComment.value.trim() !== "") {
    const teststudent = student.value
    if (teststudent) {
      commentsStore.addComment(teststudent.studentid, newComment.value);
    }
    newComment.value = "";
  }
}

</script>

<template>
  <main class="container">
    <!-- Student information -->
    <div v-if="student">
      <span
        class=" block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/2ce24ehd')]">Student
        information</span>
      <div style="background-color: #fff9fd;">
        <div class="p-6 rounded-lg shadow-md space-y-4">
          <!-- <div class="flex items-center space-x-4 m-5 mt-2"> -->
          <div class="-my-3 divide-y divide-gray-100 text-sm m-5 mt-2">
            <img class="w-24 h-24 object-cover rounded-full shadow-lg" :src="student.profileimage" />
            <div>
              <div class="grid grid-cols-1 gap-1 pt-5 pb-1.5 sm:grid-cols-3 sm:gap-4">
                <dt class="text-xl font-semibold">Name</dt>
                <h1 class="text-lg">
                  {{ student.name }} {{ student.surname }}
                </h1>
              </div>

              <div class="grid grid-cols-1 gap-1 py-1.5  sm:grid-cols-3 sm:gap-4">
                <dt class="text-xl font-semibold">Student ID</dt>
                <h1 class="text-lg">{{ student.studentid }}</h1>
              </div>

              <div class="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                <dt class="text-xl font-semibold">Course</dt>
                <h1 class="text-lg">{{ student.courselist }}</h1>
              </div>

              <div class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-3 sm:gap-4">
                <dt class="text-xl font-semibold">Teacher</dt>
                <h1 class="text-lg">{{ student.teacherID }}</h1>
              </div>
            </div>
          </div>

          <!-- Teacher information -->

          <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h1 class="text-xl">Teacher :</h1>
            <div class="flex items-center space-x-4">
              <img class="w-24 h-24 object-cover rounded-full shadow-lg" :src="teacher?.profileimage" />
              <div>
                <h1 class="text-2xl font-semibold">
                  {{ teacher?.name }} {{ teacher?.surname }}
                </h1>
                <h1 class="text-lg">{{ teacher?.courselist }}</h1>
                <h1 class="text-lg">{{ teacher?.teacherID }}</h1>
              </div>
            </div>
          </div>

          <!-- Comments section
        <div class="border-t border-gray-300 pt-4">
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
              <textarea v-model="newComment" placeholder="Write a comment"
                class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"></textarea>
              <button @click="submitComment"
                class="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
