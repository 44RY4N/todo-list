import { state } from "./projectHandler.js";
import { Storage } from "./localStorage.js";
import { addTodo } from "./addTodo.js";

function deleteProject() {
  // Check if a project is selected
  if (!state.currentProject) {
    console.warn("No project selected to delete.");
    return;
  }

  // Remove project from DOM (#projectContainer)
  const projectContainer = document.querySelector("#projectContainer");
  if (projectContainer) {
    const projectElement = projectContainer.querySelector(
      `[data-project-id="${state.currentProject.id}"]`
    );
    if (projectElement) {
      projectElement.remove();
    }
  }

  // Remove project from state.allProjects
  state.allProjects = state.allProjects.filter(
    (project) => project.id !== state.currentProject.id
  );

  // Re-initialize currentProject to first project or null
  state.currentProject = state.allProjects[0] || null;

  // Clear todo containers from #content and update UI
  const content = document.querySelector("#content");
  if (content) {
    content.innerHTML = ""; // Clear all todos
    if (state.currentProject) {
      // Display todos for new currentProject, if any
      state.currentProject.items.forEach((todo) => {
        // Assuming addTodo is imported; adjust as needed
        addTodo(todo, false);
      });
    } else {
      content.textContent = "No project selected.";
    }
  }

  // Save updated state to localStorage
  Storage.save(state.allProjects);
}

export { deleteProject };