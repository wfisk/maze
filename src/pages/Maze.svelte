<script>
  import MazeDesigner from 'src/components/MazeDesigner.svelte';
  import Maze from 'src/collections/Maze';
  import {send, receive} from 'src/transitions/crossfade.js';

  export let params = {};
  $: console.log({ params });
  $: maze = Maze.find( params.id );
  $: console.log( { maze } )
</script>

<style global lang="scss" >
  .container-maze {
    display: flex;
    justify-content: center;
    max-height: 80vh;
    position: absolute;
    width: 100%;
  }
</style>

<h1 class="title">Maze</h1>

{#await maze}
  loading...
{:then maze}
  <div class="container container-maze">
    <MazeDesigner {...maze} />
  </div>

{:catch}
error

{/await}


