<script setup lang='ts'>
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import {useStreetStore} from "@/stores/StreetStore";
import {storeToRefs} from "pinia";
import {useI18n} from 'vue-i18n'
import {useStreetGenerator} from "@/components/generator/streetGenerator/Composables/StreetGeneratorContent";
import GeneratorResultElement from "@/components/generator/GeneratorResultElement.vue";
import useRandom from "@/composables/Random";
import BaseGenerator from "@/components/generator/BaseGenerator.vue";

const {t} = useI18n();

const store = useStreetStore();
const {street} = storeToRefs(store);

const streetData = useStreetGenerator();
const { getRandomFromTable } = useRandom();

const generateRandom = () => {
  street.value.mood = getRandomFromTable(streetData.getMood());
  street.value.impressionsSights = getRandomFromTable(streetData.getImpressionsSights());
  street.value.impressionsSounds = getRandomFromTable(streetData.getImpressionsSounds());
  street.value.impressionsSmells = getRandomFromTable(streetData.getImpressionsSmells());
  street.value.use = getRandomFromTable(streetData.getUse());
  street.value.type = getRandomFromTable(streetData.getType());
  street.value.details = getRandomFromTable(streetData.getDetails());
  street.value.props = getRandomFromTable(streetData.getProps());
}

const copy = () => {
  navigator.clipboard.writeText(`${t('streets.mood.title')}: ${street.value.mood}\n` +
      `${t('streets.impressions.sights.title')}: ${street.value.impressionsSights}\n` +
      `${t('streets.impressions.sounds.title')}: ${street.value.impressionsSounds}\n` +
      `${t('streets.impressions.smells.title')}: ${street.value.impressionsSmells}\n` +
      `${t('streets.use.title')}: ${street.value.use}\n` +
      `${t('streets.type.title')}: ${street.value.type}\n` +
      `${t('streets.details.title')}: ${street.value.details}\n` +
      `${t('streets.props.title')}: ${street.value.props}`)
}

</script>

<template>
  <BaseGenerator :title="t('generator-navigation.street').toLocaleUpperCase()" @generateRandom="generateRandom" @copy="copy">
    <template v-slot:tables>
      <BaseTable v-model="street.mood" :table-data="streetData.getMood()" id="streetMood"/>
      <BaseTable v-model="street.impressionsSights" :table-data="streetData.getImpressionsSights()" id="streetImpressionsSights"/>
      <BaseTable v-model="street.impressionsSounds" :table-data="streetData.getImpressionsSounds()" id="streetImpressionsSounds"/>
      <BaseTable v-model="street.impressionsSmells" :table-data="streetData.getImpressionsSmells()" id="streetImpressionsSmells"/>
      <BaseTable v-model="street.use" :table-data="streetData.getUse()" id="streetUse"/>
      <BaseTable v-model="street.type" :table-data="streetData.getType()" id="streetType"/>
      <BaseTable v-model="street.details" :table-data="streetData.getDetails()" id="streetDetails"/>
      <BaseTable v-model="street.props" :table-data="streetData.getProps()" id="streetProps"/>
    </template>
    <template v-slot:results>
      <GeneratorResultElement :title="t('streets.mood.title')" :value="street.mood" url="streetMood"/>
      <GeneratorResultElement :title="t('streets.impressions.sights.title')" :value="street.impressionsSights" url="streetImpressionsSights"/>
      <GeneratorResultElement :title="t('streets.impressions.sounds.title')" :value="street.impressionsSounds" url="streetImpressionsSounds"/>
      <GeneratorResultElement :title="t('streets.impressions.smells.title')" :value="street.impressionsSmells" url="streetImpressionsSmells"/>
      <GeneratorResultElement :title="t('streets.use.title')" :value="street.use" url="streetUse"/>
      <GeneratorResultElement :title="t('streets.type.title')" :value="street.type" url="streetType"/>
      <GeneratorResultElement :title="t('streets.details.title')" :value="street.details" url="streetDetails"/>
      <GeneratorResultElement :title="t('streets.props.title')" :value="street.props" url="streetProps"/>
    </template>
  </BaseGenerator>
</template>