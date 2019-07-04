<script context="module">
  import to from "await-to-js";
  import { API_URL } from "../utils/environment.js";

  export async function preload(page, session) {
    const [err, result] = await to(
      this.fetch(`${API_URL}/.netlify/functions/releases`)
    );

    const upcomingGames = await result.json();
    return { upcomingGames };
  }
</script>

<script>
  import Releases from "../components/Releases.svelte";
  import Search from "../components/Search.svelte";

  export let upcomingGames;

  const dostuff = async event => {
    console.log(event.detail.searchTerm);
  };
</script>

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Home | Svelte-swing</title>
</svelte:head>

<h1>Svelte</h1>

<p>
  The
  <a
    href="https://github.com/simjes/playground"
    title="https://github.com/simjes/playground"
    target="_blank"
    rel="noopener noreferrer">
    playground
  </a>
  is a repository for creating small and simple applications to test out new
  technologies and frameworks
</p>

<Search on:search={dostuff} />

<Releases bind:games={upcomingGames} />
