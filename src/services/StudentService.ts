import axios from 'axios'
import type { Axios, AxiosInstance, AxiosResponse } from 'axios'
import type { Student } from '@/type'
import type { Teacher } from '@/type'


const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_STUDENT,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getStudents(): Promise<AxiosResponse<Student[]>> {
    // perPage is limit
    // page is number of pages
    return apiClient.get<Student[]>('students')
  },
  getStudentById(studentid : string) : Promise<AxiosResponse<Student>>{
    return apiClient.get<Student>('students/'+ '?studentid='+studentid.toString())
  },
  
  getTeacherByTeacherID(teacherID: string): Promise<AxiosResponse<Teacher>> {
    return apiClient.get<Teacher>('teachers/' + '?teacherID=' + teacherID);
  },
  // New method to fetch teacher using teacherID from a student
  getTeacherByStudent(student: Student): Promise<AxiosResponse<Teacher>> {
    return this.getTeacherByTeacherID(student.teacherID); // Assuming student.teacherID holds the teacher's ID
  }
  
}