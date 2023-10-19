import { defineStore } from 'pinia'
import type { Student } from '@/type';
import { useTeacherAllStore } from './all_teacher';
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
    }
})