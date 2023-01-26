import { writable } from 'svelte/store';

export const state = writable({
        plan: 5,
        direction: 0,
        stopped: false,
    });