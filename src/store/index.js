import Vue from 'vue'
import Vuex from 'vuex'
import Todo from '../models/Todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      new Todo('タスク1', true),
      new Todo('タスク2'),
      new Todo('タスク3', true),
    ]
  },
  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed);
    },
    completedTodosCount(state, getters) {
      return getters.completedTodos.length;
    }
  },
  mutations: {
    completeTodo(state, payload) {
      const todo = state.todos.find(todo => todo.id === payload.id);
      if (todo) {
        todo.finish();
      }
    },
    initTodo(state, payload) {
      const todo = state.todos.find(todo => todo.id === payload.id);
      if (todo) {
        todo.init();
      }
    },
  },
  actions: {},
  modules: {}
})