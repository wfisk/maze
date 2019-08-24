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
import session from 'src/stores/session';

const currentRoute = writable({
  page: null,
  params: ''
});

function authorizeThen() {
  return function( context, next ) {
    if( !session.user ) {
      page.redirect('/');
    }
  };
}
  
function routeTo( page ) {
  return function( context ) {
    console.log( context );
    currentRoute.set({ page: page, params: context.params });
  };
}
  
page.base('/#')
page('/', routeTo( HomePage ) );
page('/about', authorizeThen(), routeTo( AboutPage ) );
page('/contact', authorizeThen(), routeTo( ContactPage ) );
page('/jobs', authorizeThen(), routeTo( JobsPage ) );
page('/login', routeTo( LoginPage ) );
page('/profile', authorizeThen(), routeTo( ProfilePage ) );
page('/report-an-issue', authorizeThen(), routeTo( ReportAnIssuePage ) );
page('/rules', authorizeThen(), routeTo( RulesPage ) );
page('/signup', routeTo( SignupPage ) );
page('*', routeTo( NotFoundPage ) );
page.start();



export { currentRoute };