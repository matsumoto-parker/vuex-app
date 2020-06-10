import Vue from 'vue'
import Vuex from 'vuex'
import Todo from '../models/Todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      new Todo('タスク1'),
      new Todo('タスク2'),
      new Todo('タスク3'),
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})