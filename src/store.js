import { writable } from 'svelte/store';

export const state = writable({
        piano: 5,
        direzione: 0,
    });