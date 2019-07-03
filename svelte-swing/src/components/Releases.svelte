<script>
  export let releases;
</script>

<style>

</style>

<div>
  <ul>
    {#each releases as release}
      <li>{release.name}</li>
    {/each}
  </ul>
</div>
