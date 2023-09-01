import { defineStore } from 'pinia'
import type {Street} from "@/components/generator/streetGenerator/Street";

export const useStreetStore = defineStore('street', {
  state: () => ({
    street: {
      use: '',
      details: '',
      impressionsSights: '',
      impressionsSmells: '',
      mood: '',
      type: '',
      impressionsSounds: '',
      props: ''
    } as Street
  }),
})
