<script setup lang='ts'>
import {ref, watchEffect} from 'vue'

defineProps<{
  name: string
  values: string[]
}>();

const picked = ref("");

const emit = defineEmits<{
  (e: 'pickedChanged', pickedValue: string): void
}>()

watchEffect(() => {
  emit('pickedChanged', picked.value)
});

</script>

<template>
  <div class="base-radio-button_container" >
    <div v-for="value in values" :key="value" >
      <input type="radio" :id=value :name=name :value=value v-model="picked" :class="[value === picked ? 'base-radio-button_picked' : '']" />
      <label :for=value>{{value}}</label>
    </div>
  </div>

</template>

<style scoped lang='scss'>
.base-radio-button {
  &_container {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  &_picked {
    accent-color: $color-primary
  }
}
</style>