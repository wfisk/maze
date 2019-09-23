<script>
  import MazeDesigner from 'src/components/MazeDesigner.svelte';
  import Maze from 'src/collections/Maze';
  import {send, receive} from 'src/transitions/crossfade.js';


  export let router = {};

  $: params = router.params
  $: console.log({ router });

  // Those contains useful information about current route status
  // router.path; // /test
  // router.route; // Route Object
  // router.params; // /about/bill/123/kansas { who: 'bill', where: 'kansas' }


  $: maze = Maze.find( params.id );

  $: console.log( { maze } )
</script>

<style>
  .container {
    position: absolute;
  }
</style>

<h1 class="title">Maze</h1>

{#await maze}
  loading...
{:then maze}
<div class="container">
    <MazeDesigner {...maze} />
</div>

{:catch}
error

{/await}


