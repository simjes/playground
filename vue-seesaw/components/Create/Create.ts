import { Component, Vue } from 'vue-property-decorator';
import createPoll from '~/graphql/createPoll';
import { CreatePoll, CreatePollVariables } from '~/graphql/types/CreatePoll';

@Component
export default class Create extends Vue {
  valid: boolean = false;
  question: string = '';
  answers: string[] = ['', '', ''];

  onLastChange() {
    if (this.answers.length < 10) {
      this.answers.push('');
    }
  }

  async submit() {
    const validAnswers = this.answers.filter(a => a);

    const result = await this.$apollo.mutate<CreatePoll>({
      mutation: createPoll,
      variables: {
        question: this.question,
        answers: validAnswers
      } as CreatePollVariables
    });

    const pollId = result.data.createPoll.id;
    if (pollId) {
      this.$router.push(`/vote/${pollId}`);
    }
  }
}
