<template>
    <main class="container">
      <!-- Student information -->
      <div v-if="teacher">
        <span
          class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/2ce24ehd')]"
          >Teacher information</span
        >
        <div style="background-color: #fff9fd">
          <div class="p-6 rounded-lg shadow-md space-y-4">
            <!-- <div class="flex items-center space-x-4 m-5 mt-2"> -->
            <div class="-my-3 divide-y divide-gray-100 text-sm m-5 mt-2">
              <img
                class="w-24 h-24 object-cover rounded-full shadow-lg"
                :src="teacher.profileimage"
              />
              <div>
                <div
                  class="grid grid-cols-1 gap-1 pt-5 pb-1.5 sm:grid-cols-3 sm:gap-4"
                >
                  <dt class="text-xl font-semibold">Name</dt>
                  <h1 class="text-lg">
                    {{ teacher.user.firstname }} {{ teacher.user.lastname }}
                  </h1>
                </div>
  
                <div
                  class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-3 sm:gap-4"
                >
                  <dt class="text-xl font-semibold">Teacher ID</dt>
                  <h1 class="text-lg">{{ teacher.id }}</h1>
                </div>
  
                <!-- <div class="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                    <dt class="text-xl font-semibold">Course</dt>
                    <h1 class="text-lg">{{ student.courselist }}</h1>
                  </div> -->
  
                <!-- <div
                  class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-3 sm:gap-4"
                >
                  <dt class="text-xl font-semibold">Teacher</dt>
                  <h1 class="text-lg">
                    {{ student.teacher ? student.teacher.id.toString() : "N/A" }}
                  </h1>
                </div> -->
              </div>
            </div>
  
            <!-- Teacher information -->
  
            <!-- <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
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
              </div> -->
  
            <!-- Comments section -->
            
  
            <!-- Add Comment section -->

          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from "vue";
  import { useRoute } from "vue-router";
  import TeacherService from "@/services/TeacherService";
  import type { Teacher } from "@/type";
  import { useCommentsStore } from "@/stores/comment";
  
  const teacher = ref(null as Teacher | null);
  const route = useRoute();
  
  const commentsStore = useCommentsStore();
  const studentComments = ref<{ [studentid: string]: string[] }>({});
  
  // Fetch student data based on the route parameter
  const getTeacher = async () => {
    try {
      const teacherID = route.params.teacherID;
      // Convert to string if it's an array
      const teacherIdAsString = Array.isArray(teacherID)
        ? teacherID[0]
        : teacherID;
  
      if (teacherIdAsString) {
        const response = await TeacherService.getTeacherById(teacherIdAsString);
        teacher.value = response.data;
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };
  
//   const props = defineProps({
//     studentid: String,
//     teacherID: String,
//   });
  
//   const comments = computed(() => {
//     if (student.value) {
//       return commentsStore.getComments(student.value.studentid);
//     }
//     return [];
//   });
//   const newComment = ref("");
  
//   function submitComment() {
//     if (newComment.value.trim() !== "") {
//       const teststudent = student.value;
//       if (teststudent) {
//         commentsStore.addComment(teststudent.studentid, newComment.value);
//       }
//       newComment.value = "";
//     }
//   }
  onMounted(() => {
    getTeacher(); // Fetch student data when the component is mounted
  });
  </script>
  