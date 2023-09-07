import useGenerator from "@/components/generator/composables/Generator";
import type {TableData} from "@/components/common/baseTable/TableData";
import type {DiceResult} from "@/components/common/baseTable/TableData";

export function  useScoreGenerator() {
    const { getTableData } = useGenerator();
    function getClientCivilian(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.client.civilian", diceResult);
    }
    function getClientCriminal(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.client.criminal", diceResult);
    }
    function getClientPolitical(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.client.political", diceResult);
    }
    function getClientStrange(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.client.strange", diceResult);
    }
    function getTargetCivilian(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.target.civilian", diceResult);
    }
    function getTargetCriminal(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.target.criminal", diceResult);
    }
    function getTargetPolitical(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.target.political", diceResult);
    }
    function getTargetStrange(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.target.strange", diceResult);
    }
    function getWorkSkullduggery(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.work.skullduggery", diceResult);
    }
    function getWorkViolence(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.work.violence", diceResult);
    }
    function getWorkUnderworld(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.work.underworld", diceResult);
    }
    function getWorkUnnatural(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.work.unnatural", diceResult);
    }
    function getTwistOrComplication(): TableData {
        const diceResult : DiceResult[] = [
            {
                from: 1,
                to: 2
            },
            {
                from:3,
                to: 4
            },
            {
                from: 5,
                to: 6
            }
        ];
        return getTableData("scores.twistOrComplication", diceResult);
    }
    function getConnectedToPerson(): TableData {
        const diceResult : DiceResult[] = [{
            from: 1,
            to: 1
        }];
        return getTableData("scores.connectedToPerson", diceResult);
    }
    function getConnectedToFactions(): TableData {
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
        return getTableData("scores.connectedToFactions", diceResult);
    }
    return {
        getClientCivilian,
        getClientCriminal,
        getClientPolitical,
        getClientStrange,
        getTargetCivilian,
        getTargetCriminal,
        getTargetPolitical,
        getTargetStrange,
        getWorkSkullduggery,
        getWorkViolence,
        getWorkUnderworld,
        getWorkUnnatural,
        getTwistOrComplication,
        getConnectedToPerson,
        getConnectedToFactions
    }
}