<template>
  <main class="container">
    <span class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/4zf8nrhf')]">
      All Advisors
    </span>
    <div class="bg-white p-6 rounded-b-lg shadow-md space-y-4">
      <!-- Table -->
      <table class="w-full">
        <thead>
          <tr>
            <th class="text-left font-bold">Picture</th>
            <th class="text-left font-bold">AdvisorID</th>
            <th class="text-left font-bold">Name</th>
            <th class="text-left font-bold">Department</th>
          </tr>
        </thead>
        <tbody>
          <advisor-row v-for="(advisor, index) in advisors" :key="index" :advisor="advisor" />
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
// import AdvisorRole from './AdvisorRole.vue';

export default {
  data() {
    return {
      advisors: [
        {
          name: "Advisor 1",
          picture: "../assets/pic1.jpg",
          id: "AD001",
          department: "Department A",
          advisees: [
            { id: "Stud001", name: "Student A" },
            { id: "Stud002", name: "Student B" },
          ],
        },
        {
          name: "Advisor 2",
          picture: "../assets/pic2.jpg",
          id: "AD002",
          department: "Department B",
          advisees: [
            { id: "Stud003", name: "Student C" },
            { id: "Stud004", name: "Student D" },
        ]
          },
        // Add more advisors with their data
      ],
    };
  },
  components: {
    // AdvisorRole,
  },
};
</script>
