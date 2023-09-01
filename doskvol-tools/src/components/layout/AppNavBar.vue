<script setup lang='ts'>

</script>

<template>
  <div class='app-nav-bar_container'>
    <img class='app-nav-bar_logo' src='@/assets/doskvol-tools-logo.png' alt='Doskvol Tools'>
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
    border-bottom: 1px solid $color-border;
  }
  &_logo {
    height: 3vh;
  }
}
</style>