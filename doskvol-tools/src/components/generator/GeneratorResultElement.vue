<script setup lang="ts">
defineProps<{
  title: string,
  value: string
}>()
</script>

<template>
  <div class="generator-result-element_container">
    <div><b>{{ title }}:</b></div>
    <div>{{ value }}</div>
  </div>
</template>

<style scoped lang="scss">
.generator-result-element {
  &_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>