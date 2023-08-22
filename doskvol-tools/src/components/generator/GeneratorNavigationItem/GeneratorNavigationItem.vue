<script setup lang='ts'>
defineProps<{
  name: string
  icon: string
}>()
</script>

<template>
  <div class='generator-navigation-item_container'>
    <font-awesome-icon :icon=icon />
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