import { state } from "./projectHandler.js";
import { addTodo } from "./addTodo.js";

const content = document.querySelector("#content");

function showWeeklyTodos() {
  // Get current week's start Monday and end Sunday weekened
  const today = new Date();
  const dayOfWeek = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1)); // Set to Monday
  monday.setHours(0, 0, 0, 0); // start of day hrer
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6); // Set to Sunday
  sunday.setHours(23, 59, 59, 999); // End of day

  // Idk how this works, won't touch it  -----danger area
  const weeklyTodos = state.allProjects.flatMap((project) =>
    project.items.filter((todo) => {
      if (todo.duedate === "no duedate" || !todo.duedate) return false;
      // Convert due date to timestamp
      const dueDate = !isNaN(todo.duedate)
        ? new Date(todo.duedate)
        : new Date(todo.duedate);
      return dueDate >= monday && dueDate <= sunday;
    }),
  );

  // -------danger area ends

  content.innerHTML = "";

  //Display todos or show message
  if (weeklyTodos.length === 0) {
    content.textContent = "No todos due this week.";
  } else {
    weeklyTodos.forEach((todo) => {
      addTodo(todo, false); //Add to DOM without pushing to items
    });
  }
}

export { showWeeklyTodos };
