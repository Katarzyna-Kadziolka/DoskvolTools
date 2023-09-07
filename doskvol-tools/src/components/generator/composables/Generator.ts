import type {TableData} from "@/components/common/baseTable/TableData";
import type {DiceResult} from "@/components/common/baseTable/TableData";
import {useI18n} from 'vue-i18n'
import UniqueID from "@/composables/UniqueID";

export default function useGenerator() {

    const {t} = useI18n({useScope: "global"});
    const { getID } = UniqueID()
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
                tableData.rows[i].values.push({
                    content: t(`${tableFullName}.${i+1}.${j}`),
                    id: getID()
                })
            }
        }
        return tableData;
    }
    return {
        getTableData
    }
}