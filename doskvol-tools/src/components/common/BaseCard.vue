<script setup lang="ts">

</script>

<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.base-card {
  background: $color-secondary;
  padding: 16px;
  border-radius: 15px;
  border: 1px solid $color-border;
}
</style>