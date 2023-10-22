<template>
    <main class="container">
      <span
        class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/4zf8nrhf')]">
        All Advisor</span>
      <div class="bg-white p-6 rounded-b-lg shadow-md space-y-4">
        <div class="flex items-center space-x-8">
          <!-- image -->
          <img
            class="w-24 h-24 object-cover rounded-full shadow-lg"
            src="../assets/logo.png">
        
        <!-- name -->
          <div>
            <div class="grid grid-cols-1 gap-1 pt-5 pb-1.5 sm:grid-cols-3 sm:gap-4">
              <dt class="text-xl font-semibold">Name</dt>
              <h1 class="text-lg">
                Name surname
              </h1>
            </div>
            <span
              class="material-symbols-outlined cursor-pointer"
              @click="toggleDropdown"
            >
              {{ isOpen ? "expand_less" : "expand_more" }}
            </span>
            <div v-if="isOpen" id="dropdownUsers" class="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700">
             <ul class="max-h-48 overflow-y-auto py-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
            <li>
            <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <img class="w-6 h-6 mr-2 rounded-full" src="../assets/logo.png" alt="User Image">
                Jese Leos
            </a>
            </li>
            </ul>
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
        isOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
    },
  };
</script>
  