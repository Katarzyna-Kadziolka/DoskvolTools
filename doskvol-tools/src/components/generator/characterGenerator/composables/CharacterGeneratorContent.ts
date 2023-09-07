import useGenerator from "@/components/generator/composables/Generator";
import type {DiceResult, TableData} from "@/components/common/baseTable/TableData";

export function useCharacterGenerator() {
    const { getTableData } = useGenerator();
    function getGenders() : TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("characters.gender", diceResult);
    }
    function getHeritages() : TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("characters.heritage", diceResult);
    }
    function getForeigners() : TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("characters.foreigners", diceResult);
    }
    function getLooks() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 1
            },
            {
                from:2,
                to: 2
            },
            {
                from: 3,
                to: 3
            },
            {
                from: 4,
                to: 4
            },
            {
                from: 5,
                to: 5
            },
            {
                from: 6,
                to: 6
            },
        ];
        return getTableData("characters.looks", diceResult);
    }
    function getStyles() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 1
            },
            {
                from:2,
                to: 2
            },
            {
                from: 3,
                to: 3
            },
            {
                from: 4,
                to: 4
            },
            {
                from: 5,
                to: 5
            },
            {
                from: 6,
                to: 6
            },
        ];
        return getTableData("characters.style", diceResult);
    }
    function getGoals() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 2
            },
            {
                from:3,
                to: 4
            },
            {
                from: 5,
                to: 6
            }
        ];
        return getTableData("characters.goals", diceResult);
    }
    function getPreferredMethods() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 2
            },
            {
                from:3,
                to: 4
            },
            {
                from: 5,
                to: 6
            }
        ];
        return getTableData("characters.preferredMethods", diceResult);
    }
    function getCommonProfessions() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 1
            },
            {
                from:2,
                to: 2
            },
            {
                from: 3,
                to: 3
            },
            {
                from: 4,
                to: 4
            },
            {
                from: 5,
                to: 5
            },
            {
                from: 6,
                to: 6
            },
        ];
        return getTableData("characters.professions.common", diceResult);
    }
    function getRareProfessions() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 1
            },
            {
                from:2,
                to: 2
            },
            {
                from: 3,
                to: 3
            },
            {
                from: 4,
                to: 4
            },
            {
                from: 5,
                to: 5
            },
            {
                from: 6,
                to: 6
            },
        ];
        return getTableData("characters.professions.rare", diceResult);
    }
    function getTraits() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 1
            },
            {
                from:2,
                to: 2
            },
            {
                from: 3,
                to: 3
            },
            {
                from: 4,
                to: 4
            },
            {
                from: 5,
                to: 5
            },
            {
                from: 6,
                to: 6
            },
        ];
        return getTableData("characters.traits", diceResult);
    }
    function getInterests() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 1
            },
            {
                from:2,
                to: 2
            },
            {
                from: 3,
                to: 3
            },
            {
                from: 4,
                to: 4
            },
            {
                from: 5,
                to: 5
            },
            {
                from: 6,
                to: 6
            },
        ];
        return getTableData("characters.interests", diceResult);
    }
    function getQuirks() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 1
            },
            {
                from:2,
                to: 2
            },
            {
                from: 3,
                to: 3
            },
            {
                from: 4,
                to: 4
            },
            {
                from: 5,
                to: 5
            },
            {
                from: 6,
                to: 6
            },
        ];
        return getTableData("characters.quirks", diceResult);
    }
    function getNames() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 1
            },
            {
                from:2,
                to: 2
            },
            {
                from: 3,
                to: 3
            },
            {
                from: 4,
                to: 4
            },
            {
                from: 5,
                to: 5
            },
            {
                from: 6,
                to: 6
            },
            {
                from: 7,
                to: 7
            },
            {
                from: 8,
                to: 8
            },
            {
                from: 9,
                to: 9
            },
            {
                from: 10,
                to: 10
            },
            {
                from: 11,
                to: 11
            },
            {
                from: 12,
                to: 12
            },
            {
                from: 13,
                to: 13
            },
            {
                from: 14,
                to: 14
            },
        ];
        return getTableData("characters.name", diceResult);
    }
    function getFamilyNames() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 1
            },
            {
                from:2,
                to: 2
            },
            {
                from: 3,
                to: 3
            },
            {
                from: 4,
                to: 4
            },
            {
                from: 5,
                to: 5
            },
            {
                from: 6,
                to: 6
            },
            {
                from: 7,
                to: 7
            },
            {
                from: 8,
                to: 8
            }
        ];
        return getTableData("characters.familyName", diceResult);
    }
    function getAliases() : TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 1
            },
            {
                from:2,
                to: 2
            },
            {
                from: 3,
                to: 3
            },
            {
                from: 4,
                to: 4
            },
            {
                from: 5,
                to: 5
            },
            {
                from: 6,
                to: 6
            },
        ];
        return getTableData("characters.alias", diceResult);
    }
    return {
        getGenders,
        getHeritages,
        getForeigners,
        getLooks,
        getStyles,
        getGoals,
        getPreferredMethods,
        getCommonProfessions,
        getRareProfessions,
        getTraits,
        getInterests,
        getQuirks,
        getNames,
        getFamilyNames,
        getAliases
    }
}