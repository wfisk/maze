<script>
  export let name;

  import { onMount, setContext } from 'svelte';
  import { authState } from 'rxfire/auth';
  import Router from 'svelte-spa-router';
  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
  
  
  import NavBar from './components/navbars/NavBar.svelte';
  import routes from './config/routes.js';
  import './services/firebase/'
  import { auth, googleProvider } from './services/firebase';
  import session from './stores/session.js';
  
  let signOut = null;


  const unsubscribe = authState(auth).subscribe(user => {
    session.set({user});
  }); 

  onMount( function(){
    signOut = auth.onAuthStateChanged;
  });
</script>

<style>
	h1 {
		color: purple;
	}

</style>

<div class="container">

  <NavBar/>

  <Router {routes} />

</div>


