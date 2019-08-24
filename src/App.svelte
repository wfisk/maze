<script>
  export let name;

  import { onMount, setContext } from 'svelte';
  import { authState } from 'rxfire/auth';
  import Router from 'svelte-spa-router';
  // import 'bulma/css/bulma.css'
  // import '@fortawesome/fontawesome-free/css/all.css'
 
  
  import NavBar from 'src/components/NavBar.svelte';
  import 'src/services/firebase'
  import { auth, googleProvider } from 'src/services/firebase';
  import session from 'src/stores/session.js';

  import { currentRoute } from 'src/config/routes2';

  let signOut = null;

  const unsubscribe = authState(auth).subscribe(user => {
    session.set({user});
  }); 

  onMount( function(){
    signOut = auth.onAuthStateChanged;
  });

  // see https://dev.to/buhrmi/svelte-component-transitions-5ie
</script>

<!-- see https://github.com/sveltejs/sapper/issues/474 -->
<style global lang="scss" >
  @import "styles/global.scss"; 
</style>

<template>
  <div class="container-fluid">
    <NavBar/>
    <!-- Router {routes} / -->
    <svelte:component this={$currentRoute.page} bind:params={$currentRoute.params} />
  </div>
</template>


