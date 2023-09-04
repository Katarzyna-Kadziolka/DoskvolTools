<script setup lang='ts'>
import {useI18n} from 'vue-i18n'
import {storeToRefs} from "pinia";
import {useBuildGenerator} from "@/components/generator/buildingGenerator/Composables/BuildingGeneratorContent";
import useRandom from "@/composables/Random";
import {useBuildingStore} from "@/stores/BuildingStore";

const {t} = useI18n({useScope: "global"});

const store = useBuildingStore();
const { building } = storeToRefs(store);

const buildingData = useBuildGenerator();
const { getRandomFromTable } = useRandom();

const generatorRandom = () => {
  
}
</script>

<template>
  <div>Building!</div>
</template>

<style scoped lang='scss'></style>