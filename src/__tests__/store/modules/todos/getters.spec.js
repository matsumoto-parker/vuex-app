import { getters } from '../../../../store/modules/todos/getters';

describe('store/modules/todos/gettersのテスト', () => {
  const createMockState = () => {
    return {
      todos: [
        { completed: true },
        { completed: false },
        { completed: true },
      ]
    };
  };

  it('completedTodos のテスト', () => {
    const state = createMockState();
    const results = getters.completedTodos(state);

    expect(results).toEqual([
      state.todos[0],
      state.todos[2],
    ])
  });

  it('completedTodosCount のテスト', () => {
    const state = createMockState();
    const mockGetters = {
      get completedTodos() {
        return getters.completedTodos(state);
      }
    }

    const count = getters.completedTodosCount(null, mockGetters);
    expect(count).toEqual(2);
  });
})