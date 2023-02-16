<script setup lang="ts">
import Header from "./components/Header.vue";
import "animate.css";
import "./styles/demo.css";
</script>

<template>
  <Header/>
  <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
</template>

