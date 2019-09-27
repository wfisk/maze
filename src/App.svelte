<script>
  // https://github.com/prettier/eslint-plugin-prettier
  // https://github.com/UnwrittenFun/prettier-plugin-svelte
  // https://github.com/sveltejs/eslint-plugin-svelte3
  export let name;

  import { onMount, setContext } from 'svelte';
  import { authState } from 'rxfire/auth';
  
  
  import NavBar from 'src/components/NavBar.svelte';
  import 'src/services/firebase'
  import { auth, googleProvider } from 'src/services/firebase';
  import session from 'src/stores/session.js';
  import Router from 'svelte-spa-router'

  import AboutPage from 'src/pages/About.svelte';
  import ContactPage from 'src/pages/Contact.svelte';
  import HomePage from 'src/pages/Home.svelte';
  import JobsPage from 'src/pages/Jobs.svelte';
  import LoginPage from 'src/pages/Login.svelte';
  import MazePage from 'src/pages/Maze.svelte';
  import NotFoundPage from 'src/pages/NotFound.svelte';
  import ProfilePage from 'src/pages/Profile.svelte';
  import ReportAnIssuePage from 'src/pages/ReportAnIssue.svelte';
  import RulesPage from 'src/pages/Rules.svelte';
  import SignupPage from 'src/pages/Signup.svelte';  

  let signOut = null;

  const unsubscribe = authState(auth).subscribe(user => {
    session.set({user});
  }); 

  const routes = {
    // Exact path
    '/':                  HomePage,
    "/about":             AboutPage,
    "/contact":           ContactPage,
    "/jobs":              JobsPage,
    "/login":             LoginPage,
    "/maze/:id":          MazePage,
    "/profile":           ProfilePage,
    "/report-an-issue":   ReportAnIssuePage,
    "/rules":             RulesPage,
    "/signup":            SignupPage,
    '*':                  NotFoundPage,
  };


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
    <Router {routes} />
  </div>
</template>


