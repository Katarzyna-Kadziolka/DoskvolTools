<script setup lang="ts">

const b = {
  title: "coś",
  rows: [
    {
      diceResult: {
        from: 1,
        to: 2
      },
      values: [
        "cośA",
        "cośB",
        "cośC",
        "cośD",
        "cośE",
        "cośF",
        "coG",
      ]
    },
    {
      diceResult: {
        from: 3,
        to: 4
      },
      values: [
        "cośA",
        "cośB",
        "cośC",
        "cośD",
        "cośE",
        "cośF",
        "coG",
      ]
    },
    {
      diceResult: {
        from: 6,
        to: 6
      },
      values: [
        "cośA",
        "cośB",
        "cośC",
        "cośD",
        "cośE",
        "cośF",
        "coG",
      ]
    },
  ]
}

const tableSize = b.rows[0].values.length;

// function randomInteger(min: number, max: number) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// const randomDiceResult = randomInteger(0, b.rows[b.rows.length - 1].diceResult.to);
// const randomRow = b.rows.find(x => randomDiceResult <= x.diceResult.to);
// if (randomRow === undefined) throw new Error("HELP");
// const randomValue = randomRow.values[randomInteger(0, randomRow.values.length - 1)]
//to będzie logika do random

const formatDiceResult = (from: number, to: number): string => {
  if (from === to) return from.toString();
  return `${from}-${to}`;
}

</script>

<template>
  <table>
    <tr>
      <th>{{ b.title }}</th>
    </tr>
    <tr>
      <th></th>
      <th v-for="i in tableSize" :key="i">{{ i }}</th>
    </tr>
    <tr v-for="item in b.rows" :key="item.diceResult.from">
      <th>{{ formatDiceResult(item.diceResult.from, item.diceResult.to) }}</th>
      <td v-for="value in item.values" :key="value">{{ value }}</td>
    </tr>
  </table>
</template>

<style scoped lang="scss">

</style>