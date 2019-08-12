<script>
  export let id; // document ID
  export let rowCount;
  export let columnCount;
  export let spaces;


  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  function remove() {
    dispatch('remove', { id });
  }

  function toggleStatus() {
    dispatch('toggle', { id });
  }
  

</script>

<style>
  .is-complete {
      text-decoration: line-through;
      color: green;
  }
</style>


<li>
  {rowCount} x { columnCount} : 
  {#each spaces as space }
    {space}
  {/each} 


</li>