<script setup lang="ts">import { ref } from '@vue/reactivity';


const hi = ref(1)
</script>

<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
</style>