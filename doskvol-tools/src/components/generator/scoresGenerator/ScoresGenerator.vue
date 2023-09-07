<script setup lang='ts'>
import {useI18n} from 'vue-i18n'
import {useScoreStore} from "@/stores/ScoreStore";
import {storeToRefs} from "pinia";
import {useScoreGenerator} from "@/components/generator/scoresGenerator/composables/ScoreGeneratorContent";
import useRandom from "@/composables/Random";
import type {TableVariant, Variant} from "@/types/TableVariant";
import BaseGenerator from "@/components/generator/BaseGenerator.vue";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import GeneratorResultElement from "@/components/generator/GeneratorResultElement.vue";

const {t} = useI18n({useScope: "global"});

const store = useScoreStore();
const { score } = storeToRefs(store);

const scoreData = useScoreGenerator();
const { getRandomFromTable, getRandomTableVariant } = useRandom();

const generateRandom = () => {
  score.value.connectedToFactions = getRandomFromTable(scoreData.getConnectedToFactions());
  score.value.connectedToPerson = getRandomFromTable(scoreData.getConnectedToPerson());
  score.value.twistOrComplication = getRandomFromTable(scoreData.getTwistOrComplication());

  const clientType = generateRandomClient();
  const targetType = generateRandomTargetType();
  const workType = generateRandomWorkType();

  setClientType(clientType);
  setTargetType(targetType);
  setWorkType(workType);
}
const setWorkType = (workType: Variant) => {
  switch (workType) {
    case "skullduggery": {
      score.value.work = getRandomFromTable(scoreData.getWorkSkullduggery());
      break;
    }
    case "violence": {
      score.value.work = getRandomFromTable(scoreData.getWorkViolence());
      break;
    }
    case "underworld": {
      score.value.work = getRandomFromTable(scoreData.getWorkUnderworld());
      break;
    }
    case "unnatural": {
      score.value.work = getRandomFromTable(scoreData.getWorkUnnatural());
      break;
    }
  }
}
const setClientType = (clientType: Variant) => {
  switch (clientType) {
    case "civilian": {
      score.value.client = getRandomFromTable(scoreData.getClientCivilian());
      break;
    }
    case "criminal": {
      score.value.client = getRandomFromTable(scoreData.getClientCriminal());
      break;
    }
    case "political": {
      score.value.client = getRandomFromTable(scoreData.getClientPolitical());
      break;
    }
    case "strange": {
      score.value.client = getRandomFromTable(scoreData.getClientStrange());
      break;
    }
  }
}
const setTargetType = (targetType: Variant) => {
  switch (targetType) {
    case "civilian": {
      score.value.target = getRandomFromTable(scoreData.getTargetCivilian());
      break;
    }
    case "criminal": {
      score.value.target = getRandomFromTable(scoreData.getTargetCriminal());
      break;
    }
    case "political": {
      score.value.target = getRandomFromTable(scoreData.getTargetPolitical());
      break;
    }
    case "strange": {
      score.value.target = getRandomFromTable(scoreData.getTargetStrange());
      break;
    }
  }
}
const generateRandomClient = () => {
  const tablesVariants : TableVariant[] = [
    {
      tableTitle: "civilian",
      rarity: 1
    },
    {
      tableTitle: "criminal",
      rarity: 1
    },
    {
      tableTitle: "political",
      rarity: 1
    },
    {
      tableTitle: "strange",
      rarity: 1
    },
  ]
  return getRandomTableVariant(tablesVariants);
}
const generateRandomTargetType = () => {
  const tablesVariants : TableVariant[] = [
    {
      tableTitle: "civilian",
      rarity: 1
    },
    {
      tableTitle: "criminal",
      rarity: 1
    },
    {
      tableTitle: "political",
      rarity: 1
    },
    {
      tableTitle: "strange",
      rarity: 1
    },
  ]
  return getRandomTableVariant(tablesVariants);
}

const generateRandomWorkType = () => {
  const tablesVariants : TableVariant[] = [
    {
      tableTitle: "skullduggery",
      rarity: 1
    },
    {
      tableTitle: "violence",
      rarity: 1
    },
    {
      tableTitle: "underworld",
      rarity: 1
    },
    {
      tableTitle: "unnatural",
      rarity: 1
    },
  ]
  return getRandomTableVariant(tablesVariants);
}

</script>

<template>
  <BaseGenerator :title="t('generator-navigation.scores').toLocaleUpperCase()" @generateRandom="generateRandom">
    <template v-slot:tables>
      <BaseTable v-model="score.client" :table-data="scoreData.getClientCivilian()" />
      <BaseTable v-model="score.client" :table-data="scoreData.getClientCriminal()" />
      <BaseTable v-model="score.client" :table-data="scoreData.getClientPolitical()" />
      <BaseTable v-model="score.client" :table-data="scoreData.getClientStrange()" />
      <BaseTable v-model="score.target" :table-data="scoreData.getTargetCivilian()" />
      <BaseTable v-model="score.target" :table-data="scoreData.getTargetCriminal()" />
      <BaseTable v-model="score.target" :table-data="scoreData.getTargetPolitical()" />
      <BaseTable v-model="score.target" :table-data="scoreData.getTargetStrange()" />
      <BaseTable v-model="score.work" :table-data="scoreData.getWorkSkullduggery()" />
      <BaseTable v-model="score.work" :table-data="scoreData.getWorkViolence()" />
      <BaseTable v-model="score.work" :table-data="scoreData.getWorkUnderworld()" />
      <BaseTable v-model="score.work" :table-data="scoreData.getWorkUnnatural()" />
      <BaseTable v-model="score.twistOrComplication" :table-data="scoreData.getTwistOrComplication()" />
      <BaseTable v-model="score.connectedToPerson" :table-data="scoreData.getConnectedToPerson()" />
      <BaseTable v-model="score.connectedToFactions" :table-data="scoreData.getConnectedToFactions()" />
    </template>
    <template v-slot:results>
      <GeneratorResultElement :title="t('scores.client.title')" :value="score.client" />
      <GeneratorResultElement :title="t('scores.target.title')" :value="score.target" />
      <GeneratorResultElement :title="t('scores.work.title')" :value="score.work" />
      <GeneratorResultElement :title="t('scores.twistOrComplication.title')" :value="score.twistOrComplication" />
      <GeneratorResultElement :title="t('scores.connectedToPerson.title')" :value="score.connectedToPerson" />
      <GeneratorResultElement :title="t('scores.connectedToFactions.title')" :value="score.connectedToFactions" />
    </template>
  </BaseGenerator>
</template>

<style scoped lang='scss'></style>