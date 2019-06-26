import { Component, Prop, Vue } from 'vue-property-decorator';
import pollResultSubscription from '~/graphql/pollResultSubscription';
import { PollResultQuery_poll } from '~/graphql/types/PollResultQuery';
import {
  PollResultSubscription,
  PollResultSubscription_pollResult_node_poll,
  PollResultSubscriptionVariables
} from '~/graphql/types/PollResultSubscription';
import BarChart from './BarChart';
import { chartOptions } from '~/utils/barChartUtil';

@Component({
  components: {
    BarChart
  }
})
export default class Results extends Vue {
  @Prop() readonly poll!: PollResultQuery_poll;
  results:
    | PollResultQuery_poll
    | PollResultSubscription_pollResult_node_poll = this.poll;

  chartOptions = chartOptions;

  mounted() {
    const pollResultObservable = this.$apollo.subscribe<PollResultSubscription>(
      {
        query: pollResultSubscription,
        variables: {
          pollId: this.poll.id
        } as PollResultSubscriptionVariables
      }
    );

    pollResultObservable
      .filter(({ data }) => !!data && !!data.pollResult.node)
      .map(({ data }) => {
        // @ts-ignore
        return data.pollResult.node;
      })
      .subscribe(node => {
        // @ts-ignore
        this.results = node.poll;
      });
  }

  get chartData() {
    if (!this.results.answers) {
      return { datasets: [] };
    }

    const labels: string[] = [];
    const data: number[] = [];
    this.results.answers.forEach(item => {
      labels.push(item.answer);
      data.push(item.votes);
    });

    return {
      labels,
      datasets: [
        {
          backgroundColor: '#24D8FF',
          data,
          datalabels: {
            color: '#fff',
            align: 'end',
            anchor: 'end'
          }
        }
      ]
    };
  }
}
