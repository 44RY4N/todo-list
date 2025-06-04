import { displayTodos } from "./displayTodos.js";
import { state } from "./projectHandler.js";
const container = document.querySelector("#projectContainer");

function addProject(project) {
  const newProject = document.createElement("div");
  newProject.classList.add("projectTitle");
  newProject.textContent = project.title;
  newProject.dataset.projectId = project.id;
  newProject.addEventListener("click", (e) => {
    if (e.currentTarget.dataset.projectId == state.currentProject.id) return;
    console.log("event listner added");
    displayTodos(e);
  });
  container.appendChild(newProject);
}

export { addProject };
