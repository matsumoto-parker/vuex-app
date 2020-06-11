<template>
  <div id="app">
    <h1>App.vue</h1>
    <ul>
      <template v-for="todo in $store.state.todos">
        <li
          v-if="todo.completed"
          :key="todo.id"
          @click="initTodo({id: todo.id})"
        >{{ todo.title }} (完了)</li>
        <li v-else :key="todo.id" @click="completeTodo({id: todo.id})">{{ todo.title }} (未完了)</li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["completeTodo", "initTodo"])
  }
};
</script>


