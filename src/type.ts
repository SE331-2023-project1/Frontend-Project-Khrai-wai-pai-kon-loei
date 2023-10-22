export interface Student {
[studentid: string]: any
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
    id: number,
    images: [],
    department: string,
    students: {
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

export interface Contributor {
  name: string,
  surname: string,
  studentId: string,
  profileimage: string,
}

