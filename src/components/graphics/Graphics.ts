import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Graphic from '@/components/graphic';
import API from '@/api';

@Component({
  components: {
    Graphic,
  },
})
export default class Graphics extends Vue {
        private data: {labels: string[]; values: number []} = { labels: [], values: [] }

        created() {
          this.$nextTick(async () => {
            const lists = await API.getListAndCategories();
            lists.forEach((column) => {
              this.data.labels.push(column.name);
              this.data.values.push(column.cards.length);
            });
          });
        }
}
