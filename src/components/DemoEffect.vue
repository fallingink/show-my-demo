<template>
  <div :class="[$style['border-radius-none'],'tw-dy-card tw-glass']">
    <figure :class="['tw-w-screen']">
      <img :src="obj.imgurl" :class="['tw-w-full tw-my-0 tw-mx-auto tw-h-full']" :alt="obj.imgalt" />
    </figure>
    <div :class="['tw-dy-card-body tw-grow-0']">
      <h2 class="tw-dy-card-title">{{ obj.title }}</h2>
      <p v-for="(v, k) in obj.valArr" :key="k">
        {{ v }}
      </p>
      <button @click="demoTo" class="tw-dy-btn">前往demo</button>
      <div :class="['tw-dy-card-actions tw-justify-end  tw-items-baseline']">
        <div :class="['text tw-text-blue-400', bounch()]">
            {{ obj.nextTip }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup >
import { defineProps, Ref, ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});
const router = useRouter();
function bounch(): string {
  if (props.obj.nextTip !== "结束") {
    return "tw-animate-bounce";
  } else {
    return "";
  }
}

function demoTo():void{
    if(props.obj.demoType){
        router.push(`/demo/${props.obj.demoType}`);
    }
}

</script>
<style module>
div.border-radius-none {
  border-radius: 0;
}
</style>