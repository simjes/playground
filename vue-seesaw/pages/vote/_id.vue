<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <vote
      v-if="poll"
      :poll="poll"
    />

    <div v-else>
      The provided poll id is not valid
    </div>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vote from '~/components/Vote/Vote.vue';
import votePoll from '~/graphql/pollQuery';
import { PollQueryVariables, PollQuery, PollQuery_poll } from '~/graphql/types/PollQuery';

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
    const result = await client.query<PollQuery>({ query: votePoll,
      variables: {
        id
      } as PollQueryVariables });

    return {
      poll: result.data.poll
    };
  }
})
export default class VotePage extends Vue {
  poll: PollQuery_poll | null = null;
}
</script>
