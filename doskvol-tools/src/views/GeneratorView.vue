<script setup lang="ts">
import { ref } from 'vue'
import GeneratorNavigationItem from '@/components/generator/GeneratorNavigationItem.vue'
import {useI18n} from 'vue-i18n'
import {useRoute, useRouter} from 'vue-router'

const {t} = useI18n({useScope: "global"});
const router = useRouter();
const route = useRoute();
let activeItemName = ref(route.name);

const onItemClick = async (name: string) => {
  activeItemName.value = name;
  await router.push({name: name});
}

</script>

<template>
  <div class='generator-view_container'>
    <div class='generator-view_navigation'>
      <GeneratorNavigationItem :name='t("generator-navigation.street")' icon='fa-solid fa-city' :is-active='activeItemName === "streetGenerator"' @click='() => onItemClick("streetGenerator")' />
      <GeneratorNavigationItem :name='t("generator-navigation.building")' icon='fa-solid fa-building' :is-active='activeItemName === "buildingGenerator"' @click='() => onItemClick("buildingGenerator")'/>
      <GeneratorNavigationItem :name='t("generator-navigation.character")' icon='fa-solid fa-person' :is-active='activeItemName === "characterGenerator"' @click='() => onItemClick("characterGenerator")'/>
      <GeneratorNavigationItem :name='t("generator-navigation.fiend")' icon='fa-solid fa-spaghetti-monster-flying' :is-active='activeItemName === "devilGenerator"' @click='() => onItemClick("devilGenerator")'/>
      <GeneratorNavigationItem :name='t("generator-navigation.cult")' icon='fa-solid fa-torii-gate' :is-active='activeItemName === "cultGenerator"' @click='() => onItemClick("cultGenerator")'/>
      <GeneratorNavigationItem :name='t("generator-navigation.heist")' icon='fa-solid fa-mask' :is-active='activeItemName === "heistGenerator"' @click='() => onItemClick("heistGenerator")'/>
    </div>
    <router-view class="generator-view_router-view"/>
  </div>
</template>

<style scoped lang='scss'>
.generator-view {
  &_container {
    display: flex;
    flex-direction: row;
  }
  &_navigation {
    width: 15vw;
    margin-top: 24px;
    position: fixed;
  }
  &_router-view {
    margin-left: 15vw;
  }
}
</style>
