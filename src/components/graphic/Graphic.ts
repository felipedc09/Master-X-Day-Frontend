import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import PieChart from '@/components/pieChart/PieChart';

@Component({
  components: {
    PieChart,
  },
})
export default class Graphic extends Vue {
  @Prop()
  private data!: {labels: string[]; values: number []}

    private chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    private chartData = {
      labels: this.data.labels,
      datasets: [
        {
          label: 'Data One',
          backgroundColor: ['#236BB2', '#e2e068', '#41B883'],
          data: this.data.values,
        },
      ],
    }
}
