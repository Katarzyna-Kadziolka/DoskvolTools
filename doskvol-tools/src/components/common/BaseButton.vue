<script setup lang="ts">
defineProps<{
  name: string
}>();
</script>

<template>
  <div class="base-button">{{name}}</div>
</template>

<style scoped lang="scss">
.base-button {
  background: $color-primary;
  border-radius: 15px;
  border: 1px solid #484b54;;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 16px;
  cursor: pointer;
  &:hover {
    animation-name: hover-container;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }
  @keyframes hover-container {
    from {background-color: $color-primary;}
    to {background-color: $color-accent;}
  }
}
</style>