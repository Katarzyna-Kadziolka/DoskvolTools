<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  title: string,
  value: string,
  url: string,
}>()

const fullUrl = computed(() => {
  return "#" + props.url;
})
</script>

<template>
  <div class="generator-result-element_container">
    <a :href="fullUrl"><div><b>{{ title }}:</b></div></a>
    <div>{{ value }}</div>
  </div>
</template>

<style scoped lang="scss">
a {
  color: inherit;
  text-decoration: none;
}
.generator-result-element {
  &_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>