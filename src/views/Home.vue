<template>
  <div class="home container">
    <ul class="nav nav-tabs nav-fill">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#board">Board</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#graphics">Graphics</a>
      </li>
    </ul>

    <div class="tab-content">
      <div id="board" class="tab-pane fade in active show">
        <div class="container py-5">
    <div class="row">
      <div class="col">
        <h1>Board: {{ board.name }}</h1>
      </div>
    </div>
    <div class="row py-3">
      <div class="col text-right">
        <p>Total Project Progress: {{ progress }}%</p>
      </div>
    </div>
    <team />
    <br />
    <br />
    <div class="row">
      <div :key="list.id" v-for="list in lists" class="col-lg-4 col-md-4 col-sm-12 col-12">
        <column
          :key="list.id"
          :columnName="list.name"
          :cards="list.cards"
          :counter="list.cards.length"
          :totalTasks="totalTasks"
          :progress="(list.cards.length * 100) / totalTasks"
        />
      </div>
    </div>
  </div>
      </div>
      <div id="graphics" class="tab-pane fade">
         <!-- Graphics content -->
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script src="./Home.ts" lang="ts" />
<style src="./Home.css" lang="css" />
