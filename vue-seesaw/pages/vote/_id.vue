<template>
  <v-layout column justify-center align-center>
    <vote v-if="poll" :poll="poll" />

    <div v-else>
      The provided poll id is not valid
    </div>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vote from '~/components/Vote/Vote.vue';
import votePoll from '~/graphql/getPoll';
import { PollVariables, Poll, Poll_poll } from '~/graphql/types/Poll';

@Component({
  components: {
    Vote
  },
  async asyncData({ app, params }) {
    const provider = app.apolloProvider;
    const id = params.id;

    if (!provider || !id) {
      return {};
    }

    const client = provider.defaultClient;
    const result = await client.query<Poll>({ query: votePoll,
      variables: {
        id
      } as PollVariables });

    return {
      poll: result.data.poll
    };
  }
})
export default class VotePage extends Vue {
  poll: Poll_poll | null = null;
}
</script>
