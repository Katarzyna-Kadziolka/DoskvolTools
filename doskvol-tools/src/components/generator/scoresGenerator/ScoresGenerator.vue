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

const copy = () => {
  navigator.clipboard.writeText(`${t('scores.client.title')}: ${score.value.client}\n` +
      `${t('scores.target.title')}: ${score.value.target}\n` +
      `${t('scores.work.title')}: ${score.value.work}\n` +
      `${t('scores.twistOrComplication.title')}: ${score.value.twistOrComplication}\n` +
      `${t('scores.connectedToPerson.title')}: ${score.value.connectedToPerson}\n` +
      `${t('scores.connectedToFactions.title')}: ${score.value.connectedToFactions}`)
}

</script>

<template>
  <BaseGenerator :title="t('generator-navigation.scores').toLocaleUpperCase()" @generateRandom="generateRandom" @copy="copy">
    <template v-slot:tables>
      <BaseTable v-model="score.client" :table-data="scoreData.getClientCivilian()" id="scoreClientCivilian"/>
      <BaseTable v-model="score.client" :table-data="scoreData.getClientCriminal()" id="scoreClientCriminal"/>
      <BaseTable v-model="score.client" :table-data="scoreData.getClientPolitical()" id="scoreClientPolitical"/>
      <BaseTable v-model="score.client" :table-data="scoreData.getClientStrange()" id="scoreClientStrange"/>
      <BaseTable v-model="score.target" :table-data="scoreData.getTargetCivilian()" id="scoreTargetCivilian"/>
      <BaseTable v-model="score.target" :table-data="scoreData.getTargetCriminal()" id="scoreTargetCriminal"/>
      <BaseTable v-model="score.target" :table-data="scoreData.getTargetPolitical()" id="scoreTargetPolitical"/>
      <BaseTable v-model="score.target" :table-data="scoreData.getTargetStrange()" id="scoreTargetStrange"/>
      <BaseTable v-model="score.work" :table-data="scoreData.getWorkSkullduggery()" id="scoreWorkSkullduggery"/>
      <BaseTable v-model="score.work" :table-data="scoreData.getWorkViolence()" id="scoreWorkViolence"/>
      <BaseTable v-model="score.work" :table-data="scoreData.getWorkUnderworld()" id="scoreWorkUnderworld"/>
      <BaseTable v-model="score.work" :table-data="scoreData.getWorkUnnatural()" id="scoreWorkUnnatural"/>
      <BaseTable v-model="score.twistOrComplication" :table-data="scoreData.getTwistOrComplication()" id="scoreTwistOrComplication"/>
      <BaseTable v-model="score.connectedToPerson" :table-data="scoreData.getConnectedToPerson()" id="scoreConnectedToPerson"/>
      <BaseTable v-model="score.connectedToFactions" :table-data="scoreData.getConnectedToFactions()" id="scoreConnectedToFactions"/>
    </template>
    <template v-slot:results>
      <GeneratorResultElement :title="t('scores.client.title')" :value="score.client" url="scoreClientCivilian" />
      <GeneratorResultElement :title="t('scores.target.title')" :value="score.target" url="scoreTargetCivilian" />
      <GeneratorResultElement :title="t('scores.work.title')" :value="score.work" url="scoreWorkSkullduggery" />
      <GeneratorResultElement :title="t('scores.twistOrComplication.title')" :value="score.twistOrComplication" url="scoreTwistOrComplication" />
      <GeneratorResultElement :title="t('scores.connectedToPerson.title')" :value="score.connectedToPerson" url="scoreConnectedToPerson" />
      <GeneratorResultElement :title="t('scores.connectedToFactions.title')" :value="score.connectedToFactions" url="scoreConnectedToFactions" />
    </template>
  </BaseGenerator>
</template>

<style scoped lang='scss'></style>