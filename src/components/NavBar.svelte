<script>
  import { onMount } from 'svelte';
  import { LogInIcon, LogOutIcon, UserIcon } from 'svelte-feather-icons';
  import { Link } from 'svero';
  
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
      <!-- a class="navbar-item" href="/">
        <h2 class="title">Very Mazed</h2>
      </a -->
      <Link class="navbar-item" href="/home">
        <h2 class="title">Very Mazed</h2>
      </Link>

      <button role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" bind:this={navBarBurger} on:click={onNavBarBurgerClick}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div class="navbar-menu" bind:this={navBarMenu} on:click={onNavBarMenuClick}>
      <div class="navbar-start">
        <!-- a class="navbar-item" href="/">
          Home
        </a -->
        <Link class="navbar-item" href="/home">Home</Link>  

        <!-- a class="navbar-item" href="/rules/third">
          Rules
        </a -->
        <Link class="navbar-item" href="/rules/third">Rules</Link>  

        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">
            More
          </span>

          <div class="navbar-dropdown">
            <!-- a class="navbar-item" href="/about">
              About
            </a -->
            <Link class="navbar-item" href="/about">About</Link>  
            <!-- a class="navbar-item" href="/jobs">
              Jobs
            </a -->
            <Link class="navbar-item" href="/jobs">Jobs</Link>  
            <!-- a class="navbar-item" href="/profile">
              Profile
            </a -->
            <Link class="navbar-item" href="/profile">Profile</Link>  
            <hr class="navbar-divider">
            <!-- a class="navbar-item" href="/report-an-issue">
              Report an issue
            </a -->
            <Link class="navbar-item" href="/report-an-issue">Report an issue</Link>  
          </div>
        </div>
      </div>

      <div class="navbar-end"  >
        <!-- div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="#/signup">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="#/login">
              Log in now
            </a>
          </div>
        </div -->

        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link navbar-link-feather">
            <UserIcon/>
          </span>

          <div class="navbar-dropdown is-right">
            <!-- a class="navbar-item navbar-item-feather-fw xxx" href="/about">
              About
            </a -->
            <Link class="navbar-item navbar-item-feather-fw xxx" href="/about">
              About
            </Link>
            <!-- a class="navbar-item navbar-item-feather-fw" href="/jobs">
              Jobs
            </a -->
            <Link class="navbar-item navbar-item-feather-fw" href="/jobs">
              Jobs
            </Link>
            <!-- a class="navbar-item navbar-item-feather-fw" href="/jobs">
              Jobs
            </a -->
            <Link class="navbar-item navbar-item-feather-fw" href="/jobs">
              Jobs
            </Link>
            <hr class="navbar-divider">
            {#if $currentUser }
              <!-- a class="navbar-item navbar-item-feather" on:click|preventDefault={signOut}>
                <LogOutIcon/> 
                Logout
              </a -->
              <button class="button is-text navbar-item navbar-item-feather" on:click|preventDefault={signOut}>
                <LogOutIcon/> 
                Logout
              </button>
            {:else}  
              <a class="navbar-item navbar-item-feather" href="/login">
                <LogInIcon/> 
                Login
              </a>
            {/if}
          </div>
        </div>        
      </div>
    </div>
  </nav>