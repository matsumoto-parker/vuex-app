<template>
  <div id="app">
    <h1>App.vue</h1>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >{{ todo.title }} ({{ todo.completed ? '完了' : '未完了' }})</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["todos"])
  }
};
</script>


