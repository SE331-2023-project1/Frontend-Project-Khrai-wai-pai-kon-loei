import { createRouter, createWebHistory } from 'vue-router'
import StudentlayoutView from '@/views/student/StudentLayoutView.vue'
import StudentDetail from '@/views/student/StudentDetailView.vue'
import StudentService from '@/services/StudentService'
import { storeToRefs } from 'pinia'
import { useStudentStore } from '@/stores/student';
import { useStudentAllStore } from '@/stores/all_student';
import { ref } from 'vue'
import NProgress from 'nprogress'
import Student from "../views/student/StudentListView.vue";
import Teacher from "../views/teacher/TeacherListView.vue";
import TeacherDetail from "@/views/teacher/TeacherDetailView.vue";
import TeacherService from '@/services/TeacherService'
import { useTeacherStore } from '@/stores/teacher';
import { useTeacherAllStore } from '@/stores/all_teacher';
import Continutors from "../views/ContrinutorsListView.vue";
import NotFoundView from '@/views/NotFoundView.vue';
import NetworkErrorView from '@/views/NetworkErrorView.vue';
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Announcement from "../views/announcement/AnnouncementView.vue";
import CreateAnnouncementView from '../views/announcement/CreateAnnouncementView.vue';
import { useAuthStore } from '@/stores/auth.ts'
import TeacherRegister from "../views/TeacherForm.vue"
import Admin from "../views/Admin.vue";
import Advisor from "../views/Advisor.vue";
import ProfileView from '../views/profile/ProfileView.vue'
import ProfileTeacherView from '../views/profile/ProfileTeacherView.vue'
import Advisee from '../views/Advisee.vue';
import AdvisorProfile from '../views/profileview/AdvisorProfile.vue';
import StudentProfile from '../views/profileview/StudentProfile.vue';

// router.beforeEach(async () => {
  NProgress.start()
//   const teacherStore = useTeacherStore()
//   const studentStore = useStudentStore()
//   const authStore = useAuthStore()
//   if (teacherStore.teacher.length === 0 && authStore.userRole?.includes("ROLE_ADMIN")) {
//     await teacherStore.fetchTeachersFromDB()
//   }
//   if (studentStore.student.length === 0 && authStore.userRole?.includes("ROLE_ADMIN")) {
//     await studentStore.fetchStudentsFromDB()
//     // console.log(studentStore.students)
//   }
//   if (studentStore.student.length === 0 && authStore.userRole?.includes("ROLE_TEACHER")
//   && authStore.id != null) {
//     await studentStore.fetchStudentsByTeacher(authStore.id)
//     // console.log(studentStore.students)
//   }
//   if (studentStore.student.length === 0 && authStore.userRole?.includes("ROLE_STUDENT")
//   && authStore.id != null) {
//     await studentStore.fetchStudentById(authStore.id)
//     // console.log(studentStore.students)
//   }

//   })

// router.afterEach(() => {
    
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/student",
      name: "students",
      component: Student,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || "1"),
        pageSize: parseInt((route.query?.page as string) || "2"),
      }),
    },
    {
      path: '/form',
      name: 'form',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StudentForm.vue')
    },
    {
      path: "/teacher",
      name: "teachers",
      component: Teacher,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || "1"),
        pageSize: parseInt((route.query?.page as string) || "2"),
      }),
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    {
      path: "/Register",
      name: "Register",
      component: Register,
    },
    {
      path: "/register/teacher",
      name: "TeacherRegister",
      component: TeacherRegister,
    },
    {
      path: "/Announcement",
      name: "Announcement",
      component: Announcement,
    },
    {
      path: "/Create-Announcement",
      name: "CreateAnnouncement",
      component: CreateAnnouncementView,
    },
    {
      path: "/Admin",
      name: "Admin",
      component: Admin,
    },
    {
      path: "/Advisor",
      name: "Advisor",
      component: Advisor,
    },
    {
      path: "/Advisee",
      name: "Advisee",
      component: Advisee,
    },
    {
      path: "/",
      name: "home",
      component: Continutors,
    },
    {
      path: '/profile',
      name: 'profile-page',
      component: ProfileView
    },
    {
      path: '/profile',
      name: 'profile-teacher',
      component: ProfileTeacherView
    },
    {
      path: '/student/:studentid',
      name: 'student-detail',
      component: StudentDetail,
    },
    {
      path: '/advisors/:id',
      name: 'advisor-profile',
      component: AdvisorProfile,
    },
    {
      path: '/student-profile/:id',
      name: 'student-profile',
      component: StudentProfile,
    },
    {
      path: '/teacher/:teacherID',
      name: 'teacher-detail',
      component: TeacherDetail,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView,
      props: true
    },
  ],
});
// router.beforeEach(async (to, from, next) => {
//   NProgress.start();

//   const studentStore_all = useStudentAllStore();
//   const teacherStore_all = useTeacherAllStore();

//   if (studentStore_all.getLength() === 0) {
//     try {
//       const response = await StudentService.getStudents();
//       studentStore_all.setStudentArray(response.data);
//       next();
//     } catch (error) {
//       console.error("Error fetching students:", error);
//       next({ name: 'network-error', params: { message: 'Failed to fetch students.' }}); // Redirect to an error page if you want
//     }
//   }
//   if (teacherStore_all.getLength() === 0) {
//     try {
//       const response = await TeacherService.getTeachers();
//       teacherStore_all.setTeacherArray(response.data);
//       next();
//     } catch (error) {
//       console.error("Error fetching teachers:", error);
//       next({ name: 'network-error', params: { message: 'Failed to fetch teachers.' }}); // Redirect to an error page if you want
//     }
//   } else {
//     next();
//   }
// });

router.afterEach(() => {
  NProgress.done();
});

export default router;

