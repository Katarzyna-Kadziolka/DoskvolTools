<script setup lang="ts">

withDefaults(defineProps<{
  label: string,
  modelValue: string,
  value: string
}>(),
    {
      label: '',
      modelValue: ''
    })
</script>

<template>
  <input type="radio"
         :checked="modelValue === value"
         :value="value"
         v-bind="$attrs"
         @change="$emit('update:modelValue', value)"
         :class="[modelValue === value ? 'base-radio_picked' : '']" />
  <label v-if="label" >{{label}}</label>
</template>

<style scoped lang="scss">
.base-radio {
  &_picked{
    accent-color: $color-primary
  }
}
</style>