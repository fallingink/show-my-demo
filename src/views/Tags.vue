<template>
    <div :class="[tagStyles['tags-bg']]">
        <div :class="[tagStyles['tags-balloon']]">
            <div v-for="(tagVal,tagKey) in tags" :key="tagKey" >
                {{ tagVal }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import tagStyles from "../styles/demo/__tags.module.css";
const tags:string[] = ["car","clock"];
</script>
