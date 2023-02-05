<template>
  <div :class="['tw-dy-carousel tw-dy-carousel-vertical']">
    <div
      v-for="(v, k) in valArr"
      :key="k"
      class="tw-dy-carousel-item tw-h-full"
    >
      <component :obj="objGive(k)" :is="v" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Hero from "../components/Hero.vue";
import DemoEffect from "../components/DemoEffect.vue";
import { ref, Ref } from "vue";
import carImg from "../assets/imgs/car.svg";
import clockImg from "../assets/imgs/clock.svg";
import { axiosGet } from "../../lib/axios";
const valArr: any = [Hero, DemoEffect, DemoEffect];
interface clockType {
  imgurl: string;
  imgalt?: string;
  title?: string;
  varArr?: Array<string>;
  nextTip?: string;
  demoType?: string;
}
interface carType {
  imgurl: string;
  imgalt?: string;
  title?: string;
  varArr?: Array<string>;
  nextTip?: string;
  demoType?: string;
}
interface initValType {
  clock: {
    imgalt: string;
    title: string;
    varArr: Array<string>;
    nextTip: string;
    demoType: string;
  };
  car: {
    imgalt: string;
    title: string;
    varArr: Array<string>;
    nextTip: string;
    demoType: string;
  };
}
interface resType {
  data: initValType;
}
const clock:Ref<clockType> = ref({
  imgurl: clockImg,
});
const car:Ref<carType>  = ref({
  imgurl: carImg,
});
function objGive(v: any) {
  if (v == 0) {
    return "";
  } else if (v == 1) {
    return clock.value;
  } else {
    return car.value;
  }
}

async function homeInit(): Promise<void> {
  const res: resType = (await axiosGet("/api/home")) as resType;
  const initData: initValType = res.data as initValType;
  clock.value = { ...clock.value, ...initData.clock };
  car.value = { ...car.value, ...initData.car };
}

homeInit();
</script>