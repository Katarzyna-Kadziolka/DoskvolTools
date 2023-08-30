<script setup lang='ts'>
import BaseRadioGroup from '../../common/baseRadio/BaseRadioGroup.vue'
import {ref} from 'vue'
import BaseButton from "@/components/common/BaseButton.vue";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import type {RadioOptions} from "@/components/common/baseRadio/RadioOptions";
import BaseCard from "@/components/common/BaseCard.vue";

const commonness : RadioOptions[] = [
  {
    label: "Pospolity",
    value: "common"
  },
  {
    label: "Rzadki",
    value: "rare"
  }
]
const changes = ref("")

const tableData = {
  title: "Wygląd",
  rows: [
    {
      diceResult: {
        from: 1,
        to: 2
      },
      values: [
        "cośA",
        "cośB",
        "cośC",
        "cośD",
        "cośE",
        "cośF",
        "coG",
      ]
    },
    {
      diceResult: {
        from: 3,
        to: 4
      },
      values: [
        "cośAA",
        "cośBB",
        "cośCC",
        "cośDD",
        "cośEE",
        "cośFF",
        "coGG",
      ]
    },
    {
      diceResult: {
        from: 6,
        to: 6
      },
      values: [
        "cośAB",
        "cośBA",
        "cośCB",
        "cośDB",
        "cośEB",
        "cośFB",
        "coGB",
      ]
    },
  ]
}
const chosenValue = ref("")
</script>

<template>
  <div class="street-generator">
    <BaseRadioGroup  v-model="changes" name="commonness" :radioOptions="commonness"/>
    {{changes}}
    <BaseButton name="Wygeneruj" />
    <BaseTable :tableData="tableData" v-model="chosenValue" />
    <BaseCard>
      Test
    </BaseCard>
    {{chosenValue}}
  </div>

</template>

<style scoped lang='scss'>
.street-generator {
  margin-top: 50px;
}
</style>