<script>
  import { onMount } from 'svelte';
  import { collectionData } from 'rxfire/firestore';
  import { groupBy, map, startWith } from 'rxjs/operators';
  import { send, receive } from 'src/transitions/crossfade.js';
  
  import { firestore } from 'src/services/firebase';
  import Maze from 'src/collections/Maze.js';
  import MazeDesigner from 'src/components/MazeDesigner.svelte';
  

  function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}
let mazes = Maze.findAll();


</script>

<style>
  input { display: block }


  .column {

  }
</style>

<div class="container">
  <div class="columns is-multiline">
    {#each $mazes as maze}
      <div class="column is-one-third">
        <div class="card">
          <a href="#/maze/{maze.id}"><h2>{maze.name}</h2></a>
          <MazeDesigner {...maze} />
        </div>
      </div>
    {/each}  
  </div>
</div>


