import { writable } from 'svelte/store';

const currentMaze = writable( null );

export default currentMaze;