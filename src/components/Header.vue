<template>
  <header>
    <nav :class="['tw-dy-breadcrumbs tw-flex tw-justify-center tw-text-gray-800']">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/tags">Tags</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script lang="ts" setup>
</script>