<template>
    <main class="container">
      <span class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/4zf8nrhf')]">
        Advisor Profile
      </span>

      <!-- Student information -->
      <div style="background-color: #fff9fd;">
        <div class="p-6 rounded-lg shadow-md space-y-4">
        <div class="center-profile">
          <div class="flex items-center space-x-4 m-5 mt-2" v-for="(student, studentIndex) in students" :key="studentIndex">
            <div class="px-5">
              <img class="w-28 h-28 object-cover shadow-lg" :src="student.profileimage" />
            </div>
            <div>
              <div class="grid grid-cols-1 gap-1 pt-5 pb-1.5 sm:grid-cols-2 sm:gap-4">
                <dt class="text-xl font-semibold px-8">Name</dt>
                <h1 class="text-lg"> {{ student.name }} {{ student.surname }}</h1>
              </div>
  
              <div class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-2 sm:gap-4">
                <dt class="text-xl font-semibold px-8">Student ID</dt>
                <h1 class="text-lg">{{ student.studentID }}</h1>
              </div>
            </div>
          </div>
        </div>
  
          <!-- Teacher information -->
          <h1 class="text-xl font-semibold">Student's Advisor</h1>
          <div class="bg-white p-3 rounded-lg shadow-md space-y-4" v-for="(profile, index) in profiles" :key="index">
            <div class="flex items-center space-x-8 ">
              <img class="w-24 h-24 object-cover rounded-full shadow-lg" :src="profile.image" />
              <div>
                <h1 class="text-xl font-bold"> Name :
                    {{ profile.name }} {{ profile.surname }}
                </h1>
                <h1 class="text-lg py-2">Academic Position : {{ profile.academicPosition }}</h1>
                <h1 class="text-lg py-2">Department : {{ profile.department }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  const profiles = [
    {
      id: 1,
      name: "Wojciech",
      surname: "Smith",
      image: "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&auto=format&w=2270&ar=2:1&fit=crop",
      academicPosition: "Professor",
      department: "Computer Science",
    },
    // Add more profiles here
  ];
  
  const students = [
    {
      name: "John",
      surname: "Doe",
      profileimage: "https://i.redd.it/nr74fvdg5bbb1.jpg",
      studentID: "12345",
    },
  ];
  
  const sortAsc = () => {
    profiles.sort((a, b) => a.likes - b.likes);
  };
  
  const sortDesc = () => {
    profiles.sort((a, b) => b.likes - a.likes);
  };
  
  </script>
  