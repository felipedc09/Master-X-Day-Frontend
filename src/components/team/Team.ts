import Vue from 'vue';
import Component from 'vue-class-component';
import API from '@/api';
import { Member } from '@/api/interfaces';

@Component({
  components: {},
})
export default class Team extends Vue {
  members: Member[] = [];

  created() {
    this.$nextTick(async () => {
      this.members = await API.getMembers();
    });
  }
}
