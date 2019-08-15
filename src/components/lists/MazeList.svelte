<script>
  import { onMount } from 'svelte';
  import { collectionData } from 'rxfire/firestore';
  import { startWith } from 'rxjs/operators';
  
  import { cfs } from '../../services/firebase';
  import MazeDesigner from '../designers/MazeDesigner.svelte';
  import MazePlayer from '../players/MazePlayer.svelte';
 
  
  // User ID passed from parent
  // export let uid;

  // Form Text
  let text = 'some task';

  function add() {
      cfs.collection('mazes').add({ uid, text, complete: false, created: Date.now() });
      text = '';
  }

  function updateStatus(event) {
      const { id, newStatus } = event.detail;
      cfs.collection('mazes').doc(id).update({ complete: newStatus });
  }

  function removeItem(event) {
      const { id } = event.detail;
      cfs.collection('mazes').doc(id).delete();
  }


  const query = cfs.collection('mazes');
  let mazes = collectionData( query, 'id' ).pipe(startWith([]));;
  console.log({ mazes });

</script>

<style>
  input { display: block }
</style>

<ul>
  {#each $mazes as maze}
    <MazeDesigner {...maze}  />
  {/each}
</ul>