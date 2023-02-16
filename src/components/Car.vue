<template>
  <div>
    <div
      ref="load"
      :class="[styles.load, 'tw-flex tw-justify-center tw-items-center']"
    >
      <transition-group
        enter-active-class="animate__animated animate__delay-1s animate__zoomIn"
        appear
      >
        <div key="car" ref="car" :class="[styles.car]">
          <img src="../assets/imgs/bmw-158704.svg" alt="" />
        </div>
        <svg key="svg" x="0" y="0" width="400" height="400">
          <path
            stroke-width="5"
            d="M 0 0 C 40 10, 65 10, 95 80 S 150 150, 180 80 C 200 50,240 80, 260 30"
            stroke="black"
            fill="transparent"
          />
          <path
            ref="carload"
            :class="[styles.carLoad]"
            stroke-width="5"
            d="M 0 0 C 40 10, 65 10, 95 80 S 150 150, 180 80 C 200 50,240 80, 260 30"
            stroke="lightblue"
            fill="transparent"
          />
        </svg>
      </transition-group>
    </div>
    <transition-group
      enter-active-class="animate__animated animate__delay-2s  animate__fadeInUp"
      appear
    >
      <button
        key="run"
        @click="run"
        :class="['tw-dy-btn-accent tw-w-full tw-relative tw-z-10']"
      >
        开启跑动
      </button>
      <button
        key="reset"
        @click="reset"
        :class="['tw-dy-btn-primary tw-w-full tw-relative tw-z-10']"
      >
        重置
      </button>
    </transition-group>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import styles from "../styles/demo/__car.module.css";
import "../styles/demo/car.css";
const car = ref<HTMLElement | null>(null);
const carload = ref<HTMLElement | null>(null);
const carAnimate = [
  {
    transform: " rotateY(170deg) rotateZ(5deg) translate(18px, -20px)",
  },
  {
    transform: " rotateY(170deg) rotateZ(5deg) translate(-22px, -10px)",
  },
  {
    transform: "rotateY(170deg) rotateZ(5deg) translate(-47px, -10px)",
  },
  {
    transform: " rotateY(170deg) rotateZ(5deg) translate(-77px, 60px)",
  },
  {
    transform: " rotateY(170deg) rotateZ(5deg) translate(-132px, 130px)",
  },
  {
    transform: "rotateY(170deg) rotateZ(5deg) translate(-162px, 60px)",
  },
  {
    transform: "rotateY(170deg) rotateZ(5deg) translate(-182px, 30px)",
  },
  {
    transform: "rotateY(170deg) rotateZ(5deg) translate(-222px, 50px)",
  },
  {
    transform: "rotateY(170deg) rotateZ(5deg) translate(-242px, 10px)",
  },
];
const carRunCheck: Ref<boolean> = ref(true);
const carResetCheck: Ref<boolean> = ref(false);
let timer: any = ref();

function timerRun() {
  if (!timer.value) {
    timer.value = setTimeout(() => {
      clearInterval(timer.value);
      timer.value = null;
    }, 3200);
    return true;
  } else {
    return false;
  }
}

function run() {
  let bool: boolean = false;
  if (carRunCheck.value) {
    bool = timerRun() as boolean;
  }
  if (bool) {
    carload.value?.classList.remove("loadReset");
    carload.value?.classList.add("loadRun");
    car.value?.animate(carAnimate, {
      duration: 3000,
      fill: "forwards",
    });
    carRunCheck.value = false;
    carResetCheck.value = true;
  }
}

function reset() {
  let bool: boolean = false;
  if (carResetCheck.value) {
    bool = timerRun() as boolean;
  }
  if (bool) {
    carload.value?.classList.remove("loadRun");
    carload.value?.classList.add("loadReset");
    car.value?.animate(carAnimate, {
      duration: 3000,
      direction: "reverse",
      fill: "forwards",
    });
    carRunCheck.value = true;
    carResetCheck.value = false;
  }
}
</script>
