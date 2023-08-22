<script setup lang="ts">
import GeneratorNavigation from '@/components/generator/GeneratorNavigation.vue'
import StreetGenerator from '@/components/generator/streetGenerator/StreetGenerator.vue'
import BuildingGenerator from '@/components/generator/buildingGenerator/BuildingGenerator.vue'
import CharacterGenerator from '@/components/generator/characterGenerator/CharacterGenerator.vue'
import FiendGenerator from '@/components/generator/fiendGenerator/FiendGenerator.vue'
import CultGenerator from '@/components/generator/cultGenerator/CultGenerator.vue'
import RaidGenerator from '@/components/generator/raidGenerator/RaidGenerator.vue'
import { ref } from 'vue'

let activeGenerator = ref(0);
//TODO refactor, może Pinia do przechowania stanu, który generator jest aktywny?

const onItemClicked = (itemId: number) => {
  activeGenerator.value = itemId
}

</script>

<template>
  <div class='generator-view_container'>
    <GeneratorNavigation @itemClicked='onItemClicked'/>
    <StreetGenerator v-show='activeGenerator==0'/>
    <BuildingGenerator v-show='activeGenerator==1'/>
    <CharacterGenerator v-show='activeGenerator==2'/>
    <FiendGenerator v-show='activeGenerator==3'/>
    <CultGenerator v-show='activeGenerator==4'/>
    <RaidGenerator v-show='activeGenerator==5'/>
  </div>
</template>

<style scoped lang='scss'>
.generator-view {
  &_container {
    display: flex;
    flex-direction: row;
  }
}
</style>
