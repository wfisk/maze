<script>
  import MazeDesigner from 'src/components/MazeDesigner.svelte';
  import Maze from 'src/collections/Maze';
  import { send, receive } from 'src/transitions/crossfade.js';

  export let params = {};

  let maze;
  let mazeStore = Maze.find( params.id );

  mazeStore.subscribe( it => maze = it );
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

{#if maze}
  <div class="container container-maze">
    <MazeDesigner id={params.id} {...maze}  />
  </div>

{:else}
Loading...

{/if}


