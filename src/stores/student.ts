import { defineStore } from 'pinia'
import { type Student, type Teacher } from '@/type';
import axios from 'axios';

export const useStudentStore = defineStore('student', {
    state: () => ({
        student: null as Student | null
    }),
    actions: {
        setStudent(student: Student){
            this.student = student
        },
        getAllStudent() {
            return this.student;
        },
        // fetchdata(){
        //    axios.get("http://localhost:8080/api/v1/auth/students" , {
        //     headers:{
        //         Authorization: Bearer ${token},
        //     },
        //     })
        //     .then((response) => {
        //         this.data = response.data;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        // }
    }
})





// import { defineStore } from 'pinia';
// import { Student, Teacher } from '@/type';
// import { injectStudentService } from '@/services/StudentService';
// import { injectTeacherService } from '@/services/TeacherService';

// export const useStudentsStore = defineStore('students', {
//   state: () => ({
//     students: [] as Student[],
//     teachers: [] as Teacher[],
//   }),
//   actions: {
//     async fetchStudentsAndTeachers() {
//       try {
//         const studentService = injectStudentService();
//         const teacherService = injectTeacherService();

//         const studentsResponse = await studentService.getAllStudents();
//         const teachersResponse = await teacherService.getAllTeachers();

//         this.students = studentsResponse.data;
//         this.teachers = teachersResponse.data;
//       } catch (error) {
//         console.error(error);
//       }
//     },
//   },
// });
