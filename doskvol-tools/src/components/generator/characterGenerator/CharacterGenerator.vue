<script setup lang='ts'>
import {useI18n} from 'vue-i18n'
import {useCharacterStore} from "@/stores/CharacterStore";
import {storeToRefs} from "pinia";
import {useCharacterGenerator} from "@/components/generator/characterGenerator/composables/CharacterGeneratorContent";
import useRandom from "@/composables/Random";
import type {TableVariant, Variant} from "@/types/TableVariant";
import BaseGenerator from "@/components/generator/BaseGenerator.vue";
import BaseTable from "@/components/common/baseTable/BaseTable.vue";
import GeneratorResultElement from "@/components/generator/GeneratorResultElement.vue";

const {t} = useI18n();

const store = useCharacterStore();
const { character } = storeToRefs(store);

const characterData = useCharacterGenerator();
const { getRandomFromTable, getRandomTableVariant } = useRandom();

const generateRandom = () => {
  character.value.alias = getRandomFromTable(characterData.getAliases());
  character.value.familyName = getRandomFromTable(characterData.getFamilyNames());
  character.value.gender = getRandomFromTable(characterData.getGenders());
  character.value.goals = getRandomFromTable(characterData.getGoals());
  character.value.name = getRandomFromTable(characterData.getNames());
  character.value.interests = getRandomFromTable(characterData.getInterests());
  character.value.looks = getRandomFromTable(characterData.getLooks());
  character.value.preferredMethods = getRandomFromTable(characterData.getPreferredMethods());
  character.value.quirks = getRandomFromTable(characterData.getQuirks());
  character.value.style = getRandomFromTable(characterData.getStyles());
  character.value.trait = getRandomFromTable(characterData.getTraits());
  character.value.heritage = getRandomFromTable(characterData.getHeritages());

  while (character.value.gender === t("characters.gender.1.6")) {
    character.value.gender = getRandomFromTable(characterData.getGenders());
  }

  if(character.value.heritage === t("characters.heritage.1.6")) {
    character.value.heritage = getRandomFromTable(characterData.getForeigners());
  }

  const tableVariant : Variant = generateRandomVariant()
  if(tableVariant === "common") {
    character.value.profession = getRandomFromTable(characterData.getCommonProfessions())
  }
  else {
    character.value.profession = getRandomFromTable(characterData.getRareProfessions())
  }
}

const generateRandomVariant = () => {
  const tablesVariants : TableVariant[] = [
    {
      tableTitle: "common",
      rarity: 5
    },
    {
      tableTitle: "rare",
      rarity: 1
    }
  ]
  return getRandomTableVariant(tablesVariants);
}

const copy = () => {
  navigator.clipboard.writeText(`${t('characters.gender.title')}: ${character.value.gender}\n` +
      `${t('characters.name.title')}: ${character.value.name}\n` +
      `${t('characters.familyName.title')}: ${character.value.familyName}\n` +
      `${t('characters.alias.title')}: ${character.value.alias}\n` +
      `${t('characters.heritage.title')}: ${character.value.heritage}\n` +
      `${t('characters.looks.title')}: ${character.value.looks}\n` +
      `${t('characters.style.title')}: ${character.value.style}\n` +
      `${t('characters.goals.title')}: ${character.value.goals}\n` +
      `${t('characters.preferredMethods.title')}: ${character.value.preferredMethods}\n` +
      `${t('characters.professions.title')}: ${character.value.profession}\n` +
      `${t('characters.traits.title')}: ${character.value.trait}\n` +
      `${t('characters.interests.title')}: ${character.value.interests}\n` +
      `${t('characters.quirks.title')}: ${character.value.quirks}`)
}

</script>

<template>
  <BaseGenerator :title="t('generator-navigation.character').toLocaleUpperCase()" @generateRandom="generateRandom" @copy="copy">
    <template v-slot:tables>
      <BaseTable v-model="character.gender" :table-data="characterData.getGenders()" id="characterGender"/>
      <BaseTable v-model="character.name" :table-data="characterData.getNames()" id="characterName"/>
      <BaseTable v-model="character.familyName" :table-data="characterData.getFamilyNames()" id="characterFamilyName"/>
      <BaseTable v-model="character.alias" :table-data="characterData.getAliases()" id="characterAlias"/>
      <BaseTable v-model="character.heritage" :table-data="characterData.getHeritages()" id="characterHeritage"/>
      <BaseTable v-model="character.heritage" :table-data="characterData.getForeigners()" id="characterForeigner"/>
      <BaseTable v-model="character.looks" :table-data="characterData.getLooks()" id="characterLook"/>
      <BaseTable v-model="character.style" :table-data="characterData.getStyles()" id="characterStyle"/>
      <BaseTable v-model="character.goals" :table-data="characterData.getGoals()" id="characterGoals"/>
      <BaseTable v-model="character.preferredMethods" :table-data="characterData.getPreferredMethods()" id="characterPreferredMethods"/>
      <BaseTable v-model="character.profession" :table-data="characterData.getCommonProfessions()" id="characterCommonProfessions"/>
      <BaseTable v-model="character.profession" :table-data="characterData.getRareProfessions()" id="characterRareProfessions"/>
      <BaseTable v-model="character.trait" :table-data="characterData.getTraits()" id="characterTraits"/>
      <BaseTable v-model="character.interests" :table-data="characterData.getInterests()" id="characterInterests"/>
      <BaseTable v-model="character.quirks" :table-data="characterData.getQuirks()" id="characterQuirks"/>
    </template>
    <template v-slot:results>
      <GeneratorResultElement :title="t('characters.gender.title')" :value="character.gender" url="characterGender" />
      <GeneratorResultElement :title="t('characters.name.title')" :value="character.name" url="characterName"/>
      <GeneratorResultElement :title="t('characters.familyName.title')" :value="character.familyName" url="characterFamilyName"/>
      <GeneratorResultElement :title="t('characters.alias.title')" :value="character.alias" url="characterAlias"/>
      <GeneratorResultElement :title="t('characters.heritage.title')" :value="character.heritage" url="characterHeritage"/>
      <GeneratorResultElement :title="t('characters.looks.title')" :value="character.looks" url="characterLook"/>
      <GeneratorResultElement :title="t('characters.style.title')" :value="character.style" url="characterStyle"/>
      <GeneratorResultElement :title="t('characters.goals.title')" :value="character.goals" url="characterGoals"/>
      <GeneratorResultElement :title="t('characters.preferredMethods.title')" :value="character.preferredMethods" url="characterPreferredMethods"/>
      <GeneratorResultElement :title="t('characters.professions.title')" :value="character.profession" url="characterCommonProfessions"/>
      <GeneratorResultElement :title="t('characters.traits.title')" :value="character.trait" url="characterTraits"/>
      <GeneratorResultElement :title="t('characters.interests.title')" :value="character.interests" url="characterInterests"/>
      <GeneratorResultElement :title="t('characters.quirks.title')" :value="character.quirks" url="characterQuirks"/>
    </template>
  </BaseGenerator>
</template>

<style scoped lang='scss'></style>