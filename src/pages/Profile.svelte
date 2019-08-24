<script>
  export let user=null;

  import UserProfile from 'src/components/UserProfile.svelte';
  import session from 'src/stores/session';
</script>


<h1>Profile</h1>

<UserProfile user={$session.user} />
