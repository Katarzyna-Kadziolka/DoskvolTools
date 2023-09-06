import {defineStore} from "pinia";
import type {Cult} from "@/components/generator/cultGenerator/Cult";

export const useCultStore = defineStore('cult', {
    state: () => ({
        cult: {
            practice: '',
            forgottenGod: ''
        } as Cult
    })
})