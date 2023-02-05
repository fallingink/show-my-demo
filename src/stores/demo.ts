import { defineStore } from 'pinia'

interface demo {
    demoType: string
}

export const useDemoStore = defineStore('demo', {
    state: (): demo => {
        return {
            demoType: sessionStorage.getItem('demoType') as string
        }
    },
    actions: {
        setDemoType(val: string): void {
            this.demoType = val;
            sessionStorage.setItem('demoType', val);
        },
    },
})