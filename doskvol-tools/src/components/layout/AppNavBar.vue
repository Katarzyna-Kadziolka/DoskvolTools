<script setup lang='ts'>
import LanguageSwitcher from "@/components/layout/LanguageSwitcher.vue";

</script>

<template>
  <div class='app-nav-bar_container'>
    <img class='app-nav-bar_logo' src='@/assets/doskvol-tools-logo.png' alt='Doskvol Tools'>
    <LanguageSwitcher class="app-nav-bar_language-switcher"/>
  </div>
</template>

<style scoped lang='scss'>
.app-nav-bar {
  &_container {
    background: $color-secondary;
    padding-left: 16px;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $color-border;
  }
  &_logo {
    height: 3vh;
  }
  &_language-switcher {
    margin-right: 48px;
  }
}
</style>