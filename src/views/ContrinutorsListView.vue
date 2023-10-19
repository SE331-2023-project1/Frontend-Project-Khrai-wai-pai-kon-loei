<script setup lang="ts">
import type { Contributor } from '@/type'
import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import ContributorsService from '@/services/ContributorsService'
import  ContributorsCard  from "../components/ContributorsCard.vue";


const contributors: Ref<Array<Contributor>> = ref([])

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
  // limit:{
  //   type: Number,
  //   required: true
  // }
})

watchEffect(() => {
    ContributorsService.getContributors(3, 1).then((response) => {
    console.log(response)
    contributors.value = response.data
  })
})

</script>


<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" >
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet">

  <div class="wrapper">
  
  </div>
  
  
  <main class="container">
    <ContributorsCard  v-for="contributor in contributors" :key="contributor.studentId" :contributor="contributor"></ContributorsCard>
    <div class="moon hide-on-small-screen"></div>
    <div class="cloud hide-on-small-screen">
    <div class="blush hide-on-small-screen"></div>
    <div class="eye-l hide-on-small-screen"></div>
    <div class="eye-r hide-on-small-screen"></div>
    <div class="mouth hide-on-small-screen"></div>
  </div>
  </main>
</template>

<style scoped>

.wrapper {
  color: #f5f5f5;
  list-style: none;
  font-weight: 500;
}

.wrapper span::after{
  content:"";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  border-left: 2px solid #FC6D6D;
  animation: typing 1.5s steps(22) infinite;
}

@keyframes typing {
  40%, 60%{
    left: calc(100% + 30px);
  }
  100%{
    left: 0;
  }
}

.name {
  position: fixed;
  left: 11em;
  top: 3em;
  font-size: 50px;
  font-family: 'Itim', cursive;
}

.cloud {
  margin-top: auto;
  background-color: #f5f5f5;
  height: 6.25em;
  width: 20.62em;
  position: fixed;
  margin: auto;
  /* left: 1350px; */
  top: 9.75em;
  border-radius: 6.25em;
  z-index: -1;
}
.hide-on-small-screen {
  display: block; /* or any other initial display value */
}

@media (max-width: 1152px) {
  .hide-on-small-screen {
    display: none;
  }
}

.cloud:before {
  position: absolute;
  content: "";
  height: 10.62em;
  width: 10.62em;
  background-color: #f5f5f5;
  border-radius: 50%;
  bottom: 1.87em;
  left: 2.5em;
}

.cloud:after {
  position: absolute;
  content: "";
  height: 6.25em;
  width: 6.25em;
  background-color: #f5f5f5;
  border-radius: 50%;
  bottom: 4em;
  left: 11em;
  z-index: -1;
}

.moon {
  background-color: #787470;
  height: 9.37em;
  width: 9.37em;
  border-radius: 50%;
  position: fixed;
  margin-left: 10%;
  top: 2.25em;
  overflow: hidden;
  z-index: -2;
  animation: spin-moon 5s infinite linear;
}
@keyframes spin-moon {
  100%{
    transform: rotate(360deg);
  }
}

.moon:before {
  position: absolute;
  content: "";
  height: 1.87em;
  width: 1.87em;
  background-color: #565350;
  border-radius: 50%;
  top: 1.87em;
  box-shadow: 5.62em 3.12em 0 0.75em #565350, 2.18em 4.68em 0 -0.3em #565350, 6.25em -1.87em 0 -0.18em #565350, 3.43em 0.3em 0 -0.5em #565350;
}

.blush {
  height: 2.62em;
  width: 2.62em;
  background-color: #c9c9c9;
  border-radius: 50%;
  position: absolute;
  left: 5em;
  box-shadow: 6.87em 0 #c9c9c9;
}

.eye-l, .eye-r{
  position: absolute;
  height: 1.25em;
  width: 2.12em;
  background-color: #363636;
  border-radius: 0 0 0.93em 0.93em;
}

.eye-l {
  left: 6.87em;
}

.eye-r {
  left: 11.25em;
}

.eye-l:after,.eye-r:after{
  position: absolute;
  content: "";
  background-color: #f5f5f5;
  height: 0.81em;
  width: 1.25em;
  border-radius: 0 0 0.93em 0.93em;
  left: 0.43em;
}

.mouth {
  height: 1.25em;
  width: 1.25em;
  background-color: #363636;
  border-radius: 50%;
  position: absolute;
  left: 9.68em;
  top: 1.56em;
  animation: snoore 3s infinite;
}

@keyframes snoore {
  50%{
    transform: scale(1.3);
  }
}


.container {
  margin: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 3rem;
}

@media (max-width: 1149px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 859px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
