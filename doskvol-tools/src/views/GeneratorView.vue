<script setup lang="ts">
import GeneratorNavigation from '@/components/generator/GeneratorNavigation.vue'

</script>

<template>
  <div class='generator-view_container'>
    <GeneratorNavigation/>
    <div>Generator!</div>
  </div>
</template>

<style scoped lang='scss'>
.generator-view {
  &_container {
    display: flex;
    flex-direction: row;
  }
}
</style>
