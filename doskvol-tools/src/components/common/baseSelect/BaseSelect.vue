<script setup lang="ts">
import {ref} from "vue";
import type {SelectOption} from "@/components/common/baseSelect/selectOption";

defineProps<{
  modelValue: string,
  options: SelectOption[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string) : void
}>()

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
}
const selectValue = (option : string) => {
  emit('update:modelValue', option);
}

</script>

<template>
  <div class="base-select_container" @click="toggleDropdown">
    <div class="base-select_label">
      <span>{{modelValue}}</span>
      <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </div>

    <div
        class="base-select_dropdown"
        v-if="isDropdownOpen"
        :class="[isDropdownOpen ? 'base-select_dropdown-open' : '']"
    >
      <div
          v-for="option in options"
          :key="option"
          :class="[modelValue === option.label ? 'base-select_selected' : '']"
          class="base-select_option"
          @click="selectValue(option.label)"
      >
        {{option.label}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-select {
  &_container {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  &_dropdown {
    display: none;
    position: absolute;
    top: 130%;
    left: 0;
    background-color: $color-secondary;
    border: 1px solid $color-background;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    & div {
      padding: 8px;
      cursor: pointer;
    }
  }
  &_dropdown-open {
    display: block;
  }
  &_selected {
    color: $color-primary;
  }
  &_label {
    display: flex;
    align-items: center;
    column-gap: 24px;
  }
  &_option {
    &:hover {
      color: $color-primary
    }
  }
}
</style>