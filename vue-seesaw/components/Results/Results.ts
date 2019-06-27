import { FetchResult } from 'apollo-link';
import { Component, Prop, Vue } from 'vue-property-decorator';
import pollResultSubscription from '~/graphql/pollResultSubscription';
import { PollResultQuery_poll } from '~/graphql/types/PollResultQuery';
import {
  PollResultSubscription,
  PollResultSubscriptionVariables,
  PollResultSubscription_pollResult_node_poll
} from '~/graphql/types/PollResultSubscription';
import { chartOptions } from '~/utils/barChartUtil';
import BarChart from './BarChart';

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
    const pollResult = this.$apollo.subscribe<PollResultSubscription>({
      query: pollResultSubscription,
      variables: {
        pollId: this.poll.id
      } as PollResultSubscriptionVariables
    });

    pollResult.subscribe(results => {
      const node = results.data ? results.data.pollResult.node : null;
      if (node) {
        this.results = node.poll;
      }
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

  get canvasContainerStyles() {
    const answers = this.results.answers;
    const rows = answers ? answers.length : 0;
    return {
      height: `${60 * rows}px`,
      width: '80vw',
      position: 'relative'
    };
  }
}
