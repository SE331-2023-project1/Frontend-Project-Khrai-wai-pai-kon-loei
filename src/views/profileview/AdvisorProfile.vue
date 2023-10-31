<template>
  <main class="container">
    <span class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/4zf8nrhf')]">
      Advisor Profile
    </span>

    <div style="background-color: #fff9fd;">
      <div class="p-6 rounded-lg shadow-md space-y-4">
        <div class="center-profile">
          <div class="flex items-center space-x-4 m-5 mt-2" v-for="(profile, index) in profiles" :key="index">
            <div class="px-5">
              <img class="w-28 h-28 object-cover shadow-lg" :src="profile.image" />
            </div>

            <div>
              <div class="grid grid-cols-1 gap-1 pt-5 pb-1.5 sm:grid-cols-2 sm:gap-4">
                <dt class="text-xl font-semibold px-8">ID</dt>
                <h1 class="text-lg"> {{ profile.id }}</h1>
              </div>

              <div class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-2 sm:gap-4">
                <dt class="text-xl font-semibold px-8">Name</dt>
                <h1 class="text-lg"> {{ profile.name }} {{ profile.surname }}</h1>
              </div>

              <div class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-2 sm:gap-4">
                <dt class="text-xl font-semibold px-8">Department</dt>
                <h1 class="text-lg">{{ profile.department }}</h1>
              </div>
            </div>
          </div>
        </div>

        <!-- Student information -->
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-semibold">List of Advisee Students</h1>
          <!-- Add Button -->
          <button @click="toggleAddStudentDropdown" class="bg-green-500 text-white py-1 px-2 rounded-md">Add Student</button>
        </div>

        <!-- Student list dropdown -->
        <div class="mt-4" v-if="showAddStudentDropdownList">
          <ul>
            <li v-for="(student, studentIndex) in filteredAvailableStudents" :key="studentIndex">
              <div class="flex items-center space-x-2">
                <img class="w-12 h-12 object-cover rounded-full shadow-lg" :src="student.profileimage" />
                <button @click="addStudent(student, studentIndex)">{{ student.name }} {{ student.surname }}</button>
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-white p-3 rounded-lg shadow-md space-y-4" v-for="(student, studentIndex) in students" :key="studentIndex">
          <div class="flex items-center space-x-8">
            <img class="w-24 h-24 object-cover rounded-full shadow-lg" :src="student.profileimage" />
            <div>
              <h1 class="text-xl font-bold">Name: {{ student.name }} {{ student.surname }}</h1>
              <h1 class="text-lg py-2">Student ID: {{ student.studentID }}</h1>

              <!-- Remove Button -->
              <button @click="removeStudent(studentIndex)" class="bg-red-500 text-white py-1 px-2 rounded-md">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      profiles: [
        {
          id: 23423,
          name: "Wojciech",
          surname: "Smith",
          image: "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&auto=format&w=2270&ar=2:1&fit=crop",
          academicPosition: "Professor",
          department: "Computer Science",
        },
      ],
      students: [
        {
          name: "John",
          surname: "Doe",
          profileimage: "https://i.redd.it/nr74fvdg5bbb1.jpg",
          studentID: "12345",
        },
        {
          name: "Jane",
          surname: "Smith",
          profileimage: "https://i.pinimg.com/236x/d4/f0/0b/d4f00bc5e8e8580e1192d8b2fc8b1b42.jpg",
          studentID: "67890",
        },
      ],

      // Student list dropdown
      availableStudents: [
        {
          name: "Alice",
          surname: "Johnson",
          profileimage: "https://tinyurl.com/36447cuj",
          studentID: "35189",
        },
        {
          name: "Bob",
          surname: "Wilson",
          profileimage: "https://tinyurl.com/4tj76eeu",
          studentID: "95636",
        },
      ],
      showAddStudentDropdownList: false,
    };
  },
  computed: {
    filteredAvailableStudents() {
      return this.availableStudents.filter((student) => {
        return !this.students.some((advisee) => advisee.studentID === student.studentID);
      });
    },
  },
  methods: {
    toggleAddStudentDropdown() {
      this.showAddStudentDropdownList = !this.showAddStudentDropdownList;
    },
    addStudent(student, studentIndex) {
      this.students.push(student);
      this.availableStudents.splice(studentIndex, 1);
      this.showAddStudentDropdownList = false;
    },
    removeStudent(studentIndex) {
      const removedStudent = this.students.splice(studentIndex, 1)[0];
      this.availableStudents.push(removedStudent);
    },
  },
};
</script>