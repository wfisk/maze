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

  import { currentRoute } from 'src/config/routes';

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

    <Router>
      <Route path="*" component={NotFoundPage} />
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/jobs" component={JobsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/maze/:id" component={MazePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/report-an-issue" component={ReportAnIssuePage} />
      <Route path="/rules" component={RulesPage} />
      <Route path="/signup" component={SignupPage} />
    </Router>

  </div>
</template>


