import { Component, Prop, Vue } from 'vue-property-decorator';
import pollResultSubscription from '~/graphql/pollResultSubscription';
import { PollResultQuery_poll } from '~/graphql/types/PollResultQuery';
import {
  PollResultSubscription,
  PollResultSubscription_pollResult_node_poll,
  PollResultSubscriptionVariables
} from '~/graphql/types/PollResultSubscription';

@Component
export default class Results extends Vue {
  @Prop() readonly poll!: PollResultQuery_poll;
  results:
    | PollResultQuery_poll
    | PollResultSubscription_pollResult_node_poll = this.poll;

  mounted() {
    const pollResultObservable = this.$apollo.subscribe<{
      data: PollResultSubscription;
    }>({
      query: pollResultSubscription,
      variables: {
        pollId: this.poll.id
      } as PollResultSubscriptionVariables
    });

    pollResultObservable
      .map(({ data }) => {
        return data.pollResult.node;
      })
      .subscribe(node => {
        if (node) {
          this.results = node.poll;
        }
      });
  }
}
