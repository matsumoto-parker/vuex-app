let nextId = 1;

class Todo {
  constructor(title, completed = false) {
    this.id = nextId++;
    this.title = title;
    this.completed = completed;
  }

  finish() {
    this.completed = true;
  }

  init() {
    this.completed = false;
  }
}

export default Todo;