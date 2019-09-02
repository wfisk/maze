<script>
  import { onMount } from 'svelte';
  import { collectionData } from 'rxfire/firestore';
  import { of } from 'rxjs';
  import { groupBy, map, startWith } from 'rxjs/operators';
  
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
// let mazeGroups = Maze.findAll().pipe( map( (_,i) => console.log({_,i })|| 1 ) );
// let mazeGroups = Maze.findAllInGroupsOfThree();

$: console.log( { mazes } );
$: console.log( { $mazes } );
// $: console.log( { subscrined: $mazeGroups });


// $: console.log( { mazes } );

let values = of(1,2,3,4,5,6);
// $: items = values.pipe(
//   map( (it,index) => { item, index } ),
//   groupBy( it => it.index % 3 )
// );  

// $: console.log({ values });
// $: console.log({ items });

</script>

<style>
  input { display: block }
</style>

<div class="container">
  <div class="columns is-multiline">
    {#each $mazes as maze}
      <div class="column is-one-third">
        <div class="box">
            <a href="/maze/{maze.id}"><h2>Maze</h2></a>
            <MazeDesigner {...maze} />
        </div>
      </div>
    {/each}  
    {#each $mazes as maze}
      <div class="column is-one-third">
        <div class="box">
          <a href="/maze/{maze.id}"><h2>Maze</h2></a>
          <MazeDesigner {...maze} />
        </div>
      </div>
    {/each}  
  </div>
</div>


