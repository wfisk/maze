<script>
  export let name;

  import { onMount, setContext } from 'svelte';
  import { authState } from 'rxfire/auth';
  
  
  import NavBar from 'src/components/NavBar.svelte';
  import 'src/services/firebase'
  import { auth, googleProvider } from 'src/services/firebase';
  import session from 'src/stores/session.js';

  import { currentRoute } from 'src/config/routes';

  let signOut = null;

  const unsubscribe = authState(auth).subscribe(user => {
    session.set({user});
  }); 

  onMount( function(){
    signOut = auth.onAuthStateChanged;
  });
</script>

<style global lang="scss" >
  @import "styles/global.scss"; 
</style>

<template>
  <div class="container-fluid">
    <NavBar/>
    
    <svelte:component this={$currentRoute.page} bind:params={$currentRoute.params} />
  </div>
</template>


