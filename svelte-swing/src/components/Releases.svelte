<script>
  import { isTomorrow, format } from "date-fns";
  export let games;

  function formatDate(releaseDate) {
    const epochTime = releaseDate * 1000;

    return isTomorrow(epochTime) ? "Tomorrow" : format(epochTime, "dd.MM.yyyy");
  }
</script>

<style>
  ul {
    padding: 0;
  }

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
</style>

<ul>
  {#each games as game}
    <li>
      <span>{game.name}</span>
      <span>{formatDate(game.releaseDate)}</span>
    </li>
  {/each}
</ul>
