<script>
  export let name;

  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'

  import { Button } from 'svelma' 
  import NavBar from './components/navbars/NavBar.svelte';
  import Router from 'svelte-spa-router'

  import AboutRoute from './routes/About.svelte';
  import ContactRoute from './routes/Contact.svelte';
  import HomeRoute from './routes/Home.svelte';
  import JobsRoute from './routes/Jobs.svelte';
  import LoginRoute from './routes/Login.svelte';
  import NotFoundRoute from './routes/NotFound.svelte';
  import ReportIssueRoute from './routes/ReportIssue.svelte';
  import RulesRoute from './routes/Rules.svelte';
  import SignupRoute from './routes/Signup.svelte';

  const routes = {
    // Exact path
    '/': HomeRoute,
    '/about': AboutRoute,
    '/contact': ContactRoute,
    '/jobs': JobsRoute,
    '/login': LoginRoute,
    '/report-an-issue': ReportIssueRoute,
    '/rules': RulesRoute,
    '/signup': SignupRoute,

     // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFoundRoute,
}


 
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


