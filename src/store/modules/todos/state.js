import Todo from '../../../models/Todo'

export const state = {
  todos: [
    new Todo('タスク1', true),
    new Todo('タスク2'),
    new Todo('タスク3', true),
  ]
};