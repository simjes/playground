import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Vote extends Vue {
  // client: ApolloProvider;
  slug: String = 'skal ikke vises';

  static asyncData(context) {
    debugger;
    return {
      slug: 'noe'
    };
  }

  mounted() {
    console.log(this.slug, 'wut');
  }
}
