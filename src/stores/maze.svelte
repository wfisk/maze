import { writable } from 'svelte/store';

export const count = writable({
  columnCount: 0,
  rowCount : 0,
  spaces: []  
});