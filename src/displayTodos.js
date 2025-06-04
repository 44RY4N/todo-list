import { state } from "./projectHandler.js";
import { addTodo } from "./addTodo.js";

const content = document.querySelector("#content");

function displayTodos(e) {
  content.innerHTML = ``; // Clear the content
  const clickedId = Number(e.currentTarget.dataset.projectId);
  const currentProject1 = state.allProjects.find((p) => p.id === clickedId);

  if (!currentProject1) {
    console.error("Project not found for ID:", clickedId);
    content.textContent = "Project not found.";
    return;
  }

  if (currentProject1.items.length === 0) {
    content.textContent = "No todos in this project.";
  } else {
    for (let todo of currentProject1.items) {
      addTodo(todo, false); // Pass flag to prevent pushing to items
    }
  }

  state.currentProject = currentProject1;
  console.log("Project found", currentProject1.title);
}

export { displayTodos };
