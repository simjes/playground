import { Component, Prop, Vue } from 'vue-property-decorator';
import { Poll_poll } from '~/graphql/types/Poll';
import vote from '~/graphql/vote';
import { Vote as VoteMutation, VoteVariables } from '~/graphql/types/Vote';

@Component
export default class Vote extends Vue {
  @Prop() readonly poll!: Poll_poll;

  async vote(id: string) {
    const result = await this.$apollo.mutate<VoteMutation>({
      mutation: vote,
      variables: {
        id
      } as VoteVariables
    });

    const pollId = result.data.vote.poll.id;
    if (pollId) {
      this.$router.push(`/results/${pollId}`);
    }
  }
}
