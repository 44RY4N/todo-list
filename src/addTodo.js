import { state } from "./projectHandler.js";
import { editTodo } from "./popTodo.js"; // Import editTodo

const content = document.querySelector("#content");
const overlay = document.querySelector("#overlay");
function addTodo(todo, pushToItems = true) {
  if (pushToItems) {
    if (!state.currentProject || typeof state.currentProject === "string") {
      console.error("No valid project selected.");
      return;
    }
    state.currentProject.items.push(todo);
  }

  console.log("adding todo to dom");
  console.log(pushToItems);
  if (pushToItems) {
    console.log(
      `state.currentProject.length = ${state.currentProject.items.length}`,
    );
    if (state.currentProject.items.length == 1) {
      content.innerHTML = "";
    }
  }

  const contain = document.createElement("div");
  contain.classList.add("todoContainer");
  const title = document.createElement("div");
  title.classList.add("todoTitle");
  const desc = document.createElement("div");
  desc.classList.add("todoDesc");
  const duedate = document.createElement("div");
  duedate.classList.add("todoDuedate");
  const priority = document.createElement("div");
  priority.classList.add("todoPriority");
  const checked = document.createElement("div");
  checked.classList.add("todoChecked");

  title.textContent = todo.title;
  desc.textContent = todo.description;

  desc.addEventListener("click", () => {
    console.log("descn clicked");
    overlay.style.display = "flex";
    console.log("overlay changed");

    const popPro = document.querySelector("#popPro");
    const popTo = document.querySelector("#popTo");

    popPro.style.display = "none";
    popTo.style.display = "none";

    const fulldesc = document.createElement("div");
    fulldesc.id = "fulldesc";
    fulldesc.textContent = todo.description;

    overlay.appendChild(fulldesc);

    overlay.addEventListener("click", () => {
      fulldesc.style.display = "none";
      overlay.style.display = "none";
    });
  });

  duedate.textContent = todo.duedate;
  priority.textContent = `Priority: ${todo.priority}`;
  checked.textContent = "currently: Incomplete";
  contain.classList.add("incomplete");

  let priNum = todo.priority;
  if (priNum > 6 && priNum < 10) {
    contain.classList.add("high");
  } else if (priNum > 3 && priNum < 7) {
    contain.classList.add("med");
  } else {
    contain.classList.add("low");
  }

  const opts = document.createElement("div");
  opts.textContent = "*click on description to expand it";
  opts.id = "opts";

  const del = document.createElement("div");
  del.id = "del";
  del.textContent = "❌";

  //delete logic
  contain.dataset.todoId = todo.id;

  del.addEventListener("click", () => {
    if (!opts.classList.contains("disabled")) {
      // Check if opts is enabled
      deleteTodo(todo, contain);
    }
  });

  opts.appendChild(del);

  const edit = document.createElement("div");
  edit.id = "edit";
  edit.textContent = "✏️";

  //edit logic
  edit.addEventListener("click", () => {
    if (!opts.classList.contains("disabled")) {
      // Check if opts is enabled
      editTodo(todo);
    }
  });

  opts.appendChild(edit);

  checked.addEventListener("click", (e) => {
    if (e.currentTarget.parentElement.classList.contains("complete")) {
      e.currentTarget.parentElement.classList.add("incomplete");
      e.currentTarget.parentElement.classList.remove("complete");
      e.currentTarget.textContent = "currently: Incomplete";
      opts.classList.remove("disabled"); // Enable opts
      todo.checked = false; // Update todo object
      return;
    }

    e.currentTarget.parentElement.classList.remove("incomplete");
    e.currentTarget.parentElement.classList.add("complete");
    e.currentTarget.textContent = "currently: Completed";
    opts.classList.add("disabled"); // Disable opts
    todo.checked = true; // Update todo object
  });

  if (todo.checked) {
    contain.classList.remove("incomplete");
    contain.classList.add("complete");
    checked.textContent = "currently: Completed";
    opts.classList.add("disabled");
  }

  contain.appendChild(title);
  contain.appendChild(desc);
  contain.appendChild(duedate);
  contain.appendChild(priority);
  contain.appendChild(checked);
  contain.appendChild(opts);

  content.appendChild(contain);
}
function deleteTodo(todo, todoElement) {
  if (!state.currentProject || typeof state.currentProject === "string") {
    console.error("No valid project selected.");
    return;
  }
  // Remove todo from current Project
  state.currentProject.items = state.currentProject.items.filter(
    (t) => t.id !== todo.id,
  );
  // Remove ittt
  todoElement.remove();
  // update display if no tototo
  if (state.currentProject.items.length === 0) {
    content.textContent = "No todos in this project.";
  }
}

export { addTodo, deleteTodo };
