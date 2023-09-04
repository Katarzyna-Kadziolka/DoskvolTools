<script setup lang='ts'>
import BaseButton from "@/components/common/BaseButton.vue";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import BaseCard from "@/components/common/BaseCard.vue";
import {useStreetStore} from "@/stores/StreetStore";
import {storeToRefs} from "pinia";
import {useI18n} from 'vue-i18n'
import {useStreetGenerator} from "@/components/generator/streetGenerator/Composables/StreetGeneratorContent";
import GeneratorResultElement from "@/components/generator/GeneratorResultElement.vue";
import useRandom from "@/composables/Random";

const {t} = useI18n({useScope: "global"});

const store = useStreetStore();
const {street} = storeToRefs(store);

const streetData = useStreetGenerator();
const { getRandomFromTable } = useRandom();

const generateRandom = () => {
  street.value.mood = getRandomFromTable(streetData.getMood())
  street.value.impressionsSights = getRandomFromTable(streetData.getImpressionsSights())
  street.value.impressionsSounds = getRandomFromTable(streetData.getImpressionsSounds())
  street.value.impressionsSmells = getRandomFromTable(streetData.getImpressionsSmells())
  street.value.use = getRandomFromTable(streetData.getUse())
  street.value.type = getRandomFromTable(streetData.getType())
  street.value.details = getRandomFromTable(streetData.getDetails())
  street.value.props = getRandomFromTable(streetData.getProps())
}

</script>

<template>
  <div class="street-generator_container">
    <div>
      <BaseTable v-model="street.mood" :table-data="streetData.getMood()"/>
      <BaseTable v-model="street.impressionsSights" :table-data="streetData.getImpressionsSights()"/>
      <BaseTable v-model="street.impressionsSounds" :table-data="streetData.getImpressionsSounds()"/>
      <BaseTable v-model="street.impressionsSmells" :table-data="streetData.getImpressionsSmells()"/>
      <BaseTable v-model="street.use" :table-data="streetData.getUse()"/>
      <BaseTable v-model="street.type" :table-data="streetData.getType()"/>
      <BaseTable v-model="street.details" :table-data="streetData.getDetails()"/>
      <BaseTable v-model="street.props" :table-data="streetData.getProps()"/>
    </div>
    <BaseCard class="street-generator_base-card">
      <div class="street-generator_base-card-result">
        <span class="street-generator_title">{{t("generator-navigation.street").toLocaleUpperCase()}}</span>
        <GeneratorResultElement :title="t('streets.mood.title')" :value="street.mood"/>
        <GeneratorResultElement :title="t('streets.impressions.sights.title')" :value="street.impressionsSights"/>
        <GeneratorResultElement :title="t('streets.impressions.sounds.title')" :value="street.impressionsSounds"/>
        <GeneratorResultElement :title="t('streets.impressions.smells.title')" :value="street.impressionsSmells"/>
        <GeneratorResultElement :title="t('streets.use.title')" :value="street.use"/>
        <GeneratorResultElement :title="t('streets.type.title')" :value="street.type"/>
        <GeneratorResultElement :title="t('streets.details.title')" :value="street.details"/>
        <GeneratorResultElement :title="t('streets.props.title')" :value="street.props"/>
      </div>
      <BaseButton :name="t('generator-ui.generate')" @click="generateRandom"/>
    </BaseCard>
  </div>
</template>

<style scoped lang='scss'>
.street-generator {
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