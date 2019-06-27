import to from 'await-to-js';
import { Component, Vue } from 'vue-property-decorator';
import Feedback from '~/components/Feedback/Feedback';
import createPoll from '~/graphql/createPollMutation';
import {
  CreatePollMutation,
  CreatePollMutationVariables
} from '~/graphql/types/CreatePollMutation';

@Component({
  $_veeValidate: {
    validator: 'new'
  },
  components: {
    Feedback
  }
})
export default class Create extends Vue {
  question: string = '';
  answers: string[] = ['', '', ''];
  isLoading: boolean = false;
  error: boolean = false;
  submitted: boolean = false;

  onLastChange() {
    if (this.answers.length < 10) {
      this.answers.push('');
    }
  }

  async submit() {
    this.error = false;
    this.submitted = true;
    const formIsValid = await this.$validator.validateAll();
    const validAnswers = this.answers.filter(a => a);

    if (!formIsValid) {
      return;
    }

    this.isLoading = true;

    const [err, result] = await to(
      this.$apollo.mutate<CreatePollMutation>({
        mutation: createPoll,
        variables: {
          question: this.question,
          answers: validAnswers
        } as CreatePollMutationVariables
      })
    );

    if (err || !result || !result.data) {
      this.error = true;
      this.isLoading = false;
      return;
    }

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
