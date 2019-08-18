import AboutRoute from 'app/routes/About.svelte';
import ContactRoute from 'app/routes/Contact.svelte';
import HomeRoute from 'app/routes/Home.svelte';
import JobsRoute from 'app/routes/Jobs.svelte';
import LoginRoute from 'app/routes/Login.svelte';
import NotFoundRoute from 'app/routes/NotFound.svelte';
import ReportAnIssueRoute from 'app/routes/ReportAnIssue.svelte';
import RulesRoute from 'app/routes/Rules.svelte';
import SignupRoute from 'app/routes/Signup.svelte';

  
export default {
  // Exact path
  '/': HomeRoute,
  '/about': AboutRoute,
  '/contact': ContactRoute,
  '/jobs': JobsRoute,
  '/login': LoginRoute,
  '/report-an-issue': ReportAnIssueRoute,
  '/rules': RulesRoute,
  '/signup': SignupRoute,

    // Catch-all
  // This is optional, but if present it must be the last
  '*': NotFoundRoute,
  };
