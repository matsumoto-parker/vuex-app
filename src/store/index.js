import Vue from 'vue'
import Vuex from 'vuex'
import {
  state,
  getters,
  mutations,
  actions
} from './modules/todos'
import Todo from '../models/Todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos: {
      namespaced: true,
      state,
      getters,
      mutations,
      actions
    },
    user: {
      namespaced: true,
      state: {
        name: 'ミウ',
        todos: [
          new Todo('userタスク1', true),
          new Todo('userタスク2'),
          new Todo('userタスク3', true),
        ]
      },
      mutations,
      actions
    }
  }

})