import { defineStore } from 'pinia'
import type { Student } from '@/type';
import { useTeacherAllStore } from './all_teacher';
import StudentService from '@/services/StudentService';
export const useStudentAllStore = defineStore('student_all', {
    state: () => ({
        student_all: [] as Student[],
    }),
    actions: {
        setStudentArray(student : Student[]){
            this.student_all=student
        },
        pushNewStudent(student_all : Student){
            this.student_all.push(student_all)
        },
        getAllStudent() {
            return this.student_all;
        },
        findStudentById(studentId: string) {
            return this.student_all.find(student => student.studentid == studentId);
        },
        getLength() {
            return this.student_all.length;
        },
        getTeacherInStudent(studentId: string) {
            const teacherStore = useTeacherAllStore();
            const student = this.student_all.find(student => student.studentid === studentId);
            if (student) {
                const teacherId = student.teacherID;
                const teacher = teacherStore.findTeacherById(teacherId); 
                return teacher;
            } else {
                return null;
            }
        },
        getStudents: (state: { students: string | any[]; }) => async (limit: number, page: number) => {
            const response = await StudentService.getStudents(limit,page)
            state.students = response.data
            const start = (page - 1) * limit
            const end = start + limit
            return state.students.slice(start, end)
        },
        getStudentById: (state: { students: any[]; }) => async (id: string) => {
            const students = await StudentService.getAllStudents()
            state.students = students.data
            const response = state.students.find((student: { id: string; }) => student.id == id)
            return new Promise<Student | null>((resolve) => {
              resolve(response || null)
            })
          },
          getStudentsLength: (state: { students: string | any[]; }) => () => {
            return state.students.length
          },
          getAllStudents: (state: { students: any; }) => () => {
            return state.students
          }
    }
})