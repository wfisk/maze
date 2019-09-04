<script>
  import { Button } from 'svelma'
  import { PlusCircleIcon } from 'svelte-feather-icons';
  import MazeList from 'src/components/MazeList.svelte';
  import Modal from 'src/components/Modal/index';

  let modalActive = false;

  function onNewMazeClick( event ){
    modalActive = !modalActive;
  }

  $: console.log({modalActive});
</script>

<h1 class="title">Mazes</h1>

<Button on:click={onNewMazeClick}>
  <PlusCircleIcon/> 
  New Maze
</Button>

<MazeList />

<Modal bind:active={modalActive}>

  <p class="image is-4by3">
    <img alt="Test image" src="https://via.placeholder.com/1280x920"/>
  </p>


</Modal>
