<script setup lang='ts'>
import BaseRadioButtons from '../../common/BaseRadioButtons.vue'
import {ref} from 'vue'
import BaseButton from "@/components/common/BaseButton.vue";

const commonness = ["Pospolity", "Rzadki"]
const changes = ref("")

const onPickedChanges = (pickedValues: string) => {
  changes.value = pickedValues
}

</script>

<template>
  <div class="street-generator">
    <BaseRadioButtons  name="commonness" :values=commonness  @pickedChanged="onPickedChanges"/>
    {{changes}}
    <BaseButton name="Wygeneruj" />
    
  </div>

</template>

<style scoped lang='scss'>
.street-generator {
  margin-top: 50px;
}
</style>