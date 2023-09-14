<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import BaseSelect from "@/components/common/baseSelect/BaseSelect.vue";
import type {SelectOption} from "@/components/common/baseSelect/selectOption";
import {ref} from "vue";

const {t} = useI18n({useScope: "global"});

const options : SelectOption[] = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Polski',
    value: 'pl'
  }
];

const selectedOption = ref(options[0].label);

</script>

<template>
  <BaseSelect v-model="selectedOption" :options="options"/>
</template>

<style scoped lang="scss">

</style>