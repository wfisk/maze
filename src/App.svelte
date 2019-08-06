<script>
  export let name;

  import 'bulma/css/bulma.css'
  import { Button } from 'svelma' 
  import Maze from './Maze.svelte';
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<section class="section">
  <div class="container">
    <h1 class="title">Maze</h1>
    <h2 class="subtitle">
      A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
    </h2>
    <Button>Hello</Button>

    <Maze />
  </div>
</section>


