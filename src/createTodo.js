import { addTodo } from "./addTodo";
class Todo {
  static copy = 1;
  static id = 1;
  constructor(title, description, duedate, priority, checked) {
    this.title = title || `Note#${Todo.copy++}`;
    this.description = description || "no description";
    this.duedate = duedate || "no duedate";
    this.priority = priority || 0;
    this.checked = checked || false;
    this.id = Todo.id++;
  }
  showTodo() {
    todoShower(this);
  }
}

function createTodo(title, description, duedate, priority, checked) {
  let newTodo = new Todo(title, description, duedate, priority, checked);
  addTodo(newTodo);
  return newTodo;
}

function todoShower(project) {
  console.log(`Todo Title => ${project.title}`);
  console.log(`Todo description => ${project.description}`);
  console.log(`Todo duedate => ${project.duedate}`);
  console.log(`Todo priority => ${project.priority}`);
  console.log(`Todo check status => ${project.checked}`);
}

export { createTodo };
