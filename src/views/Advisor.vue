<template>
    <main class="container">
      <span class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/4zf8nrhf')]">
        All Advisee
      </span>
      <div class="bg-white p-6 rounded-b-lg shadow-md space-y-4">
        <!-- Table -->
        <table class="w-full">
          <thead>
            <tr>
              <th class="text-left font-bold">Picture</th>
              <th class="text-left font-bold">StudentID</th>
              <th class="text-left font-bold">Name</th>
              <th class="text-left font-bold">Add Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(advisee, index) in advisees" :key="index">
              <!-- Picture -->
              <td>
                <img class="w-24 h-24 object-cover rounded-full shadow-lg" :src="advisee.picture" alt="Advisee Picture">
              </td>
              <!-- Name -->
              <td>
                <div class="text-lg">{{ advisee.name }}</div>
              </td>
              <!-- Comment Button -->
              <td>
                <router-link :to="'/comments/' + index" class="bg-blue-500 text-white rounded-full p-2">
                  Comments
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
        advisees: [
          {
            name: "Name Surname",
            picture: "../assets/pic1.jpg",
          },
          {
            name: "Name Surname",
            picture: "../assets/pic2.jpg",
          },
          // Add more advisees with their data
        ],
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  