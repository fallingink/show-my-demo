<template>
  <div :class="[tagStyles['tags-bg']]">
    <div :class="[tagStyles['tags-balloon'], 'tw-cursor-pointer']">
      <transition-group enter-active-class="animate__animated animate__delay-1s animate__fadeInUp" appear >
        <div
          :class="['tw-relative', elTop()]"
          @click="goTo(tagVal)"
          v-for="(tagVal, tagKey) in tags"
          :key="tagKey"
        >
          {{ tagVal }}
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script setup lang="ts">
import tagStyles from "../styles/demo/__tags.module.css";
import { useRouter } from "vue-router";
const tags: string[] = ["car", "clock"];
const router = useRouter();
function goTo(val: string) {
  switch (val) {
    case "car":
      router.push("/demo/car");
      break;
    case "clock":
      router.push("/demo/clock");
      break;
    default:
      break;
  }
}

function elTop() {
  const top = ["tw-top-4", "tw-top-7", "tw-top-9", "tw-top-12"];
  const mar = ["tw-mx-16", "tw-mx-17", "tw-mx-18", "tw-mx-20"];
  const random = Math.floor(Math.random() * 4);
  console.log(random);
  return top[random] + " " + mar[random];
}
</script>
