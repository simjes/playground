<script>
  import { isTomorrow, format } from "date-fns";
  import platforms from "../utils/platforms.js";

  export let games;

  const formatDate = releaseDate => {
    const epochTime = releaseDate * 1000;

    return isTomorrow(epochTime) ? "Tomorrow" : format(epochTime, "dd.MM.yy");
  };
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

  img {
    margin: 0 2px;
  }
</style>

<ul>
  {#each games as game}
    <li>
      <span>{game.name}</span>
      <div>
        <span>
          {#each game.platforms as platform}
            <img
              src={platforms[platform].icon}
              alt={platforms[platform].name}
              title={platforms[platform].name}
              height="20"
              width="20" />
          {/each}
        </span>
        <span>{formatDate(game.releaseDate)}</span>
      </div>
    </li>
  {/each}
</ul>
