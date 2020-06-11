import { mutations } from '../../../../store/modules/todos/mutations';
import Todo from '../../../../models/Todo';

describe('store/modules/todos/mutationのテスト', () => {
  const createMockState = () => {
    return {
      todos: [
        new Todo('todo1', true),
        new Todo('todo2', false),
        new Todo('todo3', true),
      ]
    };
  };

  it('completeTodoのテスト', () => {
    const state = createMockState();
    expect(state.todos[1].completed).toEqual(false);

    const payload = { id: state.todos[1].id };
    mutations.completeTodo(state, payload);

    expect(state.todos[1].completed).toEqual(true);
  });

  it('initTodoのテスト', () => {
    const state = createMockState();
    expect(state.todos[0].completed).toEqual(true);

    const payload = { id: state.todos[0].id };
    mutations.initTodo(state, payload);

    expect(state.todos[0].completed).toEqual(false);
  });
})