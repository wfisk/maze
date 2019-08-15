<script>
  import { getContext } from 'svelte' 
  import { Button } from 'svelma' 
  import UserProfile from '../components/profiles/UserProfile.svelte';
  import { auth, googleProvider } from '../services/firebase';
  import { authState } from 'rxfire/auth';

  import '../services/firebase/'
  import session from '../stores/session.js';

  function signIn(){
    auth.signInWithPopup( googleProvider );
  }

  function signOut(){
    auth.signOut();
  }

</script>

<div class="container is-fluid">
  <div>
    <h1 class="title">Login</h1>

    {#if $session.user}
      <UserProfile displayName={$session.user.displayName} photoURL={$session.user.photoURL} uid={$session.user.uid} />    
      <button on:click={signOut} type="is-danger is-outline" iconPack="fab" iconLeft="google" class="big" style="text-align:right;width:100%;">
        Sign out
      </button>

    {:else}
      <button on:click={signIn} type="is-primary" iconPack="fab" iconLeft="google" class="big" style="text-align:right;width:100%;">
        Sign in with Google
      </button>
    {/if}
  </div>
</div>


