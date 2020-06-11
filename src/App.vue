<template>
  <div id="app">
    <h1>App.vue</h1>
    <ul>
      <template v-for="todo in $store.state.todos">
        <li v-if="todo.completed" :key="todo.id" @click="init({id: todo.id})">{{ todo.title }} (完了)</li>
        <li v-else :key="todo.id" @click="complete({id: todo.id})">{{ todo.title }} (未完了)</li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["complete", "init"])
  }
};
</script>


