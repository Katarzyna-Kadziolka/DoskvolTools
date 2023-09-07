import useGenerator from "@/components/generator/composables/Generator";
import type {DiceResult, TableData} from "@/components/common/baseTable/TableData";

export function useDevilGenerator() {
    const { getTableData } = useGenerator();
    function getNames(): TableData {
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
        return getTableData("devils.names", diceResult);
    }
    function getDemonFeatures(): TableData {
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
        return getTableData("devils.demonFeatures", diceResult);
    }
    function getTraits(): TableData {
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
            }
        ];
        return getTableData("devils.traits", diceResult);
    }
    function getGhostlySecondaryEffects(): TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 3
            },
            {
                from:4,
                to: 5
            },
            {
                from: 6,
                to: 6
            }
        ];
        return getTableData("devils.ghostlySecondaryEffects", diceResult);
    }
    function getDemonAspect(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("devils.demonAspect", diceResult);
    }
    function getAffinity(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("devils.affinity", diceResult);
    }
    function getDemonDesires(): TableData {
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
        return getTableData("devils.demonDesires", diceResult);
    }
    function getSummonedHorrors(): TableData {
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
            }
        ];
        return getTableData("devils.summonedHorrors", diceResult);
    }
    return {
        getNames,
        getDemonFeatures,
        getTraits,
        getGhostlySecondaryEffects,
        getDemonAspect,
        getAffinity,
        getDemonDesires,
        getSummonedHorrors
    }
}