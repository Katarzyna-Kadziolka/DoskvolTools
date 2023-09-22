<script setup lang='ts'>
import {useI18n} from 'vue-i18n'
import {storeToRefs} from "pinia";
import {useBuildGenerator} from "@/components/generator/buildingGenerator/composables/BuildingGeneratorContent";
import useRandom from "@/composables/Random";
import {useBuildingStore} from "@/stores/BuildingStore";
import type {TableVariant, Variant} from "@/types/TableVariant";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import GeneratorResultElement from "@/components/generator/GeneratorResultElement.vue";
import BaseGenerator from "@/components/generator/BaseGenerator.vue";

const {t} = useI18n();

const store = useBuildingStore();
const {building} = storeToRefs(store);

const buildingData = useBuildGenerator();
const {getRandomFromTable, getRandomTableVariant} = useRandom();

const generateRandom = () => {
  building.value.exteriorMaterial = getRandomFromTable(buildingData.getExteriorMaterial())
  building.value.exteriorDetails = getRandomFromTable(buildingData.getExteriorDetails())
  building.value.details = getRandomFromTable(buildingData.getDetails())
  building.value.items = getRandomFromTable(buildingData.getItems())

  const tableVariant: Variant = generateRandomVariant()
  if (tableVariant === "common") {
    building.value.use = getRandomFromTable(buildingData.getCommonUse())
  } else {
    building.value.use = getRandomFromTable(buildingData.getRareUse())
  }
}

const generateRandomVariant = () => {
  const tablesVariants: TableVariant[] = [
    {
      tableTitle: "common",
      rarity: 4
    },
    {
      tableTitle: "rare",
      rarity: 2
    }
  ]
  return getRandomTableVariant(tablesVariants);
}

const copy = () => {
  navigator.clipboard.writeText(`${t('buildings.exterior.material.title')}: ${building.value.exteriorMaterial}\n` +
      `${t('buildings.exterior.details.title')}: ${building.value.exteriorDetails}\n` +
      `${t('buildings.use.title')}: ${building.value.use}\n` +
      `${t('buildings.details.title')}: ${building.value.details}\n` +
      `${t('buildings.items.title')}: ${building.value.items}`)
}
</script>

<template>
  <BaseGenerator :title="t('generator-navigation.building').toLocaleUpperCase()" @generateRandom="generateRandom"
                 @copy="copy">
    <template v-slot:tables>
      <BaseTable v-model="building.exteriorMaterial" :table-data="buildingData.getExteriorMaterial()"
                 id="buildingExteriorMaterial"/>
      <BaseTable v-model="building.exteriorDetails" :table-data="buildingData.getExteriorDetails()"
                 id="buildingExteriorDetails"/>
      <BaseTable v-model="building.use" :table-data="buildingData.getCommonUse()" id="buildingCommonUse"/>
      <BaseTable v-model="building.use" :table-data="buildingData.getRareUse()" id="buildingRareUse"/>
      <BaseTable v-model="building.details" :table-data="buildingData.getDetails()" id="buildingDetails"/>
      <BaseTable v-model="building.items" :table-data="buildingData.getItems()" id="buildingItems"/>
    </template>
    <template v-slot:results>
      <GeneratorResultElement :title="t('buildings.exterior.material.title')" :value="building.exteriorMaterial"
                              url="buildingExteriorMaterial"/>
      <GeneratorResultElement :title="t('buildings.exterior.details.title')" :value="building.exteriorDetails"
                              url="buildingExteriorDetails"/>
      <GeneratorResultElement :title="t('buildings.use.title')" :value="building.use" url="buildingCommonUse"/>
      <GeneratorResultElement :title="t('buildings.details.title')" :value="building.details" url="buildingDetails"/>
      <GeneratorResultElement :title="t('buildings.items.title')" :value="building.items" url="buildingItems"/>
    </template>
  </BaseGenerator>
</template>