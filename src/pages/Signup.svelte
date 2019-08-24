<script>
  import { Button, Field, Input } from 'svelma'

  import { auth } from 'src/services/firebase';

  let displayName = '';
  let email = '';
  let password = '';
  let user = null;

  async function onSubmit(event){
    console.log({
      displayName, email, password
    });

    try {
      user = await auth.createUserWithEmailAndPassword( email, password );

      user.updateProfile( displayName );
    }
    catch ( error ) {
      console.error( error );
    }
  }
</script> 

<style>
  .container {
    padding: 1.5rem;
  }
</style>

<div class="container">
  <h1>Signup dddd</h1>

  <Field label="Display Name">
    <Input type="text" bind:value={displayName} placeholder="Text input" />
  </Field>
    
  <Field label="Email" message="Invalid email"> 
    <Input type="email" bind:value={email} maxlength="30" />
  </Field>
  
  <Field label="Password"> 
    <Input type="password" bind:value={password} passwordReveal={true} />
  </Field>
    
  <!-- Button type="is-primary" on:click={onSubmit} -->
  <Button type="is-primary">
    Submit User
  </Button>

</div>


