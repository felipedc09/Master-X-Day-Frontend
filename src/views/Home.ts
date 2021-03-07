import { List } from '@/api/interfaces';
import { Component, Vue } from 'vue-property-decorator';
import API from '../api';
import Column from '../components/column';
import Team from '../components/team';

@Component({
  components: {
    Column,
    Team,
  },
})
export default class Home extends Vue {
  lists: List[] = [];

  totalTasks = 0;

  progress = 0;

  done = 0;

  board = {};

  created() {
    this.$nextTick(async () => {
      this.lists = await API.getListAndCategories();
      this.lists.forEach((element: List) => {
        this.totalTasks += element.cards.length;
      });
      this.lists.forEach((list: List) => {
        if (list.name === 'DONE') {
          this.done = list.cards.length;
        }
      });
      this.progress = ((this.totalTasks - this.done) * 100) / this.totalTasks;
      this.board = await API.getBoard();
    });
  }
}
