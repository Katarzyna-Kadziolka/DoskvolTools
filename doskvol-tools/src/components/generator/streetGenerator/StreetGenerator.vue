<script setup lang='ts'>
import BaseRadioButtons from '../../common/BaseRadioButtons.vue'
import {ref} from 'vue'

const commonness = ["Pospolity", "Rzadki"]
const changes = ref("")

const onPickedChanges = (pickedValues: string) => {
  changes.value = pickedValues
}

</script>

<template>
  <BaseRadioButtons  name="commonness" :values=commonness  @pickedChanged="onPickedChanges"/>
  {{changes}}
</template>

<style scoped lang='scss'></style>