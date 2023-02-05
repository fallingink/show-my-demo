<script setup lang="ts">
import Header from "./components/Header.vue";
import { themeChange } from "theme-change";
themeChange(true);
</script>

<template>
  <Header :class="['h-screen-10']" />
  <router-view :class="['h-screen-92']" v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
@import "./styles/demo.css";
</style>
