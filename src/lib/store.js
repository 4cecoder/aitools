// src/lib/store.js
// import { writable } from 'svelte/store';
//
// // Create a custom store that syncs with localStorage
// function persistentStore(key, startValue) {
//     const storedValue = localStorage.getItem(key);
//     const initialValue = storedValue === null ? startValue : JSON.parse(storedValue);
//     const store = writable(initialValue);
//
//     store.subscribe(value => {
//         localStorage.setItem(key, JSON.stringify(value));
//     });
//
//     return store;
// }
//
// export const isLoggedIn = persistentStore('isLoggedIn', false);
// export const isSigningUp = writable(true);
