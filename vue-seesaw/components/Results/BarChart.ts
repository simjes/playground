import { HorizontalBar, mixins } from 'vue-chartjs';
import { Component, Mixins, Prop } from 'vue-property-decorator';
const { reactiveProp } = mixins;

@Component({
  mixins: [reactiveProp]
})
export default class BarChart extends Mixins(HorizontalBar) {
  @Prop() chartData!: any;
  @Prop() options!: any;

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
