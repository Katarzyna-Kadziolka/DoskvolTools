export interface TableData {
    title: string,
    rows: Row[]
}

interface Row {
    diceResult: DiceResult,
    values: string[],
}
interface DiceResult {
    from: number,
    to: number
}