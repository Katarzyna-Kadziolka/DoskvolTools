<script setup lang="ts">

import type {TableData} from "@/components/common/baseTable/TableData";
import {ref} from "vue";

const props = defineProps<{
  modelValue: string,
  tableData: TableData,
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string) : void
}>()

const tableSize = props.tableData.rows[0].values.length;

// function randomInteger(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// const randomDiceResult = randomInteger(0, b.rows[b.rows.length - 1].diceResult.to);
// const randomRow = b.rows.find(x => randomDiceResult <= x.diceResult.to);
// if (randomRow === undefined) throw new Error("HELP");
// const randomValue = randomRow.values[randomInteger(0, randomRow.values.length - 1)]
//to będzie logika do random
//TODO przenieść do odpowiedniego pliku
const formatDiceResult = (from: number, to: number): string => {
  if (from === to) return from.toString();
  return `${from}-${to}`;
}
const chosenTableSection = ref(props.modelValue);
const onTdClick = (value : string) => {
  chosenTableSection.value = value;
  emit('update:modelValue', value);
}

</script>

<template>
  <span class="th-header">{{ tableData.title }}</span>
  <table>
    <tr>
      <th></th>
      <th v-for="i in tableSize" :key="i">{{ i }}</th>
    </tr>
    <tr v-for="item in tableData.rows" :key="item.diceResult.from">
      <th>{{ formatDiceResult(item.diceResult.from, item.diceResult.to) }}</th>
      <td
          v-for="value in item.values"
          :key="value"
          @click="onTdClick(value)"
          :class="[chosenTableSection === value ? 'chosen' : '']"
      >{{ value }}</td>
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
th {
  min-width: 32px;
}
td {
  cursor: pointer;

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
}

@keyframes hover-td {
  to {background-color: $color-primary;}
}
</style>