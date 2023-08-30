<script setup lang="ts">

import type {TableData} from "@/components/common/baseTable/TableData";
import {ref} from "vue";

const props = defineProps<{
  tableData: TableData,
}>();

const emit = defineEmits<{
  (e: 'chosenTd', value: string)
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
const chosenTableSection = ref("");
const onTdClick = (value : string) => {
  chosenTableSection.value = value;
  emit('chosenTd', value);
}

</script>

<template>
  <table>
    <tr>
      <th class="th-header">{{ tableData.title }}</th>
    </tr>
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
  padding: 8px;
}
td, th {
  padding: 8px;
  border: 0;
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
tr:nth-child(even) {
  background-color: $color-background;
}
tr:nth-child(odd) {
  background-color: $color-secondary;
}

.th-header {
  background-color: $color-background;
  font-size: 1.5rem;
  text-align: center;
}

@keyframes hover-td {
  to {background-color: $color-primary;}
}
</style>