<script setup lang='ts'>
import BaseRadioGroup from '../../common/baseRadio/BaseRadioGroup.vue'
import {ref} from 'vue'
import BaseButton from "@/components/common/BaseButton.vue";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import type {RadioOptions} from "@/components/common/baseRadio/RadioOptions";
import BaseCard from "@/components/common/BaseCard.vue";


</script>

<template>
  <div class="street-generator">
    <span>test</span>
    <span>test2</span>
  </div>

</template>

<style scoped lang='scss'>
.street-generator {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
</style>