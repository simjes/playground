<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <results v-if="poll" :poll="poll" />

      <div v-else>
        The provided poll id is not valid
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Results from '~/components/Results/Results';
import pollResultQuery from '~/graphql/pollResultQuery';
import { PollResultQuery_poll, PollResultQueryVariables, PollResultQuery } from '~/graphql/types/PollResultQuery';

@Component({
  components: {
    Results
  },
  async asyncData({ app, params }) {
    const provider = app.apolloProvider;
    const id = params.id;

    if (!provider || !id) {
      return {};
    }

    const client = provider.defaultClient;
    const result = await client.query<PollResultQuery>({
      query: pollResultQuery,
      variables: {
        id
      } as PollResultQueryVariables
    });

    return {
      poll: result.data.poll
    };
  }
})
export default class ResultsPage extends Vue {
  poll: PollResultQuery_poll | null = null;
}
</script>
