<script>
  import { onMount } from 'svelte';
  import { LogInIcon, LogOutIcon, UserIcon } from 'svelte-feather-icons';
  
  import { signOut } from 'src/services/firebase';
  import currentUser from 'src/stores/current-user';

  let navBarBurger = null;
  let navBarMenu = null;


  /*----------------------------------------------------------------
  onNavBarBurgerClick
  ----------------------------------------------------------------*/
  function onNavBarBurgerClick( event ){
    navBarBurger.classList.toggle('is-active');
    navBarMenu.classList.toggle('is-active');
  }

  /*----------------------------------------------------------------
  onNavBarMenuClick
  ----------------------------------------------------------------*/
  function onNavBarMenuClick( event ){
    navBarBurger.classList.remove('is-active');
    navBarMenu.classList.remove('is-active');
  }
</script>

<style lang="scss">
  @import "styles/global.scss"; 
  .navbar {
    max-height: 3.25rem;
  }
  .navbar-item-feather-fw {
  margin-left: 1.5em;
}  
  /*
  a.navbar-item {
    cursor: pointer;
    text-decoration: none;
  }

  .navbar-end > .navbar-item {
    width: 6rem;
  }
*/
  /*
  :global(.feather) {
    min-width: 16px;
    height: auto;
  }
  */
  div {
    display: flex;
  }
</style>

<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#/">
        <h2 class="title">Very Mazed</h2>
      </a>

      <button role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" bind:this={navBarBurger} on:click={onNavBarBurgerClick}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div class="navbar-menu" bind:this={navBarMenu} on:click={onNavBarMenuClick}>
      <div class="navbar-start">
        <a class="navbar-item" href="#/">Home</a>  

        <a class="navbar-item" href="#/rules">Rules</a>  

        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">
            More
          </span>

          <div class="navbar-dropdown">
            <a class="navbar-item" href="#/about">About</a>  
            <a class="navbar-item" href="#/jobs">Jobs</a>  
            <a class="navbar-item" href="#/profile">Profile</a>  
            <hr class="navbar-divider">
            <a class="navbar-item" href="#/report-an-issue">Report an issue</a>  
          </div>
        </div>
      </div>

      <div class="navbar-end"  >
        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link navbar-link-feather">
            <UserIcon/>
          </span>

          <div class="navbar-dropdown is-right">
            <a class="navbar-item navbar-item-feather-fw xxx" href="#/about">
              About
            </a>
            <a class="navbar-item navbar-item-feather-fw" href="#/jobs">
              Jobs
            </a>
            <a class="navbar-item navbar-item-feather-fw" href="#/jobs">
              Jobs
            </a>
            <hr class="navbar-divider">
            {#if $currentUser }
              <button class="button is-text navbar-item navbar-item-feather" on:click|preventDefault={signOut}>
                <LogOutIcon/> 
                Logout
              </button>
            {:else}  
              <a class="navbar-item navbar-item-feather" href="#/login">
                <LogInIcon/> 
                Login
              </a>
            {/if}
          </div>
        </div>        
      </div>
    </div>
  </nav>