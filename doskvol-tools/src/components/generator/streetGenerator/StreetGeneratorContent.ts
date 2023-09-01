import type {DiceResult, TableData} from "@/components/common/baseTable/TableData";
import {useI18n} from 'vue-i18n'

export function useStreetGenerator() {
    const {t} = useI18n({useScope: "global"});
    function getTableData(tableFullName: string, diceResults: DiceResult[]): TableData {
        const tableData : TableData = {
            title: t(`${tableFullName}.title`),
            rows: []
        };
        for (let i = 0; i < diceResults.length; i++) {
            tableData.rows.push({
                diceResult: diceResults[i],
                values: []
            })
            for (let j = 1; j < 7; j++) {
                tableData.rows[i].values.push(t(`${tableFullName}.${i+1}.${j}`))
            }
        }
        return tableData;
    }
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