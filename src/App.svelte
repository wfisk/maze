<script>
  export let name;

  import 'bulma/css/bulma.css'
  import { Button } from 'svelma' 
  import Maze from './Maze.svelte';
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<div class="container">

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma-logo">
      </a>

      <button role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <button class="navbar-item button is-text">
          Home
        </button>

        <span class="navbar-item">
          Documentation
        </span>

        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">
            More
          </span>

          <div class="navbar-dropdown">
            <span class="navbar-item">
              About
            </span>
            <span class="navbar-item">
              Jobs
            </span>
            <span class="navbar-item">
              Contact
            </span>
            <hr class="navbar-divider">
            <span class="navbar-item">
              Report an issue
            </span>
          </div>
        </div>
      </div>

      <div class="navbar-end"  >
        <div class="navbar-item">
          <div class="buttons">
            <span class="button is-primary">
              <strong>Sign up</strong>
            </span>
            <span class="button is-light">
              Log in now
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <section class="section">
      <h1 class="title">Maze</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
      <Button>Hello</Button>

      <Maze />
  </section>

</div>


