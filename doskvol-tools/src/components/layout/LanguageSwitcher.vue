<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {ref} from "vue";

const {t} = useI18n({useScope: "global"});

const options = [
  "Polski",
  "English",
  "Habababababababababababababababababababbabab"
]
const myLanguage = ref(options[0])

</script>

<template>
  <div class="language-switcher_select">
    <select class="language-switcher_select-item">
      <option v-for="option in options" :value="option" :key="option" :selected="option===myLanguage">
        {{ option }}
      </option>
    </select>
    <span class="focus"></span>
  </div>
</template>

<style scoped lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  color: $color-primary;
  & option {
    margin: 80px;
    padding: 80px;
    background: $color-secondary;
    color: #FFEDE6;
    &:checked {
      color: $color-primary;
    }
    &::selection {
      background-color: #ff0000;
    }
  }
}

.language-switcher {
  &_select {
    width: 8vw;
    border: 1px solid $color-background;
    border-radius: 0.25em;
    font-size: 1rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: $color-secondary;
    display: grid;
    align-items: center;
    position: relative;
    &::after {
      content: "";
      width: 0.8em;
      height: 0.5em;
      background-color: $color-background;
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
      justify-self: end;
      position: absolute;
      right: 10px;
    }
  }
  &_select-item {
    padding: 8px 0px 8px 16px;
  }
}
</style>