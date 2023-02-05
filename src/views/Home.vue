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
import { ref } from "vue";
const valArr: any = [Hero,DemoEffect,DemoEffect];
const clock:object = {
    imgurl: "/src/assets/imgs/clock.svg",
    imgalt: "clock",
    title: "时钟效果展示",
    valArr: [ "采用css结合js实现", "时钟的指针采用css动画实现"],
    nextTip: "下滑继续",
    demoType:"clock"
}
const car:object ={
    imgurl: "/src/assets/imgs/car.svg",
    imgalt: "car",
    title: "小车沿路线走效果展示",
    valArr: [ "采用svg技术与css3", "小车的移动采用css动画实现"],
    nextTip: "结束",
    demoType:"car"
}
function objGive(v:any){
    if(v==0){
        return "";
    }else if(v==1){
        return clock;
    }else{
        return car;
    }
}
</script>