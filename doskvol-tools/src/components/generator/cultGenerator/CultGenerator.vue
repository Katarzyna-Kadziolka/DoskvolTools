<script setup lang='ts'>
import {useI18n} from 'vue-i18n'
import {useCultStore} from "@/stores/CultStore";
import {storeToRefs} from "pinia";
import {useCultGenerator} from "@/components/generator/cultGenerator/composables/CultGeneratorContent";
import useRandom from "@/composables/Random";
import BaseGenerator from "@/components/generator/BaseGenerator.vue";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import GeneratorResultElement from "@/components/generator/GeneratorResultElement.vue";

const {t} = useI18n({useScope: "global"});

const store = useCultStore();
const { cult } = storeToRefs(store);

const cultData = useCultGenerator();
const { getRandomFromTable } = useRandom();

const generateRandom = () => {
  cult.value.forgottenGod = getRandomFromTable(cultData.getForgottenGods());
  cult.value.practice = getRandomFromTable(cultData.getCultPractices());
}

</script>

<template>
  <BaseGenerator :title="t('generator-navigation.cult').toLocaleUpperCase()" @generateRandom="generateRandom">
    <template v-slot:tables>
      <BaseTable v-model="cult.forgottenGod" :table-data="cultData.getForgottenGods()" id="cultForgottenGods"/>
      <BaseTable v-model="cult.practice" :table-data="cultData.getCultPractices()" id="cultPractices"/>
    </template>
    <template v-slot:results>
      <GeneratorResultElement :title="t('cults.forgottenGods.title')" :value="cult.forgottenGod" url="cultForgottenGods"/>
      <GeneratorResultElement :title="t('cults.cultPractices.title')" :value="cult.practice" url="cultPractices"/>
    </template>
  </BaseGenerator>
</template>

<style scoped lang='scss'></style>