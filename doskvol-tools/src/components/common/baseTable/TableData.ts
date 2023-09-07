export interface TableData {
    title: string,
    rows: Row[]
}

export interface Row {
    diceResult: DiceResult,
    values: Cell[],
}
export interface DiceResult {
    from: number,
    to: number
}

export interface Cell {
    content: string,
    id: number
}