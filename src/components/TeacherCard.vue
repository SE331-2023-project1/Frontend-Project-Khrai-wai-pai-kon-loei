<script setup lang="ts">
import  { type Teacher } from "@/type";
import type { PropType } from "vue";

const props = defineProps({
  teacher: {
    type: Object as PropType<Teacher>,
    require: true,
  },
});
</script>

<template>
  <article>
    <RouterLink :to="{name: 'teacher-detail', params:{teacherID: teacher?.teacherID}}">
    <div class="card-wrapper">
      <div class="card-body">
        <img
          class="pic w-24 h-24 object-cover mb-3 rounded-full shadow-lg"
          :src="teacher?.profileimage"
        />
        <h2>
          {{ teacher?.name }} {{ teacher?.surname }}
          <span>({{ teacher?.teacherID }})</span>
        </h2>
        <p class="card-email"></p>
        <p>{{ teacher?.teacherID }}</p>
      </div>
    </div>
    </RouterLink>
  </article>
</template>

<style scoped>
.card-wrapper {
  padding: 20px;
  width: 350px;
  cursor: pointer;
  border: 1px solid #39495c;
  /* margin-bottom: 18px; */
  border-radius: 8px;
  background-color: rgb(251, 221, 239);
}

/*pic response when mouse hover*/
.card-wrapper .pic {
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.7s ease 0s;
}
.card-wrapper:hover .pic {
  box-shadow: 0 0 0 8px #c2496b;
  transform: scale(0.8);
}

.card-wrapper:hover {
  transform: scale(1.07);
  box-shadow: 0 3px 12px 0 #80354a;
  /* box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2); */
}

.student-link {
  color: #2c3e50;
  text-decoration: none;
}

.card-body h2 {
  margin: 0 0 12px 0;
  font-size: 1.6rem;
  font-weight: bold;
}

.card-body h2 > span {
  font-size: 16px;
  color: #818181;
}

.card-body .card-email {
  margin: 0 0 12px 0;
  color: #818181;
}

.card-body p {
  margin: 0 0 12px 0;
}
</style>
