<template>
  <article>
    <RouterLink
      :to="{
        name: 'student-detail',
        params: { studentid: student?.studentid },
      }"
    >
      <div class="card-wrapper">
        <div class="card-body">
          <img
            class="pic w-24 h-24 object-cover mb-3 rounded-full shadow-lg"
            :src="student?.profileimage"
          />
          <h2>
            {{ student?.name }} {{ student?.surname }}
            <span>({{ student?.studentid }})</span>
          </h2>
          <p class="card-email">{{ student?.courselist.join(', ') }}</p>
          <p>Advisor : {{ student?.teacherID }}</p>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<script setup lang="ts">
import { type Student } from "@/type";
import type { PropType } from "vue";

const props = defineProps({
  student: {
    type: Object as PropType<Student>,
    required: true,
  },
});
</script>

<style scoped>
.card-wrapper {
  padding: 20px;
  width: 350px;
  cursor: pointer;
  border: 1px solid #39495c;
  border-radius: 8px;
  background-color: rgb(251, 221, 239);
}

/* Pic response when mouse hovers */
.card-wrapper .pic {
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.7s ease 0s;
}

.card-wrapper:hover .pic {
  box-shadow: 0 0 0 8px #da5da2;
  transform: scale(0.8);
}

.card-wrapper:hover {
  transform: scale(1.07);
  box-shadow: 0 3px 12px 0 #bc518c;
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
