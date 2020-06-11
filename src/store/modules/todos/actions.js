export const actions = {
  complete(context, payload) {
    context.commit('completeTodo', payload);
  },

  init({
    commit
  }, payload) {
    setTimeout(() => {
      commit({
        type: 'initTodo',
        id: payload.id
      });
    }, 1000)
  }
};