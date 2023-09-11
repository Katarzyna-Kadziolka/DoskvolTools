<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import BaseButton from "@/components/common/BaseButton.vue";

const {t} = useI18n({useScope: "global"});
</script>

<template>
  <div class="not-found-view_container">
      <span>{{t('notFound.title')}}</span>
      <BaseButton :name="t('notFound.content')" />
  </div>
</template>

<style scoped lang="scss">
.not-found-view {
  &_container {
    background: url(../assets/blades.jpg) ;
    position: fixed;
    height: 100%;
    width: 100%;
    background-size: cover;
  }
}
</style>