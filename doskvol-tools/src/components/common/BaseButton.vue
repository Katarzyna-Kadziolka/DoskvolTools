<script setup lang="ts">

withDefaults(defineProps<{
  name: string,
  isPrimary: boolean
}>(), {
  isPrimary: true
})
</script>

<template>
  <div class="base-button" :class="[isPrimary ? 'base-button_primary' : 'base-button_secondary']">{{name}}</div>
</template>

<style scoped lang="scss">
@mixin button-animation($toColor) {
  &:active {
    background: $toColor;
  }
}
.base-button {
  border-radius: 15px;
  border: 1px solid #484b54;;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 16px;
  cursor: pointer;
  &_primary {
    background: $color-primary;
    @include button-animation($color-accent);
  }
  &_secondary {
    background: $color-border;
    @include button-animation($color-secondary-active);
  }
}
</style>