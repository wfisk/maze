<script>
  export let name;

  import { onMount, setContext } from 'svelte';
  import { authState } from 'rxfire/auth';
  import Router from 'svelte-spa-router';
  // import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
  
  
  import NavBar from 'src/components/NavBar.svelte';
  import routes from 'src/config/routes.js';
  import 'src/services/firebase'
  import { auth, googleProvider } from 'src/services/firebase';
  import session from 'src/stores/session.js';
  
  let signOut = null;

  const unsubscribe = authState(auth).subscribe(user => {
    session.set({user});
  }); 

  onMount( function(){
    signOut = auth.onAuthStateChanged;
  });

  // see https://dev.to/buhrmi/svelte-component-transitions-5ie
</script>


<style global lang="sass" >
  @import "styles/global.sass"; 
  h1.title 
    color: $base-color
</style>

<template>
  <div class="container">
    <NavBar/>
    <h1 class="title">Very Mazeddd</h1>
    <Router {routes} />
  </div>
</template>

