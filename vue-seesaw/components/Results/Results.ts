import { Component, Prop, Vue } from 'vue-property-decorator';
import pollResultSubscription from '~/graphql/pollResultSubscription';
import { PollResultQuery_poll } from '~/graphql/types/PollResultQuery';
import {
  PollResultSubscription,
  PollResultSubscription_pollResult_node_poll,
  PollResultSubscriptionVariables
} from '~/graphql/types/PollResultSubscription';
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

  chartOptions = {
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            fontColor: '#fff',
            stepSize: 1,
            beginAtZero: true,
            padding: 20
          },
          barThickness: 40
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    }
  };

  mounted() {
    const pollResultObservable = this.$apollo.subscribe<{
      data: PollResultSubscription;
    }>({
      query: pollResultSubscription,
      variables: {
        pollId: this.poll.id
      } as PollResultSubscriptionVariables
    });

    pollResultObservable
      .map(({ data }) => {
        return data.pollResult.node;
      })
      .subscribe(node => {
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
          data
        }
      ]
    };
  }
}
