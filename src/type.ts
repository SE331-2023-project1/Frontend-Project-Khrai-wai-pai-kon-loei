export interface Student {
  studentid: number;
  name: string;
  surname: string;
  teacherID: number;
  id: number;
  profileimage: string;
  department: string;
  teacher: {
    id: number;
    images: string[]; // Replace with the actual type
    department: string;
  };
  user: {
    id: number;
    parentId: number;
    firstname: string;
    lastname: string;
  };
}

export interface Teacher {
  teacherID: number;
  name: string;
  surname: string;
  profileimage: string;
  id: number;
  images: [];
  department: string;
  students: {
    id: number;
    images: [];
    department: string;
  };
  user: {
    id: number;
    parentId: number;
    firstname: string;
    lastname: string;
  };
}

export interface Contributor {
  name: string;
  surname: string;
  studentId: string;
  profileimage: string;
}

export interface AnnouncementItem {
  id: number;
  title: string;
  content: string;
  images: string[];
}
