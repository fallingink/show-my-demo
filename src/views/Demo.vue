<template>
  <div
    :class="['tw-flex tw-justify-center tw-items-center', styles['bg-grey']]"
  >
    <component :is="demo[`${demoType}`]" />
  </div>
</template>
<script lang="ts" setup>
import { useDemoStore } from "../stores/demo";
import styles from "../styles/demo/__demoEffect.module.css";
import Clock from "../components/Clock.vue";
import Car from "../components/Car.vue";
let demoType: string = location.pathname.split("/")[2];
const demo: any = {
  clock: Clock,
  car: Car,
};
</script>