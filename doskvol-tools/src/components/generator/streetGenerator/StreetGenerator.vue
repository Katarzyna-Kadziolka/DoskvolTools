<script setup lang='ts'>
import BaseRadioGroup from '../../common/baseRadio/BaseRadioGroup.vue'
import {ref} from 'vue'
import BaseButton from "@/components/common/BaseButton.vue";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import type {RadioOptions} from "@/components/common/baseRadio/RadioOptions";
import BaseCard from "@/components/common/BaseCard.vue";
import {useStreetStore} from "@/stores/StreetStore";
import {storeToRefs} from "pinia";
import {useI18n} from 'vue-i18n'
import {useStreetGeneratorContent} from "@/components/generator/streetGenerator/StreetGeneratorContent";

const {t} = useI18n({useScope: "global"});

const store = useStreetStore();
const { street } = storeToRefs(store);

const streetData = useStreetGeneratorContent();

</script>

<template>
  <div class="street-generator_container">
      <div>
        <BaseTable v-model="street.mood" :table-data="streetData.getMood()" />
        <BaseTable v-model="street.impressionsSights" :table-data="streetData.getImpressionsSights()" />
        <BaseTable v-model="street.impressionsSounds" :table-data="streetData.getImpressionsSounds()" />
        <BaseTable v-model="street.impressionsSmells" :table-data="streetData.getImpressionsSmells()" />
        <BaseTable v-model="street.use" :table-data="streetData.getUse()" />
        <BaseTable v-model="street.type" :table-data="streetData.getType()" />
        <BaseTable v-model="street.details" :table-data="streetData.getDetails()" />
        <BaseTable v-model="street.props" :table-data="streetData.getProps()" />
      </div>
    <BaseCard class="street-generator_base-card">
      <span>{{ t("streets.mood.title") }}: {{street.mood}}</span>
      <span>{{ t("streets.impressions-sights.title") }}: {{street.impressionsSights}}</span>
      <span>{{ t("streets.impressions-sounds.title") }}: {{street.impressionsSounds}}</span>
      <span>{{ t("streets.impressions-smells.title") }}: {{street.impressionsSmells}}</span>
      <span>{{ t("streets.use.title") }}: {{street.use}}</span>
      <span>{{ t("streets.type.title") }}: {{street.type}}</span>
      <span>{{ t("streets.details.title") }}: {{street.details}}</span>
      <span>{{ t("streets.props.title") }}: {{street.props}}</span>
      <BaseButton :name="t('generator-ui.generate')" class="street-generator_generate-button" />
    </BaseCard>
  </div>
</template>

<style scoped lang='scss'>
.street-generator {
  &_container {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100%;
  }
  &_base-card {
    display: flex;
    flex-direction: column;
    height: 50vh;
    width: 20vw;
    position: fixed;
    right: 32px;
    top:64px;
  }
  &_generate-button {

  }
}
</style>