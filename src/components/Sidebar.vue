<script setup lang="ts">
import router from "@/router";
import logoURL from "../assets/logo.png";
import { computed, ref, onMounted, onUnmounted } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const userRole = localStorage.getItem("user_role");
const token = localStorage.getItem("access_token");

const authStore = useAuthStore();

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value.toString());
};

function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user_role");
  //   router.push({ name: 'Login' })
  location.href = "http://localhost:3000/Login";
}
if (token && userRole) {
  authStore.reload(token, JSON.parse(userRole));
} else {
  authStore.logout();
}
</script>

<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <div class="logo">
      <img :src="logoURL" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle item" @click="ToggleMenu">
        <span class="material-symbols-outlined"
          >keyboard_double_arrow_right</span
        >
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <RouterLink :to="{ name: 'home' }" class="button">
        <span class="material-symbols-outlined">home</span>
        <span class="text">Home</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'students' }"
        class="button"
        v-if="authStore.isAdmin() || authStore.isTeacher()"
      >
        <span class="material-symbols-outlined">person</span>
        <span class="text">Student</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'teachers' }"
        class="button"
        v-if="authStore.isAdmin()"
      >
        <span class="material-symbols-outlined">school</span>
        <span class="text">Teacher</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'TeacherRegister' }"
        class="button"
        v-if="authStore.isAdmin()"
      >
        <span class="material-symbols-outlined">note</span>
        <span class="text">Add Teacher</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'Advisor' }"
        class="button"
        v-if="authStore.isAdmin() || authStore.isTeacher()"
      >
        <span class="material-symbols-outlined">groups_2</span>
        <span class="text"> Advisee Student</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'Advisee' }"
        class="button"
        v-if="authStore.isAdmin() || authStore.isStudent()"
      >
        <span class="material-symbols-outlined"> manage_accounts </span>
        <span class="text"> My Advisor</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'Admin' }"
        class="button"
        v-if="authStore.isAdmin()"
      >
        <span class="material-symbols-outlined">browse_activity</span>
        <span class="text"> All Advisor</span>
      </RouterLink>

      <!-- link to login -->
      <RouterLink
        :to="{ name: 'Announcement' }"
        class="button"
        v-if="
          authStore.isAdmin() || authStore.isTeacher() || authStore.isStudent()
        "
      >
        <span class="material-symbols-outlined">Notifications</span>
        <span class="text">Announcement</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'CreateAnnouncement' }"
        class="button"
        v-if="authStore.isTeacher() || authStore.isAdmin()"
      >
        <span class="material-symbols-outlined">Announcement</span>
        <span class="text">CreateAnnouncement</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'profile-page' }"
        class="button"
        v-if="
          authStore.isAdmin() || authStore.isTeacher() || authStore.isStudent()
        "
      >
        <span class="material-symbols-outlined"> account_circle </span>
        <span class="text">Profile</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'Login' }"
        class="button"
        v-if="!authStore.isLoggedIn()"
      >
        <span class="material-symbols-outlined">login</span>
        <span class="text">Login</span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'Login' }"
        class="button"
        @click="logout"
        v-if="authStore.isLoggedIn()"
      >
        <span class="material-symbols-outlined">logout</span>
        <span class="text">Log out</span>
      </RouterLink>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.button{
  margin-top: 8px;
  margin-bottom: 8px;
}
.button span {
  margin-right: 10px;
  width: 32px;
  height: 24px;
}
.text {
  white-space: nowrap; /* Prevent text from wrapping */
}
</style>
