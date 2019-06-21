<template>
  <section>
    <h1>{{ poll.question }}</h1>

    <ul>
      <li v-for="answer in poll.answers" :key="answer.id">
        <v-btn
          block
          outline
          class="vote-option"
          color="primary"
          :disabled="isLoading"
          @click="vote(answer.id)"
        >
          <span style="white-space: normal;">
            {{ answer.answer }}
          </span>
        </v-btn>
      </li>
    </ul>
  </section>
</template>

<script src="./Vote.ts"></script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  ul {
    padding: 0;
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
  }

  li {
    list-style: none;
  }

  .vote-option {
    height: unset;
    margin: 0;
    padding: 20px 10px;
  }
</style>
