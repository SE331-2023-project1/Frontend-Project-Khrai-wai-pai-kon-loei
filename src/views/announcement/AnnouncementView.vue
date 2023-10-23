<template>
  <main class="flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold mb-4 text-black">Announcement</h1>
    <AnnouncementCard :advisor="advisor[0]" :announce="announce[0]" />
    <AnnouncementCard :advisor="advisor[1]" :announce="announce[1]" />
  </main>
</template>

<script setup>
import AnnouncementCard from '@/components/AnnouncementCard.vue';

const advisor = [
  {
    id: 23423,
    name: "Wojciech",
    surname: "Smith",
    image: "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?q=65&auto=format&w=2270&ar=2:1&fit=crop",
    academicPosition: "Professor",
    department: "Computer Science",
  },
  {
    id: 87234,
    name: "Maria",
    surname: "Johnson",
    image: "https://preview.redd.it/r3lcc7gf64791.png?width=540&format=png&auto=webp&s=9d32ec46f884486fd59dfd01453bf5d07bf30d75",
    academicPosition: "Assistant Professor",
    department: "Biology",
  },
];

const announce = [
  {
    document: "ProjectDescription2.pdf",
    title: "Project after midterm",
    description: "You can change your group if you want. The group should be 2 -3 people. You have to develop a new backend application. For the frontend you can develop from scratch or use your project I as the base project.",
  },
  {
    document: "Wireframe.figma",
    title: "Wireframe and Prototype practice",
    description: "Create a wireframe and prototype of ‘Making a purchase’ user flow on the wireframe resource template.",
  },
];
</script>
