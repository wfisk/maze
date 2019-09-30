<script>
  import Modal from 'src/components/Modal/index';
	import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  export let active=false;


  function close(){
    active=false;
    dispatch('close', {} );
  }


  function submit(){
    active=false;
    dispatch('submit', {} );
  }
</script>



<Modal bind:active={active}>

  <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="title">
            Modal title
          </slot>
        </p>
        <button class="delete" aria-label="close" on:click={close}></button>
      </header>

      <section class="modal-card-body">
        <slot name="content">
          Content
        </slot>
      </section>

      <footer class="modal-card-foot">
        <slot name="footer">
          <button class="button is-success" on:click={submit}>Save changes</button>
          <button class="button" on:click={close}>Cancel</button>
        </slot>
      </footer>
    </div>





</Modal>