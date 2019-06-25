import { Component, Vue } from 'vue-property-decorator';
import createPoll from '~/graphql/createPollMutation';
import {
  CreatePollMutation,
  CreatePollMutationVariables
} from '~/graphql/types/CreatePollMutation';

@Component({
  $_veeValidate: {
    validator: 'new'
  }
})
export default class Create extends Vue {
  question: string = '';
  answers: string[] = ['', '', ''];
  isLoading: boolean = false;
  submitted: boolean = false;

  onLastChange() {
    if (this.answers.length < 10) {
      this.answers.push('');
    }
  }

  async submit() {
    this.submitted = true;
    const formIsValid = await this.$validator.validateAll();
    const validAnswers = this.answers.filter(a => a);

    if (!formIsValid) {
      return;
    }

    this.isLoading = true;

    const result = await this.$apollo.mutate<CreatePollMutation>({
      mutation: createPoll,
      variables: {
        question: this.question,
        answers: validAnswers
      } as CreatePollMutationVariables
    });

    const pollId = result.data.createPoll.id;
    if (pollId) {
      this.$router.push(`/vote/${pollId}`);
    }
  }

  get answerLength() {
    const validAnswers = this.answers.filter(a => a);
    return validAnswers.length;
  }
}
