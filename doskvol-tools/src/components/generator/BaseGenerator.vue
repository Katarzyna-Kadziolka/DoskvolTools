<script setup lang='ts'>
import {useI18n} from 'vue-i18n'
import BaseCard from "@/components/common/BaseCard.vue";
import BaseButton from "@/components/common/BaseButton.vue";

const {t} = useI18n();

defineProps<{
  title: string
}>()

defineEmits<{
  (event: 'generateRandom'): void;
  (event: 'copy'): void;
}>()
</script>

<template>
  <div class="base-generator_container">
    <div>
      <slot name="tables"></slot>
    </div>
    <BaseCard class="base-generator_base-card">
      <div class="base-generator_base-card-result">
        <span class="base-generator_title">{{ title }}</span>
        <slot name="results"></slot>
      </div>
      <div class="base-generator_buttons-container">
        <BaseButton :name="t('generator-ui.generate')" @click="$emit('generateRandom')" isPrimary/>
        <BaseButton :name="t('generator-ui.copy')" @click="$emit('copy')"/>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped lang='scss'>
.base-generator {
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
    top: 9vh;
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
    margin-bottom: 32px;
  }

  &_buttons-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
  }
}
</style>