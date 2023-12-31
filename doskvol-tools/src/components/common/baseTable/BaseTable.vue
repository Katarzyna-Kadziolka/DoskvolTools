<script setup lang="ts">

import type {TableData} from "@/components/common/baseTable/TableData";
import {computed, ref, watchEffect} from "vue";

const props = defineProps<{
  modelValue: string,
  tableData: TableData,
  id: string,
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string) : void
}>()

const tableSize = props.tableData.rows[0].values.length;
const formatDiceResult = (from: number, to: number): string => {
  if (from === to) return from.toString();
  return `${from}-${to}`;
}

const chosenTableSection = ref(props.modelValue);
watchEffect(() => {
  chosenTableSection.value = props.modelValue
})
const onTdClick = (value : string) => {
  chosenTableSection.value = value;
  emit('update:modelValue', value);
}

const activeId = computed(() => {
  const activeCell = props.tableData.rows.flatMap(x => x.values).find(x => x.content === chosenTableSection.value);
  if(activeCell) return activeCell.id
  return -1;
})

</script>

<template>
  <span :id="id" class="th-header">{{ tableData.title }}</span>
  <table>
    <tr>
      <th></th>
      <th v-for="i in tableSize" :key="i">{{ i }}</th>
    </tr>
    <tr v-for="item in tableData.rows" :key="item.diceResult.from">
      <th>{{ formatDiceResult(item.diceResult.from, item.diceResult.to) }}</th>
      <td
          v-for="value in item.values"
          :key="value.id"
          @click="onTdClick(value.content)"
          :class="[activeId === value.id ? 'chosen' : '']"
      >{{ value.content }}</td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
table {
  margin-bottom: 32px;
  width: 100%;
  table-layout: fixed;
}
td, th {
  padding: 8px;
  border: 0;
}

td {
  cursor: pointer;
  word-wrap: break-word;

  &:hover {
    animation-name: hover-td;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }
  &.chosen {
    background: $color-primary;
  }
}
tr:nth-child(odd) {
  background-color: $color-background;
}
tr:nth-child(even) {
  background-color: $color-secondary;
}

.th-header {
  background-color: $color-background;
  font-size: 1.2rem;
  width: 100%;
  text-align: start;
  padding-left: 8px;
  scroll-margin-top: 10vh;
}

@keyframes hover-td {
  to {background-color: $color-primary;}
}
</style>