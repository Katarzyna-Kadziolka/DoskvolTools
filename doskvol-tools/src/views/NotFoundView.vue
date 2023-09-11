<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import BaseButton from "@/components/common/BaseButton.vue";
import {useRouter} from "vue-router";

const {t} = useI18n({useScope: "global"});
const router = useRouter();
</script>

<template>
  <div class="not-found-view_container">
    <div class="not-found-view_content-container">
      <span class="not-found-view_title">{{t('notFound.title')}}</span>
      <BaseButton :name="t('notFound.content')" @click="router.push({name: 'streetGenerator'})"/>
    </div>
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
  &_content-container {
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    justify-content: center;
    height: 100%;
    align-content: center;
    width: 25vw;
    row-gap: 2rem;
  }
  &_title {
    font-size: 1.8rem;
  }
}
</style>