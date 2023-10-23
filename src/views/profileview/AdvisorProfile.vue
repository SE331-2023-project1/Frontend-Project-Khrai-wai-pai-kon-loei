<template>
    <main class="container">
      <span class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/4zf8nrhf')]">
        All Advisor
      </span>
  
      <div class="content">
        <table class="w-full bg-white">
          <thead>
            <tr>
              <th class="text-center font-bold p-3"> </th>
              <th class="text-left font-bold p-3">Name</th>
              <th class="text-left font-bold p-3">Academic Position</th>
              <th class="text-left font-bold p-3">Department</th>
              <th class="text-center font-bold p-3">View Advisee</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(profile, index) in profiles" :key="index">
              <td class="flex justify-center items-center p-3">
                <img :src="profile.image" class="w-24 h-24 object-cover rounded-full shadow-lg" alt="Profile Image" />
              </td>
              <td class="p-3">
                <div class="text-lg">{{ profile.name }} {{ profile.surname }}</div>
              </td>
              <td class="p-3">
                <div class="text-lg">{{ profile.academicPosition }}</div>
              </td>
              <td class="p-3">
                <div class="text-lg">{{ profile.department }}</div>
              </td>
              <td class="text-center p-3">
                <button @click="viewAdvisee(profile.id)">View</button>
              </td>
            </tr>
          </tbody>
        </table>
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
    {
      id: 2,
      name: "Maria",
      surname: "Johnson",
      image: "https://preview.redd.it/r3lcc7gf64791.png?width=540&format=png&auto=webp&s=9d32ec46f884486fd59dfd01453bf5d07bf30d75",
      academicPosition: "Assistant Professor",
      department: "Biology",
    },
    {
      id: 3,
      name: "Anna",
      surname: "Williams",
      image: "https://media.istockphoto.com/id/1434414228/photo/stern-sad-cat-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=wis7NGP0_4_Vwti3xioilh3NfYrwHO-JoRMvFVzr6Ck=",
      academicPosition: "Associate Professor",
      department: "Physics",
    },
  ];
  
  const sortAsc = () => {
    profiles.sort((a, b) => a.likes - b.likes);
  };
  
  const sortDesc = () => {
    profiles.sort((a, b) => b.likes - a.likes);
  };
  </script>
  
  <style>
  /* Your existing CSS styles here */
  </style>
  