import {defineStore} from "pinia";
import type {Score} from "@/components/generator/scoresGenerator/Score";

export const useScoreStore = defineStore('score', {
    state: () => ({
        score: {
            client: '',
            connectedToFactions: '',
            connectedToPerson: '',
            target: '',
            work: '',
            twistOrComplication: ''
        } as Score
    })
})