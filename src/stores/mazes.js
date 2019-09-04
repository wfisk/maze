import { writable } from 'svelte/store';

const currentMaze = writable( [] );

export default currentMaze;