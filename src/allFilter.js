import { state } from "./projectHandler.js";
import { addTodo } from "./addTodo.js";

const content = document.querySelector("#content");

function displayAllTodos() {
  // checks for valid current project
  if (!state.currentProject || typeof state.currentProject === "string") {
    console.error("No valid project selected.");
    content.innerHTML = "Please select a project to view todos.";
    return;
  }
  content.innerHTML = "";

  //display all todos or show message
  if (state.currentProject.items.length === 0) {
    content.textContent = "No todos in this project.";
  } else {
    state.currentProject.items.forEach((todo) => {
      addTodo(todo, false); // add DOM, without pushing to items
    });
  }
}

export { displayAllTodos };
