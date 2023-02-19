<template>
  <div
    :class="[
    heroStyles['hero'],
    'hero',
      'tw-flex tw-justify-center tw-items-center tw-text-cyan-200',
    ]"
  >
    <transition
      :class="[heroStyles['will-animated'],'tw-absolute']"
      enter-active-class="animate__animated  animate__jackInTheBox"
      appear
    >
      <div
        :class="[
          'tw-absolute tw-p-20 tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-600 tw-rounded-tl-full tw-rounded-br-full  tw-bg-opacity-90 tw-w-full tw-h-1/3',
          'md:tw-w-3/4',
        ]"
      >
        <h1
          :class="[
            'tw-relative tw-text-xl tw-self-start',
            'sm:tw-left-28 md:tw-left-32 sm:tw-text-2xl md:tw-text-2xl lg:tw-text-4xl',
          ]"
        >
          Just Some My Demo
        </h1>
        <h3
          :class="[
            'tw-text-sm',
            'sm:tw-text-xl md:tw-text-xl lg:tw-text-2xl',
          ]"
        >
          日常积累的一些demo效果
        </h3>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup >
import heroStyles from "../styles/demo/__hero.module.css";
</script>