<script setup lang="ts">
import Header from "./components/Header.vue";
import "animate.css";
import "./styles/demo.css";
</script>

<template>
  <Header :class="['tw-relative tw-z-10']" />
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </transition>
</template>

