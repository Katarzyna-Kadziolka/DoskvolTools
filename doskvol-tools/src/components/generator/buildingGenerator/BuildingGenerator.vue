<script setup lang='ts'>
import {useI18n} from 'vue-i18n'
import {storeToRefs} from "pinia";
import {useBuildGenerator} from "@/components/generator/buildingGenerator/Composables/BuildingGeneratorContent";
import useRandom from "@/composables/Random";
import {useBuildingStore} from "@/stores/BuildingStore";
import type {TableVariant, Variant} from "@/types/TableVariant";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import BaseCard from "@/components/common/BaseCard.vue";
import GeneratorResultElement from "@/components/generator/GeneratorResultElement.vue";
import BaseButton from "@/components/common/BaseButton.vue";

const {t} = useI18n({useScope: "global"});

const store = useBuildingStore();
const { building } = storeToRefs(store);

const buildingData = useBuildGenerator();
const { getRandomFromTable, getRandomTableVariant } = useRandom();

const generateRandom = () => {
  building.value.exteriorMaterial = getRandomFromTable(buildingData.getExteriorMaterial())
  building.value.exteriorDetails = getRandomFromTable(buildingData.getExteriorDetails())
  building.value.details = getRandomFromTable(buildingData.getDetails())
  building.value.items = getRandomFromTable(buildingData.getItems())

  const tableVariant : Variant = generateRandomVariant()
  if(tableVariant === (`common` as unknown as Variant)) {
    building.value.use = getRandomFromTable(buildingData.getCommonUse())
  }
  else {
    building.value.use = getRandomFromTable(buildingData.getRareUse())
  }
}

const generateRandomVariant = () => {
  const tablesVariants : TableVariant[] = [
    {
      tableTitle: `common`,
      rarity: 4
    },
    {
      tableTitle: `rare`,
      rarity: 2
    }
  ]
  return getRandomTableVariant(tablesVariants);
}
</script>

<template>
  <div class="building-generator_container">
    <div>
      <BaseTable v-model="building.exteriorMaterial" :table-data="buildingData.getExteriorMaterial()"/>
      <BaseTable v-model="building.exteriorDetails" :table-data="buildingData.getExteriorDetails()"/>
      <BaseTable v-model="building.use" :table-data="buildingData.getCommonUse()"/>
      <BaseTable v-model="building.use" :table-data="buildingData.getRareUse()"/>
      <BaseTable v-model="building.details" :table-data="buildingData.getDetails()"/>
      <BaseTable v-model="building.items" :table-data="buildingData.getItems()"/>
    </div>
    <BaseCard class="building-generator_base-card">
      <div class="building-generator_base-card-result">
        <span class="building-generator_title">{{t("generator-navigation.building").toLocaleUpperCase()}}</span>
        <GeneratorResultElement :title="t('buildings.exterior.material.title')" :value="building.exteriorMaterial"/>
        <GeneratorResultElement :title="t('buildings.exterior.details.title')" :value="building.exteriorDetails"/>
        <GeneratorResultElement :title="t('buildings.use.title')" :value="building.use"/>
        <GeneratorResultElement :title="t('buildings.details.title')" :value="building.details"/>
        <GeneratorResultElement :title="t('buildings.items.title')" :value="building.items"/>
      </div>
      <BaseButton :name="t('generator-ui.generate')" @click="generateRandom"/>
    </BaseCard>
  </div>
</template>

<style scoped lang='scss'>
.building-generator {
  &_container {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100%;
  }

  &_base-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 50vh;
    width: 20vw;
    position: fixed;
    right: 32px;
    top: 128px;
  }

  &_title {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 8px;
  }
  &_base-card-result {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-bottom: 24px;
  }
}
</style>