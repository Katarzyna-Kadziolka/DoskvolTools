import {defineStore} from "pinia";
import type {Character} from "@/components/generator/characterGenerator/Character";

export const useCharacterStore = defineStore('character', {
    state: () => ({
        character: {
            name: '',
            alias: '',
            familyNames: '',
            gender: '',
            goals: '',
            heritage: '',
            interests: '',
            looks: '',
            preferredMethods: '',
            profession: '',
            quirks: '',
            style: '',
            trait: '',
        } as Character
    })
})