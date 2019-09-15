<script>
  import TopicRulesFirst from 'src/help/rules/TopicFirst.svelte';
  import TopicRulesSecond from 'src/help/rules/TopicSecond.svelte';
  import TopicRulesThird from 'src/help/rules/TopicThird.svelte';
  
  // export let topic='first';
  export let params={};
</script>


<h1>Rules</h1>

{#if params.topic == 'first'}
  <TopicRulesFirst />
{:else if params.topic == 'second' }
  <TopicRulesSecond />
{:else}
  <TopicRulesThird/>
{/if}  
