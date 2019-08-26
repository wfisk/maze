<script>
  import { onMount } from 'svelte';
  import { collectionData } from 'rxfire/firestore';
  import { startWith } from 'rxjs/operators';
  
  import { firestore } from 'src/services/firebase';
  import Maze from 'src/collections/Maze.js';
  import MazeDesigner from 'src/components/MazeDesigner.svelte';
  import MazePlayer from 'src/components/MazePlayer.svelte';

  
  // User ID passed from parent
  // export let uid;

  // Form Text
  // let text = 'some task';

  // function add() {
  //     firestore.collection('mazes').add({ uid, text, complete: false, created: Date.now() });
  //     text = '';
  // }

  // function updateStatus(event) {
  //     const { id, newStatus } = event.detail;
  //     firestore.collection('mazes').doc(id).update({ complete: newStatus });
  // }

  // function removeItem(event) {
  //     const { id } = event.detail;
  //     firestore.collection('mazes').doc(id).delete();
  // }


  //const query = firestore.collection('mazes');
  //let mazestore = collectionData( query, 'id' ).pipe(startWith([]));;
  //console.log({ mazes });

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

$: groups = chunkArray( mazes );
$: console.log( groups );

</script>

<style>
  input { display: block }
</style>

<ul>
  {#each $mazes as maze}
    <MazeDesigner {...maze}  />
  {/each}
</ul>



<div class="tile is-ancestor">
  <div class="tile is-4 is-vertical">
    <div class="tile">
      <!-- Top tile -->
    </div>
    <div class="tile">
      <!-- Bottom tile -->
    </div>
  </div>
  <div class="tile">
    <!-- This tile will take up the whole vertical space -->
  </div>
</div>