<template>
  <div :class="['tw-dy-card tw-w-full tw-glass',$style['border-radius-none']]">
    <figure :class="[$style['border-radius-none']]">
      <img
        :class="['tw-w-screen']"
        src="../assets/imgs/hero.svg"
        alt="building"
      />
    </figure>
    <div class="tw-dy-card-body tw-grow-0">
      <h2 class="tw-dy-card-title">{{ initVal.title }}</h2>
      <p v-for="(v,k) in initVal.valArr" :key="k" >
        {{ v }}
      </p>
      <div class="tw-animate-bounce tw-dy-card-actions tw-justify-end">
        {{ initVal.nextTip  }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup >
import { Ref, ref } from "@vue/reactivity";
import { axiosGet } from "../../lib/axios";
const initVal:Ref<initValType> = ref({} as initValType);
interface initValType{
    title:string;
    valArr:Array<string>;
    nextTip:string;
}
interface resType{
    data:initValType;
}
async function heroInit(){
    const res:resType = await axiosGet("/api/hero") as resType;
    const initData:initValType = res.data as initValType;
    if(initData){
        initVal.value = initData;
    }
}
heroInit();
</script>
<style module>
div.border-radius-none{
    border-radius: 0;
}
</style>