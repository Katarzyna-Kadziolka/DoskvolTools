<script setup lang='ts'>
import type {NavigationItem} from '@/components/generator/generatorNavigationItem/NavigationItem';
import GeneratorNavigationItem from '@/components/generator/generatorNavigationItem/GeneratorNavigationItem.vue'
import { ref } from 'vue'
import {useI18n} from 'vue-i18n'

const {t} = useI18n({useScope: "global"});
const items : NavigationItem[] = [
  {
    id:0,
    name: t("generator-navigation.street"),
    icon: "fa-solid fa-city"
  },
  {
    id:1,
    name: t("generator-navigation.building"),
    icon: "fa-solid fa-building"
  },
  {
    id:2,
    name: t("generator-navigation.character"),
    icon: "fa-solid fa-person"
  },
  {
    id:3,
    name: t("generator-navigation.fiend"),
    icon: "fa-solid fa-spaghetti-monster-flying"
  },
  {
    id:4,
    name: t("generator-navigation.cult"),
    icon: "fa-solid fa-torii-gate"
  },
  {
    id:5,
    name: t("generator-navigation.heist"),
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