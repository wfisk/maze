<script>
  import CardModal from 'src/components/modals/CardModal.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let active=false;
  export let name="";
  export let rowCount = 1;
  export let columnCount = 1; 


  function onCardModalClose(){
    dispatch('close',{});    
  }

  function onCardModalSubmit(){
    dispatch('submit',{});    
  }
</script>

<style>
</style>

<CardModal bind:active={active} on:close={onCardModalClose} on:submit={onCardModalSubmit}>
  <div slot="content">

    <!-- Name -->  
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Name</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input" type="text" placeholder="Name for your maze" bind:value={name}>
          </p>
        </div>
      </div>
    </div>

    <!-- Row Count -->  
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Row Count</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input" type="number" placeholder="Number of rows" bind:value={rowCount}>
          </p>
        </div>
      </div>
    </div>
  
    <!-- Column Count -->  
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Column Count</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input" type="number" placeholder="Number of columns" bind:value={columnCount}>
          </p>
        </div>
      </div>
    </div>

  </div>
    
</CardModal>



