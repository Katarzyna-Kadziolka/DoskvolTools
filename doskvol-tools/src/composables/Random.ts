import type {TableData} from "@/components/common/baseTable/TableData";
import type {TableVariant, Variant} from "@/types/TableVariant";

export default function useRandom() {
   function getRandomInteger(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   function getRandomFromTable(table: TableData): string {
      const {getRandomInteger} = useRandom();
      const randomDiceResult = getRandomInteger(0, table.rows[table.rows.length - 1].diceResult.to);
      const randomRow = table.rows.find(x => randomDiceResult <= x.diceResult.to);
      if (randomRow === undefined) throw new Error("HELP");
      return randomRow.values[getRandomInteger(0, randomRow.values.length - 1)]
   }
   function getRandomTableVariant(tables: TableVariant[]): Variant {
      const {getRandomInteger} = useRandom();
      const tableToDraw : Variant[] = []
      for (let i = 0; i < tables.length; i++) {
         for (let j = 0; j < tables[i].rarity; j++) {
            tableToDraw.push(tables[i].tableTitle)
         }
      }
      const randomDiceResult = getRandomInteger(0, tableToDraw.length - 1);
      return tableToDraw[randomDiceResult];
   }
   return { getRandomInteger, getRandomFromTable, getRandomTableVariant }

}