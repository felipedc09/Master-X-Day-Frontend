import { Doughnut, mixins } from 'vue-chartjs';
import {
  Prop,
  Mixins,
} from 'vue-property-decorator';

export default class Chart extends Mixins(Doughnut, mixins.reactiveProp) {
  @Prop({ required: true, default: {} })
  public data!: Chart.ChartData;

  private options: Chart.ChartOptions ={};

  mounted() {
    this.renderChart(this.data, this.options);
  }
}
