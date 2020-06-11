<template>
  <div id="app">
    <h1>App.vue</h1>
    <h2>todos.todos</h2>
    <ul>
      <template v-for="todo in $store.state.todos.todos">
        <li
          v-if="todo.completed"
          :key="todo.id"
          @click="initTodoForTodos({id: todo.id})"
        >{{ todo.title }} (完了)</li>
        <li
          v-else
          :key="todo.id"
          @click="completeTodoForTodos({id: todo.id})"
        >{{ todo.title }} (未完了)</li>
      </template>
    </ul>
    <h2>user.todos</h2>
    <ul>
      <template v-for="todo in $store.state.user.todos">
        <li
          v-if="todo.completed"
          :key="todo.id"
          @click="initTodoForuser({id: todo.id})"
        >{{ todo.title }} (完了)</li>
        <li v-else :key="todo.id" @click="completeTodForuser({id: todo.id})">{{ todo.title }} (未完了)</li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      completeTodoForTodos: "todos/complete",
      initTodoForTodos: "todos/init"
    }),
    ...mapActions({
      completeTodForuser: "user/complete",
      initTodoForuser: "user/init"
    })
  }
};
</script>


