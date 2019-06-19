import { Component, Vue } from 'vue-property-decorator';
import tst from '~/graphql/createPoll';

@Component
export default class CreatePoll extends Vue {
  valid: boolean = false;
  question: string = '';
  answers: string[] = ['', '', ''];

  onLastChange() {
    if (this.answers.length < 10) {
      this.answers.push('');
    }
  }

  async submit(event) {
    const validAnswers = this.answers.filter(a => a);
    console.log(validAnswers);
    const result = await this.$apollo.mutate({
      mutation: tst,
      variables: {
        question: this.question,
        answers: validAnswers
      }
    });

    console.log(result);
  }
}

/* TODO:
  - validation: question and one answer required
  - add more answers
  */
