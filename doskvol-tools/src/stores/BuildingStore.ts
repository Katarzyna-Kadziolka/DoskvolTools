import {defineStore} from "pinia";
import type {Building} from "@/components/generator/buildingGenerator/Building";

export const useBuildingStore = defineStore('building', {
    state: () => ({
        building: {
            exteriorMaterial: '',
            exteriorDetails: '',
            use: '',
            details: '',
            items: ''
        } as Building
    })
})