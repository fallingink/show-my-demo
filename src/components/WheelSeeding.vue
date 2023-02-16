<template>
  <div
    :class="[
      'tw-h-screen tw-w-full,tw-dy-bg-primary-content',
      wheelStyles['wheel-bg-image'],
    ]"
  >
    <transition enter-active-class="animate__swing" appear>
      <div
        id="slide1"
        class="
          tw-flex
          tw-flex-row
          tw-justify-center
          tw-items-center
          tw-dy-carousel-item
          tw-relative
          tw-w-full
        "
      >
        <div class="tw-dy-card tw-w-96 tw-bg-base-100 tw-shadow-xl">
          <figure>
            <img src="../assets/imgs/bmw-158704.svg" alt="Shoes" />
          </figure>
          <div class="tw-dy-card-body">
            <h2 class="tw-dy-card-title">
              Shoes!
              <div class="tw-dy-badge tw-dy-badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="tw-dy-card-actions tw-justify-end">
              <div class="tw-dy-badge tw-dy-badge-outline">Fashion</div>
              <div class="tw-dy-badge tw-dy-badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import wheelStyles from "../styles/demo/__wheelSeeding.module.css";
</script>