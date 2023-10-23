<template>
  <div class="w-[80%] bg-white border border-gray-200 rounded-lg shadow hover:shadow-md p-8 bg-[url('https://tinyurl.com/2fxwxvhw')]" 
  :style="{ margin: '8px' }">
    <div class="flex flex-col">
      <div class="flex flex-row text-sm text-gray-500">
      <img
        :src="advisor.image"
        alt=""
        class="w-20 h-20 object-cover rounded-full shadow-lg"
      />
        <div class="p-5 font-semibold text-xl text-center text-black">{{ advisor.name }} {{ advisor.surname }}</div>
      </div>
    </div>
    <div>
      <h5 class="mt-1 text-2xl font-bold text-gray-500 py-1">{{ announce.title }}</h5>
      <p class="text-gray-600 py-1">{{ announce.description }}</p>
    </div>

    <div>
      <span class="material-symbols-outlined"><span>{{ announce.document }}</span></span>
    </div>

    <div class="flex mt-4 space-x-3 md:mt-2" :style="{ display: 'flex', flexDirection: 'row-reverse'}">
      <a class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#c98ecf] rounded-lg hover:bg-[#b062b7] focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg"
      >Read more</a
      >
    </div>
 </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  advisor: Object,
  announce: Object,
});

const advisor = ref(props.advisor);
const announce = ref(props.announce);
</script>
