<script setup lang="ts">

import UniqueID from "@/composables/UniqueID";

withDefaults(defineProps<{
  label: string,
  modelValue: string,
  value: string
}>(),
    {
      label: '',
      modelValue: ''
    })

const uuid = UniqueID().getID();
</script>

<template>
  <input type="radio"
         :id="uuid"
         :checked="modelValue === value"
         :value="value"
         v-bind="$attrs"
         @change="$emit('update:modelValue', value)"
         :class="[modelValue === value ? 'base-radio_picked' : '']" />
  <label :for="uuid" v-if="label" >{{label}}</label>
</template>

<style scoped lang="scss">
.base-radio {
  &_picked{
    accent-color: $color-primary
  }
}
</style>