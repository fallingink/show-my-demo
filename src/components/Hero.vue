<template>
  <div class="tw-dy-card tw-w-full tw-glass">
    <figure :class="[$style['border-radius-none']]">
      <img
        :class="['tw-w-screen']"
        src="../assets/imgs/hero.svg"
        alt="building"
      />
    </figure>
    <div class="tw-dy-card-body">
      <h2 class="tw-dy-card-title">demo效果展示</h2>
      <p v-for="(v,k) in valArr" :key="k" >
        {{ v }}
      </p>
      <div class="tw-animate-bounce tw-dy-card-actions tw-justify-end">
        下滑查看
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup >
import { Ref, ref } from "@vue/reactivity";

const valArr:Ref<(number|string|undefined)[]> = ref([""]);
valArr.value = ["集中记录所学各种demo效果", "目前已有两种效果", "1.时钟", "2.小车沿路线走"];
</script>
<style module>
.border-radius-none{
    border-radius: 0;
}
</style>