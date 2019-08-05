<script>
  export let name;
  import Maze from './Maze.svelte';
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Bye {name}!</h1>

<Maze />
