<script setup lang='ts'>
defineProps<{
  name: string
  icon: string
  isActive: boolean
}>()
</script>

<template>
  <div class='generator-navigation-item_container' :class="[isActive ? 'generator-navigation-item_active' : '']">
    <font-awesome-icon :icon=icon />
    {{name}}
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
    column-gap: 15px;
    cursor: pointer;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    &:hover {
      animation-name: hover-container;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
    }
  }
  &_active {
    color: $color-primary;
  }
  @keyframes hover-container {
    from {background-color: $color-background;}
    to {background-color: #303040;}
  }
}
</style>