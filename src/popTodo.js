import { createTodo } from "./createTodo.js";
import { deleteTodo } from "./addTodo.js";
import { state } from "./projectHandler.js";

const overlay = document.querySelector("#overlay");
const popTo = document.createElement("div");

const title = document.createElement("input");
title.id = "popTodoTitle";
title.type = "text";
title.maxLength = "30";
title.placeholder = "Enter Todo Title"; // Fix placeholder

const desc = document.createElement("textarea");
desc.maxLength = "300";
desc.id = "popTodoDesc";
desc.placeholder = "Description...";

const duedate = document.createElement("input");
duedate.type = "date";
duedate.id = "popTodoDuedate";

const priority = document.createElement("input");
priority.type = "number";
priority.placeholder = "1-9";
priority.max = "9";
priority.min = "1";
priority.id = "popTodoPriority";

const createButton = document.createElement("button");

let editTodoId = null;

createButton.textContent = "Add Todo";
createButton.addEventListener("click", () => {
  // Validate priority
  if (priority.value > 9 || priority.value < 0) {
    alert("Enter a valid priority (1-9)");
    return;
  }

  if (editTodoId !== null) {
    // Edit mode: Create new todo and delete old one
    console.log(`Editing todo with ID: ${editTodoId}`);
    const newTodo = createTodo(
      title.value,
      desc.value,
      duedate.value || "no duedate",
      priority.value || 0,
      false,
    );
    const oldTodo = state.currentProject?.items.find(
      (t) => t.id === editTodoId,
    );
    const oldTodoElement = document.querySelector(
      `[data-todo-id="${editTodoId}"]`,
    );
    console.log("Old todo:", oldTodo);
    console.log("Old todo element:", oldTodoElement);
    if (oldTodo && oldTodoElement) {
      deleteTodo(oldTodo, oldTodoElement);
    } else {
      console.error("Failed to find old todo or element for deletion:", {
        oldTodo,
        oldTodoElement,
      });
    }
    editTodoId = null;
    createButton.textContent = "Add Todo";
  } else {
    // Normal mode: Create new todo
    console.log("Creating new todo");
    createTodo(
      title.value,
      desc.value,
      duedate.value || "no duedate",
      priority.value || 0,
      false,
    );
  }

  overlay.style.display = "none";
  title.value = "";
  desc.value = "";
  duedate.value = "";
  priority.value = "";
});

popTo.appendChild(title);
popTo.appendChild(desc);
popTo.appendChild(duedate);
popTo.appendChild(priority);
popTo.appendChild(createButton);

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  editTodoId = null;
  createButton.textContent = "Add Todo";
});

popTo.id = "popTo";
overlay.appendChild(popTo);

popTo.addEventListener("click", (event) => event.stopPropagation());

function popTodo() {
  let rebel = document.querySelector("#popPro");
  rebel.style.display = "none";
  let antiRebel = document.querySelector("#popTo");
  antiRebel.style.display = "flex";
  overlay.style.display = "flex";
  editTodoId = null;
  createButton.textContent = "Add Todo";
}

function editTodo(todo) {
  popTodo(); // Open popup
  editTodoId = todo.id; // Store todo ID for editing
  createButton.textContent = "Done"; // Change button text
  // Pre-fill fields
  document.querySelector("#popTodoTitle").value = todo.title;
  document.querySelector("#popTodoDesc").value = todo.description;
  document.querySelector("#popTodoDuedate").value =
    todo.duedate !== "no duedate" && !isNaN(todo.duedate)
      ? new Date(todo.duedate).toISOString().split("T")[0]
      : "";
  document.querySelector("#popTodoPriority").value = todo.priority;
}

export { popTodo, editTodo };
