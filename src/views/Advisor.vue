<template>
    <main class="container">
      <span
        class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/4zf8nrhf')]">\
        All Advisee</span>
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
  