import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Feedback extends Vue {
  @Prop() text!: string;
}
