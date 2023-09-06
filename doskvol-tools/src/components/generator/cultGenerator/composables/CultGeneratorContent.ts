import useGenerator from "@/components/generator/composables/Generator";
import type {TableData} from "@/components/common/baseTable/TableData";
import type {DiceResult} from "@/components/common/baseTable/TableData";

export function useCultGenerator() {
    const { getTableData } = useGenerator();
    function getForgottenGods() : TableData {
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
        return getTableData("cults.forgottenGods", diceResult);
    }
    function getCultPractices() : TableData {
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
        return getTableData("cults.cultPractices", diceResult);
    }
    return {
        getForgottenGods,
        getCultPractices
    }
}