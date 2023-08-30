<script setup lang='ts'>
import type {RadioOptions} from "@/components/common/baseRadio/RadioOptions";
import BaseRadio from "@/components/common/baseRadio/BaseRadio.vue";

withDefaults(defineProps<{
  name: string
  radioOptions: RadioOptions[],
  modelValue: string,
  vertical: boolean
}>(),
    {
      vertical: false
    })


</script>

<template>
  <component
      v-for="option in radioOptions"
      :key="option.value"
      :is="vertical ? 'div' : 'span'">
        <BaseRadio
            :value="option.value"
            :label="option.label"
            :name="name"
            :modelValue="modelValue"
            @update:modelValue="$emit('update:modelValue', $event)"
        />
      </component>
</template>

<style scoped lang='scss'>
div {
  display: flex;
  column-gap: 10px;
}
span {
  margin-right: 20px;
}
</style>