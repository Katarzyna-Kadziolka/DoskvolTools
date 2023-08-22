<script setup lang='ts'>
import type {NavigationItem} from '@/components/generator/generatorNavigationItem/NavigationItem';
import GeneratorNavigationItem from '@/components/generator/generatorNavigationItem/GeneratorNavigationItem.vue'
import { ref } from 'vue'

const items : NavigationItem[] = [
  {
    id:0,
    name: "Ulice",
    icon: "fa-solid fa-city"
  },
  {
    id:1,
    name: "Budynki",
    icon: "fa-solid fa-building"
  },
  {
    id:2,
    name: "Ludzie",
    icon: "fa-solid fa-person"
  },
  {
    id:3,
    name: "Czarty",
    icon: "fa-solid fa-spaghetti-monster-flying"
  },
  {
    id:4,
    name: "Kulty",
    icon: "fa-solid fa-torii-gate"
  },
  {
    id:5,
    name: "Skoki",
    icon: "fa-solid fa-mask"
  }
]
let activeItemName = ref("Ulice");

const emit = defineEmits(['itemClicked']);
const onItemClick = (item: NavigationItem) => {
  emit('itemClicked', item.id)
  activeItemName.value = item.name
}

</script>

<template>
  <div class='generator-navigation_container'>
    <GeneratorNavigationItem v-for='item in items' :key='item.id' :name='item.name' :icon='item.icon'
                             :is-active='activeItemName === item.name' @click='onItemClick(item)' />
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