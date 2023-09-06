<script setup lang='ts'>
import {useI18n} from 'vue-i18n'
import {useDevilStore} from "@/stores/DevilStore";
import {storeToRefs} from "pinia";
import {useDevilGenerator} from "@/components/generator/devilGenerator/composables/DevilGeneratorContent";
import useRandom from "@/composables/Random";
import BaseGenerator from "@/components/generator/BaseGenerator.vue";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import GeneratorResultElement from "@/components/generator/GeneratorResultElement.vue";

const {t} = useI18n({useScope: "global"});

const store = useDevilStore();
const { devil } = storeToRefs(store);

const devilData = useDevilGenerator();
const { getRandomFromTable } = useRandom();

const generateRandom = () => {
  devil.value.name = getRandomFromTable(devilData.getNames());
  devil.value.affinity = getRandomFromTable(devilData.getAffinity());
  devil.value.demonAspect = getRandomFromTable(devilData.getDemonAspect());
  devil.value.demonDesires = getRandomFromTable(devilData.getDemonDesires());
  devil.value.demonFeature = getRandomFromTable(devilData.getDemonFeatures());
  devil.value.ghostlySecondaryEffect = getRandomFromTable(devilData.getGhostlySecondaryEffects());
  devil.value.summonedHorrors = getRandomFromTable(devilData.getSummonedHorrors());
  devil.value.traits = getRandomFromTable(devilData.getTraits());
}

</script>

<template>
  <BaseGenerator :title="t('generator-navigation.devil').toLocaleUpperCase()" @generateRandom="generateRandom">
    <template v-slot:tables>
      <BaseTable v-model="devil.name" :table-data="devilData.getNames()"/>
      <BaseTable v-model="devil.demonFeature" :table-data="devilData.getDemonFeatures()"/>
      <BaseTable v-model="devil.traits" :table-data="devilData.getTraits()"/>
      <BaseTable v-model="devil.ghostlySecondaryEffect" :table-data="devilData.getGhostlySecondaryEffects()"/>
      <BaseTable v-model="devil.demonAspect" :table-data="devilData.getDemonAspect()"/>
      <BaseTable v-model="devil.affinity" :table-data="devilData.getAffinity()"/>
      <BaseTable v-model="devil.demonDesires" :table-data="devilData.getDemonDesires()"/>
      <BaseTable v-model="devil.summonedHorrors" :table-data="devilData.getSummonedHorrors()"/>
    </template>
    <template v-slot:results>
      <GeneratorResultElement :title="t('devils.names.title')" :value="devil.name"/>
      <GeneratorResultElement :title="t('devils.demonFeatures.title')" :value="devil.demonFeature"/>
      <GeneratorResultElement :title="t('devils.traits.title')" :value="devil.traits"/>
      <GeneratorResultElement :title="t('devils.ghostlySecondaryEffects.title')" :value="devil.ghostlySecondaryEffect"/>
      <GeneratorResultElement :title="t('devils.demonAspect.title')" :value="devil.demonAspect"/>
      <GeneratorResultElement :title="t('devils.affinity.title')" :value="devil.affinity"/>
      <GeneratorResultElement :title="t('devils.demonDesires.title')" :value="devil.demonDesires"/>
      <GeneratorResultElement :title="t('devils.summonedHorrors.title')" :value="devil.summonedHorrors"/>
    </template>
  </BaseGenerator>
</template>

<style scoped lang='scss'></style>