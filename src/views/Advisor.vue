<template>
  <main class="container">
    <span class="block text-center rounded-t-lg p-3 font-semibold text-lg bg-[url('https://tinyurl.com/4zf8nrhf')]">
      My Advisee Student
    </span>

    <div class="content">
      <table class="w-full bg-white rounded-b-lg shadow-md">
        <thead>
          <tr>
            <th class="text-center font-bold p-3"></th>
            <th class="text-left font-bold p-3">StudentID</th>
            <th class="text-left font-bold p-3">Name</th>
            <th class="text-left font-bold p-3">Student Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td class="flex justify-center items-center p-3">
              <img :src="student.profileimage" class="w-20 h-20 object-cover rounded-full shadow-lg" alt="Student Image" />
            </td>
            <td class="p-3">
              <div class="text-lg">{{ student.studentID }}</div>
            </td>
            <td class="p-3">
              <div class="text-lg">{{ student.name }} {{ student.surname }}</div>
            </td>
            <td>
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
      outline: 2px solid #4F46E5;
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
