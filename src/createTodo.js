import { addTodo } from "./addTodo";
import {Storage} from "./localStorage.js";
import {state} from "./projectHandler.js"
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
  toJSON(){
    return {
      title: this.title,description: this.description,duedate: this.duedate,priority: this.priority,checked:this.checked,id:this.id
    }
  }
}

function createTodo(title, description, duedate, priority, checked) {
  let newTodo = new Todo(title, description, duedate, priority, checked);
  addTodo(newTodo);
  Storage.save(state.allProjects);
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
