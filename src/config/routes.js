import { writable } from 'svelte/store';
import page from 'page';

import AboutPage from 'src/pages/About.svelte';
import ContactPage from 'src/pages/Contact.svelte';
import HomePage from 'src/pages/Home.svelte';
import JobsPage from 'src/pages/Jobs.svelte';
import LoginPage from 'src/pages/Login.svelte';
import NotFoundPage from 'src/pages/NotFound.svelte';
import ProfilePage from 'src/pages/Profile.svelte';
import ReportAnIssuePage from 'src/pages/ReportAnIssue.svelte';
import RulesPage from 'src/pages/Rules.svelte';
import SignupPage from 'src/pages/Signup.svelte';

import currentUser from 'src/stores/current-user';
import session from 'src/stores/session';

const currentRoute = writable({
  page: null,
  params: ''
});

function authorize() {
  return function( context, next ) {
    if( !currentUser ) {
      page.redirect('/login');
    }
    next();
  };
}
  
function routeTo( page ) {
  return function( context ) {
    console.log( context );
    currentRoute.set({ page: page, params: context.params });
  };
}
  
// page.base('/#!')
// page('*', middleware() );
page('/', routeTo( HomePage ) );
page('/about', authorize(), routeTo( AboutPage ) );
page('/contact', authorize(), routeTo( ContactPage ) );
page('/jobs', authorize(), routeTo( JobsPage ) );
page('/login', routeTo( LoginPage ) );
page('/profile', authorize(), routeTo( ProfilePage ) );
page('/report-an-issue', authorize(), routeTo( ReportAnIssuePage ) );
page('/rules', authorize(), routeTo( RulesPage ) );
page('/signup', routeTo( SignupPage ) );
page('*', routeTo( NotFoundPage ) );
page.start({ hashbang: true });



export { currentRoute };