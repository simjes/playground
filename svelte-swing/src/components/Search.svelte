<script>
  import { createEventDispatcher } from "svelte";
  import _ from "lodash";

  export let debounceTime = 200;
  let searchTerm = "";

  const dispatch = createEventDispatcher();

  const search = _.debounce(() => {
    dispatch("search", {
      searchTerm
    });
  }, debounceTime);
</script>

<style>
  .nes-field {
    display: flex;
  }
</style>

<div class="nes-field">
  <input
    type="text"
    id="search"
    class="nes-input"
    bind:value={searchTerm}
    on:input={search}
    placeholder="Search for games"
    autocomplete="off" />
</div>
