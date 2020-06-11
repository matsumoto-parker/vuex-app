export const getters = {
  completedTodos(state) {
    return state.todos.filter(todo => todo.completed);
  },
  completedTodosCount(state, getters) {
    return getters.completedTodos.length;
  }
};