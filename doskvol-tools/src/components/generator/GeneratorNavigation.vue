<script setup lang='ts'>
import GeneratorNavigationItem from '@/components/generator/GeneratorNavigationItem.vue'

const items = ["Ulice", "Budynki", "Ludzie", "Czarty", "Kulty", "Skoki"]

</script>

<template>
  <div class='generator-navigation_container'>
    <GeneratorNavigationItem v-for='item in items' :key='item' :name='item' />
  </div>
</template>

<style scoped lang='scss'>
.generator-navigation {
  &_container {
    width: 15vw;
    margin-top: 24px;
  }
}
</style>