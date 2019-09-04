<script>
  import MazeDesigner from 'src/components/MazeDesigner.svelte';
  import Maze from 'src/collections/Maze';

  export let params={};

  let maze = Maze.find( params.id );

  $: console.log( { maze } )
</script>

<h1 class="title">Maze</h1>

{#await maze}
  loading...
{:then maze}

<MazeDesigner {...maze} />


{:catch}
error

{/await}


