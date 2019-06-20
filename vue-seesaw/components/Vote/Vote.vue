<template>
  <section>
    <h1>{{ poll.question }}</h1>

    <div>
      <ul>
        <li v-for="answer in poll.answers" :key="answer.id">
          <v-btn color="primary" block outline @click="vote(answer.id)">
            {{ answer.answer }}
          </v-btn>
        </li>
      </ul>
    </div>
  </section>
</template>

<script src="./Vote.ts"></script>

<style scoped>
  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }
</style>
