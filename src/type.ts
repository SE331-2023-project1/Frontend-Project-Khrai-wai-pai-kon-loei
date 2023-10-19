export interface Student {
  name: string,
  surname: string,
  studentid: string,
  profileimage: string,
  courselist: string[],
  teacherID: string,
  comment: []
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

