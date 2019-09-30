<script>
  // import { Button } from 'svelma'
  // see https://github.com/sveltejs/svelte/issues/3165
  import Button from 'svelma/src/components/Button.svelte';
  import { onDestroy } from 'svelte';
  import { PlusCircleIcon } from 'svelte-feather-icons';
  import MazeList from 'src/components/MazeList.svelte';
  import MazeModal from 'src/components/modals/MazeModal';
  import Maze from 'src/collections/Maze';
  import session from 'src/stores/session';

  let modalActive = false;
  let name="";
  let rowCount = 1;
  let columnCount = 1;

  function onMazeModalClose(){

  }

  function onMazeModalSubmit(){
    console.log({ name, rowCount, columnCount, spaces:[], ownerId:$session.user  });
    Maze.add({ name, rowCount, columnCount, spaces:[], ownerId:$session.user.uid });
  }


  function onNewMazeClick( event ){
    modalActive = true;
  }

  onDestroy( function(){
    modalActive = false;
  })
 
  
</script>

<h1 class="title">Mazes</h1>

<Button on:click={onNewMazeClick}>
  <PlusCircleIcon/> 
  New Maze
</Button>

<MazeList />


<MazeModal 
  bind:active={modalActive} 
  bind:name
  bind:rowCount
  bind:columnCount 
  on:close={onMazeModalClose} 
  on:submit={onMazeModalSubmit}
>
</MazeModal>
