import {defineStore} from "pinia";
import type {Devil} from "@/components/generator/devilGenerator/Devil";

export const useDevilStore = defineStore('devil', {
    state: () => ({
        devil: {
            name: '',
            affinity: '',
            demonAspect: '',
            demonDesires: '',
            demonFeature: '',
            ghostlySecondaryEffect: '',
            summonedHorrors: '',
            traits: ''
        } as Devil
    })
})