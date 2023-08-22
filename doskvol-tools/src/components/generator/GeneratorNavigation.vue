<script setup lang='ts'>
import type {NavigationItem} from '@/components/generator/GeneratorNavigationItem/NavigationItem';
import GeneratorNavigationItem from '@/components/generator/GeneratorNavigationItem/GeneratorNavigationItem.vue'

const items : NavigationItem[] = [
  {
    name: "Ulice",
    icon: "fa-solid fa-city"
  },
  {
    name: "Budynki",
    icon: "fa-solid fa-building"
  },
  {
    name: "Ludzie",
    icon: "fa-solid fa-person"
  },
  {
    name: "Czarty",
    icon: "fa-solid fa-spaghetti-monster-flying"
  },
  {
    name: "Kulty",
    icon: "fa-solid fa-torii-gate"
  },
  {
    name: "Skoki",
    icon: "fa-solid fa-mask"
  }
]
let activeItemName = "Ulice";

</script>

<template>
  <div class='generator-navigation_container'>
    <GeneratorNavigationItem v-for='item in items' :key='item.name' :name='item.name' :icon='item.icon' :is-active='activeItemName === item.name' />
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