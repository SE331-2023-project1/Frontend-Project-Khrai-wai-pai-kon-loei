<template>
    <main class="container">
      <span class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/4zf8nrhf')]">
        Advisor Profile
      </span>
  
      <div style="background-color: #fff9fd;">
        <div class="p-6 rounded-lg shadow-md space-y-4">
          <div class="flex items-center space-x-4 m-5 mt-2" v-for="(profile, index) in profiles" :key="index">
            <div class="px-5">
              <img class="w-28 h-28 object-cover shadow-lg" :src="profile.image" />
            </div>
            <div>
              <div class="grid grid-cols-1 gap-1 pt-5 pb-1.5 sm:grid-cols-3 sm:gap-4">
                <dt class="text-xl font-semibold">Name</dt>
                <h1 class="text-lg"> {{ profile.name }} {{ profile.surname }}</h1>
              </div>
  
              <div class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-3 sm:gap-4">
                <dt class="text-xl font-semibold">Academic Position</dt>
                <h1 class="text-lg">{{ profile.academicPosition }}</h1>
              </div>
  
              <div class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-3 sm:gap-4">
                <dt class="text-xl font-semibold">Department</dt>
                <h1 class="text-lg">{{ profile.department }}</h1>
              </div>
            </div>
          </div>
  
          <!-- Student information -->
          <h1 class="text-xl font-semibold">List of Advisee Student :</h1>
          <div class="bg-white p-3 rounded-lg shadow-md space-y-4" v-for="(student, studentIndex) in students" :key="studentIndex">
            <div class="flex items-center space-x-8 ">
              <img class="w-24 h-24 object-cover rounded-full shadow-lg" :src="student.profileimage" />
              <div>
                <h1 class="text-xl font-bold"> Name :
                  {{ student.name }} {{ student.surname }}
                </h1>
                <h1 class="text-lg py-2">StudentID : {{ student.studentID }}</h1>
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
    {
      name: "Jane",
      surname: "Smith",
      profileimage: "https://i.pinimg.com/236x/d4/f0/0b/d4f00bc5e8e8580e1192d8b2fc8b1b42.jpg",
      studentID: "67890",
    },
    // Add more student profiles here
  ];
  
  const sortAsc = () => {
    profiles.sort((a, b) => a.likes - b.likes);
  };
  
  const sortDesc = () => {
    profiles.sort((a, b) => b.likes - a.likes);
  };
  
  const viewAdviseeProfile = (advisorId) => {
    router.push({ name: 'advisor-profile', params: { id: advisorId } });
  };
  </script>
  