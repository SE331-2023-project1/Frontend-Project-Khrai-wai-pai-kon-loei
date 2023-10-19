import { defineStore } from 'pinia'
import { type Student, type Teacher } from '@/type';

export const useTeacherStore = defineStore('teacher', {
    state: () => ({
        teacher: null as Teacher | null
    }),
    actions: {
        setTeacher(teacher: Teacher){
            this.teacher = teacher
        },
        getAllTeacher() {
            return this.teacher;
        },
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
