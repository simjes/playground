import { Component, Prop, Vue } from 'vue-property-decorator';
import { PollQuery_poll } from '~/graphql/types/PollQuery';
import vote from '~/graphql/voteMutation';
import {
  VoteMutation,
  VoteMutationVariables
} from '~/graphql/types/VoteMutation';

@Component
export default class Vote extends Vue {
  @Prop() readonly poll!: PollQuery_poll;
  isLoading: boolean = false;

  async vote(id: string) {
    this.isLoading = true;

    const result = await this.$apollo.mutate<VoteMutation>({
      mutation: vote,
      variables: {
        id
      } as VoteMutationVariables
    });

    const pollId = result.data.vote.poll.id;
    if (pollId) {
      this.$router.push(`/results/${pollId}`);
    }
  }
}
