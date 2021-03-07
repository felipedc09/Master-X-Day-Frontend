<template>
  <div class="graphics">
    <div class="container-graph">
      <div class="todo">
        <Graphics :loaded="loaded" :Pmayor="datagmax[0]" :Pmenor="datagmin[0]" :labelg="labelt" />
      </div>
      <div class="inprogress">
        <Graphics :loaded="loaded" :Pmayor="datagmax[1]" :Pmenor="datagmin[1]" :labelg="labelp" />
      </div>
      <div class="completed">
        <Graphics :loaded="loaded" :Pmayor="datagmax[2]" :Pmenor="datagmin[2]" :labelg="labelc" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Graphics from '../components/Graphics.vue';
import API from '../api';

export default {
  data() {
    return {
      loaded: false,
      pmayor: 3,
      pmenor: 2,
      labelt: 'TO-DO',
      labelp: 'IN-PROGRESS',
      labelc: 'DONE',
      datagmax: [0],
      datagmin: [0],
      total: 0,
    };
  },
  components: {
    Graphics,
  },
  created() {
    this.$nextTick(async () => {
      const result = await API.getListAndCategories();
      const datagraphmin: number[] = [];
      let acc = 0;
      result.forEach((item) => {
        datagraphmin.push(item.cards.length);
        acc += item.cards.length;
      });
      this.datagmin = datagraphmin;
      this.datagmax = [acc - datagraphmin[0], acc - datagraphmin[1], acc - datagraphmin[2]];
      this.total = acc;
      this.loaded = true;
    });
  },
};
</script>
<style>
.container-graph {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.todo,
.inprogress,
.completed {
  width: 20%;
}
@media only screen and (max-width: 600px) {
  .container-graph {
    flex-direction: column;
  }

  .todo,
  .inprogress,
  .completed {
    width: 100%;
  }
}
</style>
