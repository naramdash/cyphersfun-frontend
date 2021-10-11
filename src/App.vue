<script setup lang="ts">
import VueRouter from 'vue-router'

// import HelloWorld from './components/HelloWorld.vue'

import { ref } from '@vue/reactivity';
const num = ref(3)

</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
}
</style>
