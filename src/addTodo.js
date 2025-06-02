import { state } from "./projectHandler.js";

const content = document.querySelector("#content");

function addTodo(todo, pushToItems = true) {
    if (pushToItems) {
        if (!state.currentProject || typeof state.currentProject === "string") {
            console.error("No valid project selected.");
            return;
        }
        state.currentProject.items.push(todo);
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
    duedate.textContent = todo.duedate;
    priority.textContent = todo.priority;
    checked.textContent = todo.checked;

    contain.appendChild(title);
    contain.appendChild(desc);
    contain.appendChild(duedate);
    contain.appendChild(priority);
    contain.appendChild(checked);

    content.appendChild(contain);
}

export { addTodo };