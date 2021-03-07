import { Component, Prop, Mixins } from 'vue-property-decorator';
import { Doughnut, mixins } from 'vue-chartjs';

@Component
export default class PieChart extends Mixins(Doughnut, mixins.reactiveProp) {
  @Prop({ required: true, default: {} })
  public chartData!: Chart.ChartData;

  @Prop({ default: false })
  public resetChart!: boolean;

  @Prop()
  public chartOptions!: Chart.ChartOptions;

  private options: Chart.ChartOptions = {};

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
