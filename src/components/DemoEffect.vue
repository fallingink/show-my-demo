<template>
  <div :class="[bgChange(), demoEffectStyles['demoEffect'], 'tw-relative tw-overflow-x-hidden']">
    <div ref="demoEl" :class="['tw-relative tw-top-40']">
      <transition :class="['tw-absolute']" enter-active-class="animate__animated animate__slideInLeft" >
        <div
          v-show="isShow"
          :class="[
            'tw-flex tw-flex-col tw-justify-center tw-items-start tw-pl-12 tw-absolute tw-top-40 tw-h-4/5 tw-w-2/3 sm:tw-top-20 sm:tw-left-10 sm:tw-w-1/2',
          ]"
        >
          <div :class="['half']">
            <h2 :class="['tw-font-mono tw-text-2xl tw-text-blue-700 tw-p-2']">
              {{ demo.title }}
            </h2>
            <p :class="['tw-text-lg tw-pb-4']">
              {{ demo.desc }}
            </p>
            <button @click="goTo" class="tw-dy-btn">
              {{ demo.btn }}
            </button>
          </div>
        </div>
      </transition>
    </div>
    <transition :class="['tw-absolute']"  enter-active-class="animate__animated  animate__slideInRight" >
      <div
        v-show="isShow"
        :class="[
          'tw-absolute tw-top-0 tw-h-2/5 tw-w-screen md:tw-right-16 sm:tw-top-40 sm:tw-w-1/2 ',
        ]"
      >
        <img
          :class="[demoEffectStyles['demoEffect-img']]"
          :src="demo.src"
          alt=""
        />
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import demoEffectStyles from "../styles/demo/__demoEffect.module.css";
const props = defineProps({
  demo: {
    type: Object,
    default: {},
  },
});
const demoEl: any = ref(null);
const router = useRouter();
const isShow = ref(false);
function bgChange() {
  const { key } = props.demo;
  if (key === 1) {
    return demoEffectStyles["demoEffect-bg-first"];
  } else {
    return demoEffectStyles["demoEffect-bg-second"];
  }
}

function goTo() {
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

function lazyLoad() {
  const { top } = demoEl.value.getBoundingClientRect();
  const viewHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const distance = viewHeight - top;
  if (distance >= 0) {
    isShow.value = true;
  }else{
    isShow.value = false;
  }
}

onMounted(() => {
  lazyLoad();
  window.addEventListener("scroll", lazyLoad);
});
</script>