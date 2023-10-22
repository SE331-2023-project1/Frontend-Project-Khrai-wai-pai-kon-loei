export interface Student {
  id: number,
  images: [],
  department: string,
  teacher: {
      id: number,
      images: [],
      department: string
  },
  user: {
      id: number,
      parentId: number,
      firstname: string,
      lastname: string
  }
}

export interface Teacher {
  name: string,
  surname: string,
  teacherID: string,
  profileimage: string,
  courselist: string[]
}

export interface Contributor {
  name: string,
  surname: string,
  studentId: string,
  profileimage: string,
}

