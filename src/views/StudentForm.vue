<script setup lang="ts">
import { ref, computed, type Ref, onMounted } from 'vue'
import type { Student, Teacher } from '@/type'
import { storeToRefs } from 'pinia'
import { useStudentAllStore } from '@/stores/all_student'
import router from '@/router';
import { useTeacherAllStore } from "@/stores/all_teacher";
import { useMessageStore } from '@/stores/message'

const store = useMessageStore()
const teacherStoreAll = useTeacherAllStore();
const { teacher_all } = storeToRefs<typeof teacherStoreAll>(teacherStoreAll)

const newTeacherName = ref("");
const newTeacherSurname = ref("");
const newTeacherImage = ref("");
// const newTeacherPosition = ref("");
// const newTeacherEmail = ref("");
// const newTeacherEducation = ref("Bachelor's degree");


const studentStore_all = useStudentAllStore()
const { student_all } = storeToRefs(studentStore_all)
const newStudentName = ref('')
const newStudentSurname = ref('')
const newStudentImage = ref('')
const newStudentID = ref('')
const newStudentTeacher = ref()
const newStudentCourselist = ref([])
const selectedForm = ref('student')

const isFormValidTeacher = computed(
  () =>
    newTeacherName.value.trim() !== "" &&
    newTeacherSurname.value.trim() !== "" &&
    newTeacherImage.value.trim() !== ""
);

const addTeacher = () => {
  if (isFormValidTeacher.value) {
    const newTeacher:Teacher = {
    teacherID: teacher_all.value.length + 1 + "",
    name: newTeacherName.value,
    surname: newTeacherSurname.value,
    profileimage: newTeacherImage.value,
    courselist: []
};
    store.updateMessage('New teacher has been added')
    setTimeout(() => {
      store.resetMessage()
    }, 2000)

    const newteacher = newTeacher
    if (newteacher) {
      teacherStoreAll.pushNewTeacher(newteacher);
    }
    newTeacherName.value = "";
    newTeacherSurname.value = "";
    newTeacherImage.value = "";
  }
};




const isFormValid = computed(
  () =>
    newStudentName.value.trim() !== '' &&
    newStudentSurname.value.trim() !== '' &&
    newStudentImage.value.trim() !== '' 
)

const addStudent = () => {
  if (isFormValid.value) {
    const newStudent: Student = {
      studentid: student_all.value.length + 1 + "",
      name: newStudentName.value,
      surname: newStudentSurname.value,
      profileimage: newStudentImage.value,
      teacherID: newStudentTeacher.value,
      courselist: newStudentCourselist.value,
      comment: [],
    }
    store.updateMessage('New student has been added')
    setTimeout(() => {
      store.resetMessage()
    }, 2000)


    studentStore_all.pushNewStudent(newStudent)

    newStudentName.value = ''
    newStudentSurname.value = ''
    newStudentImage.value = ''
    newStudentTeacher.value = ''
    newStudentCourselist.value = []
  }
}
</script>
<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Noto+Sans+SC:wght@700&family=Oxygen&family=Plus+Jakarta+Sans:wght@300&family=Racing+Sans+One&family=Raleway:wght@100;200;700&family=Roboto+Slab:wght@500;700&family=Rowdies:wght@300&family=Rubik:wght@500&display=swap"
    rel="stylesheet">
  <div class="form">
    <div>
      <select class="from-selection" v-model="selectedForm" id="formSelect">
        <option value="student">Student Form</option>
        <option value="teacher">Teacher Form</option>
      </select>
    </div>
      <div v-if="selectedForm === 'student'" class="form-section">
        <h1 class="font-bold text-3xl mb-4">Add new student form</h1>
        <form @submit.prevent="addStudent">
          <input v-model="newStudentName" placeholder="Student Name" />
          <input v-model="newStudentSurname" placeholder="Student Surname" />
          <input v-model="newStudentID" placeholder="Student ID" />
          <input v-model="newStudentImage" placeholder="Student Image URL" />
          <input v-model="newStudentTeacher" type="string" placeholder="Teacher ID" />
          <input v-model="newStudentCourselist" placeholder="Student course list" />
          <button class="button-19" id="button-19-student" type="submit" :disabled="!isFormValid">Add Student</button>
        </form>
      </div>
      <div v-if="selectedForm === 'teacher'" class="form-section">
        <div class="from">
          <h1 class="font-bold text-3xl mb-4">Add new teacher form</h1>
      <form @submit.prevent="addTeacher">
        <input class="teachername" v-model="newTeacherName" placeholder="Teacher Name" />
        <input class="teachersurname" v-model="newTeacherSurname" placeholder="Teacher Surname" />
        <input class="teacherlink" v-model="newTeacherImage" placeholder="Teacher Image URL" />
        <button class="button-19" id="button-19-teacher" type="submit" :disabled="!isFormValidTeacher">Add Teacher</button>
      </form>
      </div>
    </div>
  </div>
</template>


  <style scoped>
    .form {
      font-family: 'Roboto', sans-serif;
      padding: 20px;
    }
    
    #formSelect {
      margin: 10px 0;
      padding: 8px;
      font-size: 16px;
      border-radius:20px ;
    
    }
    
    .form-section {
      margin-top: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      /* background-color: #9dcdff; */
      background-image: url(https://tinyurl.com/52pvsnnd);
      border-radius: 10px;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
      color:#5f5f5f;
      
    }
    
    input {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    #button-19-student{
      margin: auto;
      display: block;
      margin-top: 20px;
    }

    #button-19-teacher{
      margin: auto;
      display: block;
      margin-top: 20px;
    }
      .button-19 {
        appearance: button;
      background-color: #b062b7;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-family: din-round,sans-serif;
      font-size: 15px;
      margin-left: 20px;
      margin-top: 20px;
      font-weight: 700;
      letter-spacing: .8px;
      line-height: 20px;
      outline: none;
      overflow: visible;
      padding: 13px 16px;
      text-align: center;
      text-transform: uppercase;
      touch-action: manipulation;
      transform: translateZ(0);
      transition: filter .2s;
      user-select: none;
      -webkit-user-select: none;
      vertical-align: middle;
      white-space: nowrap;
      width: 40%;
      transition: transform 0.2s, rotate 0.2s;
    }
    
    .button-19:after {
      background-clip: padding-box;
      background-color: #cf6ed7;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      bottom: -4px;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    
    }
    
    .button-19:main,
    .button-19:focus {
      outline: 2px solid #4F46E5;
      user-select: auto;
      outline-offset: 4px
    }
    
    .button-19:hover:not(:disabled) {
      filter: brightness(1.1);
      -webkit-filter: brightness(1.1);
      transform: rotate(2deg) scale(1.1);
    }
    
    .button-19:disabled {
      cursor: auto;
    }
    h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    
    @media (min-width: 1024px) {
      .form {
        margin-top: 100px;
      }
      input{
        width: 100%;
      }
      #button-19-student{
        margin-left: 310px;
      }
    }
    
  </style>