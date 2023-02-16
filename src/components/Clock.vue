<template>
  <div :class="[styles['clock-bg']]">
    <transition
      enter-active-class="animate__animated  animate__fadeInUp"
      appear
    >
      <div ref="clock" :class="[styles.clock]">
        <div ref="scale" :class="[styles.scale]"></div>
        <div :class="styles['clock-point']">
          <div
            ref="secondHand"
            :class="[styles['second-hand'], styles['hand']]"
          ></div>
          <div
            ref="minuteHand"
            :class="[styles['minute-hand'], styles['hand']]"
          ></div>
          <div
            ref="hourHand"
            :class="[styles['hour-hand'], styles['hand']]"
          ></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import styles from "../styles/demo/__clock.module.css";
const scale: Ref<HTMLDivElement | null> = ref(null);
const secondHand: Ref<HTMLDivElement | null> = ref(null);
const minuteHand: Ref<HTMLDivElement | null> = ref(null);
const hourHand: Ref<HTMLDivElement | null> = ref(null);

// 刻度呈现
function scaleShow(scaleElement: HTMLDivElement): void {
  for (let i: number = 1; i < 6; i++) {
    const copyScaleEl = scaleElement.cloneNode(true) as HTMLDivElement;
    copyScaleEl.style.transform = `rotate(${30 * i}deg)`;
    scaleElement.parentNode?.appendChild(copyScaleEl);
  }
}

// 秒针跑动
function secondHandRun(secondHandElement: HTMLDivElement): void {
  setInterval(() => {
    const date = new Date();
    const second = date.getSeconds();
    secondHandElement.style.transform = `rotate(${6 * second - 90}deg)`;
  }, 1000);
}

//分针跑动
function minuteHandRun(minuteHandElement: HTMLDivElement): void {
  setInterval(() => {
    const date = new Date();
    const minute = date.getMinutes();
    minuteHandElement.style.transform = `rotate(${6 * minute - 90}deg)`;
  }, 1000);
}

// 时针跑动
function hourHandRun(hourHandElement: HTMLDivElement): void {
  setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    hourHandElement.style.transform = `rotate(${30 * hour - 90}deg)`;
  }, 1000);
}

onMounted((): void => {
  const scaleElement = scale.value as HTMLDivElement;
  const secondHandElement = secondHand.value as HTMLDivElement;
  const minuteHandElement = minuteHand.value as HTMLDivElement;
  const hourHandElement = hourHand.value as HTMLDivElement;
  scaleShow(scaleElement);
  secondHandRun(secondHandElement);
  minuteHandRun(minuteHandElement);
  hourHandRun(hourHandElement);
});
</script>

