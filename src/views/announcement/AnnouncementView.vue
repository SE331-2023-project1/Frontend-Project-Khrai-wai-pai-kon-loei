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
    date: "10/15/2023 1:10 AM",
    document: "Score Midterm.pdf",
    title: "Some Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae eaque voluptate eius perferendis pariatur unde placeat totam incidunt quaerat!",
  },
  {
    date: "10/16/2023 2:20 AM",
    document: "Homework Assignment.doc",
    title: "Another Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae eaque voluptate eius perferendis pariatur unde placeat totam incidunt quaerat!",
  },
];
</script>
