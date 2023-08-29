<script setup lang='ts'>
import BaseRadioGroup from '../../common/baseRadio/BaseRadioGroup.vue'
import {ref} from 'vue'
import BaseButton from "@/components/common/BaseButton.vue";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import type {RadioOptions} from "@/components/common/baseRadio/RadioOptions";

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

</script>

<template>
  <div class="street-generator">
    <BaseRadioGroup  v-model="changes" name="commonness" :radioOptions="commonness"/>
    {{changes}}
    <BaseButton name="Wygeneruj" />
    <BaseTable />
  </div>

</template>

<style scoped lang='scss'>
.street-generator {
  margin-top: 50px;
}
</style>