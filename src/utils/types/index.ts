import type Vue from 'vue'
import type { Pinia } from "pinia";

export interface OptionsTimeCountDown {
    isTimeRemain?: boolean,
    fullStrTime?: boolean
}

export interface AppOptions {
    callback: Function
}

// @ts-ignore
export interface App extends Vue {
    store?: Pinia,
    config?: any,
    use?: any
}

