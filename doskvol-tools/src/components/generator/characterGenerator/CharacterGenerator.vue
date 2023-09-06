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

const {t} = useI18n({useScope: "global"});

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

</script>

<template>
  <BaseGenerator :title="t('generator-navigation.character').toLocaleUpperCase()" @generateRandom="generateRandom">
    <template v-slot:tables>
      <BaseTable v-model="character.gender" :table-data="characterData.getGenders()" />
      <BaseTable v-model="character.name" :table-data="characterData.getNames()" />
      <BaseTable v-model="character.familyName" :table-data="characterData.getFamilyNames()" />
      <BaseTable v-model="character.alias" :table-data="characterData.getAliases()" />
      <BaseTable v-model="character.heritage" :table-data="characterData.getHeritages()" />
      <BaseTable v-model="character.heritage" :table-data="characterData.getForeigners()" />
      <BaseTable v-model="character.looks" :table-data="characterData.getLooks()" />
      <BaseTable v-model="character.style" :table-data="characterData.getStyles()" />
      <BaseTable v-model="character.goals" :table-data="characterData.getGoals()" />
      <BaseTable v-model="character.preferredMethods" :table-data="characterData.getPreferredMethods()" />
      <BaseTable v-model="character.profession" :table-data="characterData.getCommonProfessions()" />
      <BaseTable v-model="character.profession" :table-data="characterData.getRareProfessions()" />
      <BaseTable v-model="character.trait" :table-data="characterData.getTraits()" />
      <BaseTable v-model="character.interests" :table-data="characterData.getInterests()" />
      <BaseTable v-model="character.quirks" :table-data="characterData.getQuirks()" />
    </template>
    <template v-slot:results>
      <GeneratorResultElement :title="t('characters.gender.title')" :value="character.gender" />
      <GeneratorResultElement :title="t('characters.name.title')" :value="character.name" />
      <GeneratorResultElement :title="t('characters.familyName.title')" :value="character.familyName" />
      <GeneratorResultElement :title="t('characters.alias.title')" :value="character.alias" />
      <GeneratorResultElement :title="t('characters.heritage.title')" :value="character.heritage" />
      <GeneratorResultElement :title="t('characters.looks.title')" :value="character.looks" />
      <GeneratorResultElement :title="t('characters.style.title')" :value="character.style" />
      <GeneratorResultElement :title="t('characters.goals.title')" :value="character.goals" />
      <GeneratorResultElement :title="t('characters.preferredMethods.title')" :value="character.preferredMethods" />
      <GeneratorResultElement :title="t('characters.professions.title')" :value="character.profession" />
      <GeneratorResultElement :title="t('characters.traits.title')" :value="character.trait" />
      <GeneratorResultElement :title="t('characters.interests.title')" :value="character.interests" />
      <GeneratorResultElement :title="t('characters.quirks.title')" :value="character.quirks" />
    </template>
  </BaseGenerator>
</template>

<style scoped lang='scss'></style>