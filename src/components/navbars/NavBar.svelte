<script>
  import { onMount } from 'svelte';

  onMount( function(){
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  });

</script>

<style>
  a.navbar-item {
    cursor: pointer;
    text-decoration: none;
  }
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma-logo">
        Very Mazed
      </a>

      <button role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
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