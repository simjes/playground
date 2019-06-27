import to from 'await-to-js';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Feedback from '~/components/Feedback/Feedback';
import { PollQuery_poll } from '~/graphql/types/PollQuery';
import {
  VoteMutation,
  VoteMutationVariables
} from '~/graphql/types/VoteMutation';
import vote from '~/graphql/voteMutation';

@Component({
  components: {
    Feedback
  }
})
export default class Vote extends Vue {
  @Prop() readonly poll!: PollQuery_poll;
  isLoading: boolean = false;
  error: boolean = false;

  async vote(id: string) {
    this.error = false;
    this.isLoading = true;

    const [err, result] = await to(
      this.$apollo.mutate<VoteMutation>({
        mutation: vote,
        variables: {
          id
        } as VoteMutationVariables
      })
    );

    if (err || !result || !result.data) {
      this.error = true;
      this.isLoading = false;
      return;
    }

    const pollId = result.data.vote.poll.id;
    if (pollId) {
      this.$router.push(`/results/${pollId}`);
    }
  }
}
