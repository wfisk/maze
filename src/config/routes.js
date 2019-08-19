import AboutRoute from 'src/routes/About.svelte';
import ContactRoute from 'src/routes/Contact.svelte';
import HomeRoute from 'src/routes/Home.svelte';
import JobsRoute from 'src/routes/Jobs.svelte';
import LoginRoute from 'src/routes/Login.svelte';
import NotFoundRoute from 'src/routes/NotFound.svelte';
import ReportAnIssueRoute from 'src/routes/ReportAnIssue.svelte';
import RulesRoute from 'src/routes/Rules.svelte';
import SignupRoute from 'src/routes/Signup.svelte';

  
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
