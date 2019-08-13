<script>
  import { Button } from 'svelma' 
  import { signInWithGoogle } from '../services/firebase';

  import '../services/firebase/'
</script>

<div class="container is-fluid">
  <div>
    <h1 class="title">Login</h1>

    <Button on:click={signInWithGoogle} type="is-primary" outline iconPack="fab" iconLeft="google" class="big" style="text-align:right;width:100%;">
      Login with Google
    </Button>
  </div>
</div>


