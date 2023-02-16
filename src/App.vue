<script setup lang="ts">
import Header from "./components/Header.vue";
import "animate.css";
import "./styles/demo.css";
</script>

<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      appear
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

