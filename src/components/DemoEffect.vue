<template>
  <div :class="[bgChange(), 'tw-h-screen tw-relative']">
    <transition
      v-show="isShow"
      enter-active-class="animate__animated animate__fadeInLeft"
      appear
    >
      <div
        :class="[
          'tw-flex tw-flex-col tw-justify-center tw-items-start tw-pl-12 tw-relative tw-left-10 tw-top-16 tw-h-4/5 tw-w-2/3 sm:tw-w-1/2',
        ]"
      >
        <div :class="['half']">
          <h2 :class="['tw-font-mono tw-text-2xl tw-text-blue-700 tw-p-2']" >
            {{ demo.title }}
          </h2>
          <p :class="['tw-text-lg tw-pb-4']" >
            {{ demo.desc }}
          </p>
          <button @click="goTo" class="tw-dy-btn" >
            {{ demo.btn }}
          </button>
        </div>
      </div>
    </transition>
    <transition
      v-show="isShow"
      enter-active-class="animate__animated  animate__fadeInTopRight"
      appear
    >
      <div
        :class="[
          'tw-absolute tw-top-0 tw-h-2/5 tw-w-screen sm:tw-right-16 sm:tw-top-40 sm:tw-w-1/2 ',
        ]"
      >
        <img :class="[demoEffectStyles['demoEffect-img']]" :src="demo.src" alt="">
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import demoEffectStyles from "../styles/demo/__demoEffect.module.css";
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
  demo: {
    type: Object,
    default: {},
  },
});

const router = useRouter();

function bgChange() {
  const { key } = props.demo;
  if (key === 1) {
    return demoEffectStyles["demoEffect-bg-first"];
  } else {
    return demoEffectStyles["demoEffect-bg-second"];
  }
}

function goTo(){
  const { title } = props.demo;
  switch (title) {
    case "Clock":
      router.push("/demo/clock");
      break;
    case "Car":
      router.push("/demo/car");
      break;
    default:
      break;
  }
}
</script>