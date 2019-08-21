<script>
  import { onMount } from 'svelte';

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
  /* @import "styles/global.scss"; */

  a.navbar-item {
    cursor: pointer;
    text-decoration: none;
  }
  .navbar-brand .title {
    color: blue;
  }
</style>

<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
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
        <a class="navbar-item" href="#/">
          Home
        </a>

        <a class="navbar-item" href="#/rules">
          Rules
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">
            More
          </span>

          <div class="navbar-dropdown">
            <a class="navbar-item" href="#/about">
              About
            </a>
            <a class="navbar-item" href="#/jobs">
              Jobs
            </a>
            <a class="navbar-item" href="#/contact">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="#/report-an-issue">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end"  >
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="#/signup">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="#/login">
              Log in now
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>