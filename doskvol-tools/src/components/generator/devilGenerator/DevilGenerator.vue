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

const copy = () => {
  navigator.clipboard.writeText(`${t('devils.names.title')}: ${devil.value.name}\n` +
      `${t('devils.demonFeatures.title')}: ${devil.value.demonFeature}\n` +
      `${t('devils.traits.title')}: ${devil.value.traits}\n` +
      `${t('devils.ghostlySecondaryEffects.title')}: ${devil.value.ghostlySecondaryEffect}\n` +
      `${t('devils.demonAspect.title')}: ${devil.value.demonAspect}\n` +
      `${t('devils.affinity.title')}: ${devil.value.affinity}\n` +
      `${t('devils.demonDesires.title')}: ${devil.value.demonDesires}\n` +
      `${t('devils.summonedHorrors.title')}: ${devil.value.summonedHorrors}`)
}
</script>

<template>
  <BaseGenerator :title="t('generator-navigation.devil').toLocaleUpperCase()" @generateRandom="generateRandom" @copy="copy">
    <template v-slot:tables>
      <BaseTable v-model="devil.name" :table-data="devilData.getNames()" id="devilNames"/>
      <BaseTable v-model="devil.demonFeature" :table-data="devilData.getDemonFeatures()" id="devilDemonFeatures" />
      <BaseTable v-model="devil.traits" :table-data="devilData.getTraits()" id="devilTraits" />
      <BaseTable v-model="devil.ghostlySecondaryEffect" :table-data="devilData.getGhostlySecondaryEffects()" id="devilGhostlySecondaryEffects" />
      <BaseTable v-model="devil.demonAspect" :table-data="devilData.getDemonAspect()" id="devilDemonAspect" />
      <BaseTable v-model="devil.affinity" :table-data="devilData.getAffinity()" id="devilAffinity" />
      <BaseTable v-model="devil.demonDesires" :table-data="devilData.getDemonDesires()" id="devilDemonDesires" />
      <BaseTable v-model="devil.summonedHorrors" :table-data="devilData.getSummonedHorrors()" id="devilSummonedHorrors" />
    </template>
    <template v-slot:results>
      <GeneratorResultElement :title="t('devils.names.title')" :value="devil.name" url="devilNames"/>
      <GeneratorResultElement :title="t('devils.demonFeatures.title')" :value="devil.demonFeature" url="devilDemonFeatures"/>
      <GeneratorResultElement :title="t('devils.traits.title')" :value="devil.traits" url="devilTraits"/>
      <GeneratorResultElement :title="t('devils.ghostlySecondaryEffects.title')" :value="devil.ghostlySecondaryEffect" url="devilGhostlySecondaryEffects"/>
      <GeneratorResultElement :title="t('devils.demonAspect.title')" :value="devil.demonAspect" url="devilDemonAspect"/>
      <GeneratorResultElement :title="t('devils.affinity.title')" :value="devil.affinity" url="devilAffinity"/>
      <GeneratorResultElement :title="t('devils.demonDesires.title')" :value="devil.demonDesires" url="devilDemonDesires"/>
      <GeneratorResultElement :title="t('devils.summonedHorrors.title')" :value="devil.summonedHorrors" url="devilSummonedHorrors"/>
    </template>
  </BaseGenerator>
</template>

<style scoped lang='scss'></style>