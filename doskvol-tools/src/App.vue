<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavBar from '@/components/layout/AppNavBar.vue'
</script>

<template>
  <AppNavBar class="app_nav-bar"/>
  <div class='app_container'>
    <RouterView />
  </div>
</template>

<style lang='scss' scoped>
  .app {
    &_container {
      background: $color-background;
      padding: 48px 0 0;
      margin:0;
      overflow-y: auto;
    }
    &_nav-bar {
      position: fixed;
      width: 100vw;
    }
  }

</style>
