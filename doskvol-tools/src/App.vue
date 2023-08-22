<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavBar from '@/components/layout/AppNavBar.vue'
</script>

<template>
  <AppNavBar />
  <div class='app_container'>
    <RouterView />
  </div>
</template>

<style lang='scss' scoped>
  .app {
    &_container {
      background: $color-background;
      width: 100%;
      height: 100%;
      position:fixed;
      padding:0;
      margin:0;
    }
  }

</style>
