<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <!-- <vote /> -->
      tst: {{ slug }}
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Vote from '~/components/Vote/Vote.vue';

@Component({
  components: {
    Vote
  },
  asyncData({ app, params }) {
    const provider = app.apolloProvider;

    if (provider) {
      const client = provider.defaultClient;
      // const tst = client.query({query:})
    }

    return {
      slug: params
    };
  }
})
export default class VotePage extends Vue {
  slug: String = 'skal ikke vises';
}
</script>
