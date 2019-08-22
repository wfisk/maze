<script>
  export let user;

  let { displayName, photoURL, uid } = user || {};
</script>


<h3>Hi { displayName }!</h3>

<img src={ photoURL } width="100" alt="user avatar">
<p>Your userID is { uid }</p>