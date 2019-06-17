import { Component, Vue } from 'vue-property-decorator';

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

  submit(event) {
    const validAnswers = this.answers.filter(a => a);
    console.log(validAnswers);
  }
}

/* TODO: 
  - validation: question and one answer required
  - add more answers
  */
