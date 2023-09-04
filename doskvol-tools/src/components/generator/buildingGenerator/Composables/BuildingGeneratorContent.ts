import type {DiceResult, TableData} from "@/components/common/baseTable/TableData";
import useGenerator from "@/components/generator/composables/Generator"

export function useBuildGenerator() {
    const { getTableData } = useGenerator();
    function getExteriorMaterial(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("buildings.exterior.material", diceResult);
    }
    function getExteriorDetails(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("buildings.exterior.details", diceResult);
    }
    function getCommonUse(): TableData {
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
        return getTableData("buildings.use.common", diceResult);
    }
    function getRareUse(): TableData {
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
        return getTableData("buildings.use.rare", diceResult);
    }
    function getDetails(): TableData {
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
        return getTableData("buildings.details", diceResult);
    }
    function getItems(): TableData {
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
            }
        ];
        return getTableData("buildings.items", diceResult);
    }
    return {
        getExteriorMaterial,
        getExteriorDetails,
        getCommonUse,
        getRareUse,
        getDetails,
        getItems
    }
}