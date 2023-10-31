import { defineStore } from 'pinia'
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import router from '@/router'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    userRole: null as string[] | null,
    studentId: null as string | null,
    teacherId: null as string | null,
  }),
  getters: {
    
  },
  actions: {
    async login(username: string, password: string) {
      const response = await apiClient.post('/api/v1/auth/authenticate', {
        username: username,
        password: password
      })
      console.log(response.data)
      this.token = response.data.access_token
      this.userRole = response.data.user_role
      this.studentId = response.data.student_id
      this.teacherId = response.data.teacher_id
      localStorage.setItem('access_token', this.token as string)
      localStorage.setItem('user_role', JSON.stringify(this.userRole))
      localStorage.setItem('student_id', this.studentId as string)
      localStorage.setItem('teacher_id', this.teacherId as string)
      return response
    },
    async studentRegister(
      username: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
    ) {
      const response = await apiClient.post('/api/v1/auth/register', {
        username: username,
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      })
      localStorage.setItem('access_token', this.token as string)
      localStorage.setItem('user_role', JSON.stringify(this.userRole))
      return response
    },
    async teacherRegister(
      username: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string
    ) {
      const response = await apiClient.post('/api/v1/auth/register/teacher', {
        username: username,
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password
      })
      return response
    },
    async updateTeacher(
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      email: string
    ) {
      const response = await apiClient.put(`/api/v1/teachers/${id}`, {
        username: username,
        firstname: firstName,
        lastname: lastName,
        email: email
      })
      return response
    },
    async updateStudent(
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      // email: string
    ) {
      const response = await apiClient.put(`/api/v1/students/${id}`, {
        username: username,
        firstname: firstName,
        lastname: lastName,
        // email: email
      })
      return response
    },
    async studentUpdateProfile(id: string, firstName: string, lastName: string) {
      const response = await apiClient.put('/updateStudent', {
        id: id,
        name: firstName,
        surname: lastName,

      })
      return response
    },
    async teacherUpdateProfile(id: string, firstName: string, lastName: string) {
      const response = await apiClient.put('/updateTeacher', {
        id: id,
        name: firstName,
        surname: lastName,
      })
      return response
    },
  
    logout() {
      console.log('logout')
      this.token = null
      this.userRole = null
      localStorage.removeItem('access_token')
      localStorage.removeItem('user_role')
    },
    reload(token: string, userRole: string[]) {
      this.token = token
      this.userRole = userRole
    },
    isLoggedIn(): boolean {
      return this.token != null || false
    },
    isAdmin(): boolean {
      return this.userRole?.includes('ROLE_ADMIN') || false
    },
    isStudent(): boolean {
      return this.userRole?.includes('ROLE_STUDENT') || false
    },
    isTeacher(): boolean {
      return this.userRole?.includes('ROLE_TEACHER') || false
    }
  }
})
