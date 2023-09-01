import type {DiceResult, TableData} from "@/components/common/baseTable/TableData";
import {useI18n} from 'vue-i18n'
import useGenerator from "@/components/generator/composables/Generator";

export function useStreetGenerator() {
    const {t} = useI18n({useScope: "global"});
    const { getTableData } = useGenerator();
    function getMood(): TableData {
        const diceResult : DiceResult[] = [{
                from: 1,
                to: 1
        }];
        return getTableData("streets.mood", diceResult)
    }

    function getImpressionsSights(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("streets.impressions.sights", diceResult)
    }

    function getImpressionsSounds(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("streets.impressions.sounds", diceResult)
    }

    function getImpressionsSmells(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("streets.impressions.smells", diceResult)
    }

    function getUse(): TableData {
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
        return getTableData("streets.use", diceResult)
    }

    function getType(): TableData {
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
        return getTableData("streets.type", diceResult)
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
        return getTableData("streets.details", diceResult)
    }

    function getProps(): TableData {
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
        ];
        return getTableData("streets.props", diceResult)
    }

    return {
        getMood,
        getImpressionsSights,
        getImpressionsSounds,
        getImpressionsSmells,
        getUse,
        getType,
        getDetails,
        getProps
    }
}