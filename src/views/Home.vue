<template>
  <div>
    <component
      :demo="demo[key - 1]"
      ref="lazyEl"
      :class="['componentsLazy']"
      v-for="(item, key) in components"
      :is="item"
      :key="key"
    />
    <img
      :class="[homeStyles['home-img'], 'tw-absolute tw-top-0 tw-w-full sm:tw-h-screen']"
      src="../assets/imgs/homeBg.jpg"
      alt=""
    />
  </div>
</template>
<script setup lang="ts">
import Hero from "../components/Hero.vue";
import homeStyles from "../styles/demo/__home.module.css";
import { shallowRef, onMounted, Ref, ref, defineAsyncComponent } from "vue";
import carImg from "../assets/imgs/car.svg";
import clockImg from "../assets/imgs/clock.svg";
const DemoEffect = defineAsyncComponent(
  () => import("../components/DemoEffect.vue")
);
// import DemoEffect from "../components/DemoEffect.vue";
const components: Ref<any[]> = shallowRef([Hero, DemoEffect, DemoEffect]);
// const lazyEl: Ref<any[]> = ref([]);
const demo = [{
  title:"Clock",
  desc:"表盘时钟，使用css3实现",
  btn:"查看",
  key:1,
  src:clockImg
},{
  title:"Car",
  desc:"汽车走路线动画，使用css3加svg实现",
  btn:"查看",
  key:2,
  src:carImg
}]
// function lazyLoad(...args: any) {
//   const lazyEl = document.querySelectorAll(".componentsLazy");
//   // const distance = viewHeight - args[0]?.target.getBoundingClientRect().top;
//   // console.log(lazyEl.value);
//   for(let i = 0;i < lazyEl.length;i++) {
//     const distance = viewHeight - lazyEl[i].getBoundingClientRect().top;
//     console.log(viewHeight-lazyEl[i].getBoundingClientRect().bottom,i,distance);
//     if (distance >= 0 && i >= 1 ) {
//       isShow.value[i-1] = true;
//     }else if(distance >= 0 && i === 0) {
//       isShow.value[i] = true;
//     }
//   }
// }
// onMounted(() => {
//   lazyLoad();
//   window.addEventListener("scroll", lazyLoad);
// });
</script>