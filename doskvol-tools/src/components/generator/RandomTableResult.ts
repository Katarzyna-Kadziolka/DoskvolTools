import type {TableData} from "@/components/common/baseTable/TableData";
import randomInteger from "@/composables/Random";

export default function getRandomFromTable(table: TableData): string {
    const randomDiceResult = randomInteger(0, table.rows[table.rows.length - 1].diceResult.to);
    const randomRow = table.rows.find(x => randomDiceResult <= x.diceResult.to);
    if (randomRow === undefined) throw new Error("HELP");
    return randomRow.values[randomInteger(0, randomRow.values.length - 1)]
}