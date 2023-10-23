<template>
  <main class="container">
    <span class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/4zf8nrhf')]">
      All Advisor
    </span>

    <div class="content">
      <table class="w-full bg-white rounded-b-lg shadow-md">
        <thead>
          <tr>
            <th class="text-center font-bold p-3"> </th>
            <th class="text-left font-bold p-3">AdvisorID</th>
            <th class="text-left font-bold p-3">Name</th>
            <th class="text-left font-bold p-3">Department</th>
            <th class="text-center font-bold p-3">Advisor Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(profile, index) in profiles" :key="index">
            <td class="flex justify-center items-center p-3">
              <img :src="profile.image" class="w-20 h-20 object-cover rounded-full shadow-lg" alt="Profile Image" />
            </td>
            <td class="p-3">
              <div class="text-lg">{{ profile.id}}</div>
            </td>
            <td class="p-3">
              <div class="text-lg">{{ profile.name }} {{ profile.surname }}</div>
            </td>
            <td class="p-3">
              <div class="text-lg">{{ profile.department }}</div>
            </td>
            <td class="text-center">
              <router-link :to="{ name: 'advisor-profile', params: { id: index } }" 
              class="button-19 bg-indigo-600 text-white rounded-md p-2 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  View
                </router-link>
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
    id: 23423,
    name: "Wojciech",
    surname: "Smith",
    image: "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&auto=format&w=2270&ar=2:1&fit=crop",
    academicPosition: "Professor",
    department: "Computer Science",
  },
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

<style>
  .button-19 {
    appearance: button;
    background-color: #b062b7;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 2px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: din-round, sans-serif;
    font-size: 12px; 
    margin-left: 10px;
    margin-top: 10px; 
    font-weight: 700;
    letter-spacing: 0.6px;
    line-height: 16px; 
    outline: none;
    overflow: visible;
    padding: 6px 8px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter 0.2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 40%;
    transition: transform 0.2s, rotate 0.2s;
  }
    
    .button-19:after {
      background-clip: padding-box;
      background-color: #cf6ed7;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      bottom: -4px;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    
    }
    
    .button-19:focus {
      outline: 2px solid #c98ecf;
      user-select: auto;
      outline-offset: 4px
    }
    
    .button-19:hover:not(:disabled) {
      filter: brightness(1.1);
      -webkit-filter: brightness(1.1);
      transform: rotate(2deg) scale(1.1);
    }
    
    .button-19:disabled {
      cursor: auto;
    }
    h1 {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
</style>
