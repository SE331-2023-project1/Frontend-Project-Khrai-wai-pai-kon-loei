export interface Student {
  name: String,
  surname: String,
  studentid: String,
  profileimage: String,
  courselist: String[],
  teacherID: String,
  comment: String
}

export interface Teacher {
  name: String,
  surname: String,
  teacherID: String,
  profileimage: String,
  comment: String,
  courselist: String[]
}

export interface Contributor {
  name: String,
  surname: String,
  studentId: String,
  profileimage: String,
}
