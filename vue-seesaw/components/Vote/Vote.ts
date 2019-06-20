import { Component, Prop, Vue } from 'vue-property-decorator';
import { Poll_poll } from '~/graphql/types/Poll';

@Component
export default class Vote extends Vue {
  @Prop() readonly poll!: Poll_poll;

  mounted() {
    console.log(this.poll);
  }
}
