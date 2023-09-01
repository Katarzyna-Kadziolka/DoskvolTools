export interface TableData {
    title: string,
    rows: Row[]
}

export interface Row {
    diceResult: DiceResult,
    values: string[],
}
export interface DiceResult {
    from: number,
    to: number
}