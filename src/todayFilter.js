import { state } from "./projectHandler.js";
import { addTodo } from "./addTodo.js"; // Import addTodo

const content = document.querySelector("#content");

function showTodayTodos() {
  // Get today's date in right format
  const today = new Date().toISOString().split("T")[0];

  // Check if there's a valid current project
  // very important step

  if (!state.currentProject || typeof state.currentProject === "string") {
    console.error("No valid project selected.");
    content.innerHTML = "Please select a project to view today's todos.";
    return;
  }

  // Filter todos with due date matching today
  const todaysTodos = state.allProjects.flatMap((project) =>
    project.items.filter((todo) => {
      if (todo.duedate === "no duedate" || !todo.duedate) return false;
      const dueDate = !isNaN(todo.duedate)
        ? new Date(todo.duedate).toISOString().split("T")[0]
        : todo.duedate;
      return dueDate === today;
    }),
  );

  // Clear content once
  content.innerHTML = "";

  // Display todos or show message if none
  if (todaysTodos.length === 0) {
    content.textContent = "No todos due today.";
  } else {
    todaysTodos.forEach((todo) => {
      addTodo(todo, false); // Add to DOM without pushing to items
    });
  }
}

export { showTodayTodos };
