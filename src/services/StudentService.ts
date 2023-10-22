import axios from 'axios'
import type { Axios, AxiosInstance, AxiosResponse } from 'axios'
import type { Student } from '@/type'
import type { Teacher } from '@/type'
import apiClient from './AxiosClient'

// const apiClient: AxiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer '+ localStorage.getItem('access_token')
//   }
// })

export default {
  // getStudents(): Promise<AxiosResponse<Student[]>> {
  //   // perPage is limit
  //   // page is number of pages
  //   return apiClient.get<Student[]>('students')
  // },
  getStudentById(studentid : string) : Promise<AxiosResponse<Student>>{
    return apiClient.get<Student>('students/'+ '?studentid='+studentid.toString())
  },
  
  getTeacherByTeacherID(teacherID: string): Promise<AxiosResponse<Teacher>> {
    return apiClient.get<Teacher>('teachers/' + '?teacherID=' + teacherID);
  },
  // New method to fetch teacher using teacherID from a student
  getTeacherByStudent(student: Student): Promise<AxiosResponse<Teacher>> {
    return this.getTeacherByTeacherID(student.teacherID); // Assuming student.teacherID holds the teacher's ID
  },
  getStudents(perPage: number, page: number): Promise<AxiosResponse<Student[]>> {
    return apiClient.get<Student[]>('/students?_limit=' + perPage + '&_page=' + page)
  },
  
}