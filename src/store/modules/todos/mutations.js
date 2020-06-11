export const mutations = {
  completeTodo(state, payload) {
    // const todo = state.todos.find(todo => todo.id === payload.id);
    // if (todo) {
    //   todo.finish();
    console.log(payload);
    state.todos.forEach(todo => {
      todo.finish();
    });
  },
  initTodo(state, payload) {
    // const todo = state.todos.find(todo => todo.id === payload.id);
    // if (todo) {
    //   todo.init();
    // }
    console.log(payload);
    state.todos.forEach(todo => {
      todo.init();
    });
  },
};