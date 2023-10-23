import axios from 'axios'
import type { Axios, AxiosInstance, AxiosResponse } from 'axios'
import type { Student } from '@/type'
import type { Teacher } from '@/type'
import apiClient from './AxiosClient'
import type { User } from '@/type'

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
    return apiClient.get<Student>('students/'+studentid.toString())
  },
  
  getTeacherById(teacherID : string) : Promise<AxiosResponse<Teacher>>{
    return apiClient.get<Teacher>('teachers/'+teacherID.toString())
  },
  // New method to fetch teacher using teacherID from a student
  getTeacherByStudent(student: Student): Promise<AxiosResponse<Teacher>> {
    return this.getTeacherById(student.teacherID); // Assuming student.teacherID holds the teacher's ID
  },
  getStudents(perPage: number, page: number): Promise<AxiosResponse<Student[]>> {
    return apiClient.get<Student[]>('/students?_limit=' + perPage + '&_page=' + page)
  },
  getAllStudents(): Promise<AxiosResponse<Student[]>> {
    return apiClient.get<Student[]>('/students')
  },

  getSearchUser(keyword: string): Promise<AxiosResponse<User[]>>{
    return apiClient.get<User[]>('/api/v1/auth/searchUser?keyword=' + keyword)
  },

  searchUser(keyword: string): Promise<AxiosResponse<User[]>> {
    return apiClient.get<User[]>('/api/v1/auth/searchUser', {
      params: {
        keyword: keyword,
      },
    });
  },
}
