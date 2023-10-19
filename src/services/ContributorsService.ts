import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { Contributor } from '@/type'


const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_STUDENT,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getContributors(perPage: number, page: number): Promise<AxiosResponse<Contributor[]>> {
    // perPage is limit
    // page is number of pages
    return apiClient.get<Contributor[]>('/contributors?_limit=' + perPage + '&_page=' + page)
  },
  getContributorsById(id : number) : Promise<AxiosResponse<Contributor>>{
    return apiClient.get<Contributor>('contributors/'+ '?contributorsid='+id.toString())
  }
}