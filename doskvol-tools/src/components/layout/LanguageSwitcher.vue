<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import BaseSelect from "@/components/common/baseSelect/BaseSelect.vue";
import type {SelectOption} from "@/components/common/baseSelect/selectOption";
import {ref, watchEffect} from "vue";

const {locale} = useI18n();


const options: SelectOption[] = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Polski',
    value: 'pl'
  }
];
const currentLanguage = options.find((x) => x.value === locale.value)?.label ?? "en";
const selectedOption = ref(currentLanguage);

watchEffect(() => {
  locale.value = options.find((x) => x.label === selectedOption.value)!.value;
  console.log(locale.value)
  navigator.language
})

</script>

<template>
  <BaseSelect v-model="selectedOption" :options="options"/>
</template>
