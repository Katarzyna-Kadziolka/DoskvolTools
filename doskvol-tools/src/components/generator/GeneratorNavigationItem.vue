<script setup lang='ts'>
defineProps<{
  name: string
}>()
</script>

<template>
  <div class='generator-navigation-item_container'>
    <img src=''>
    <div >{{name}}</div>
  </div>
</template>

<style scoped lang='scss'>
.generator-navigation-item {
  &_container {
    color: $font;
    display: flex;
    align-items: center;
    height: 5vh;
    padding: 8px 0 8px 24px;
  }
}
</style>