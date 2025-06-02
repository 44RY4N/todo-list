import "./styles.css";
import {popProject} from "./popProject.js";
import {popTodo} from "./popTodo.js";
import { createProject } from "./createProject.js";
import { createTodo } from "./createTodo.js";

const header = document.querySelector("header");


// creating title 
const title = document.createElement("h1");
title.textContent = "Your Digital Todo-List";
header.appendChild(title);

//default initialization
let defaultProject =  createProject("","");
let defaultTodo = createTodo("","","","","");
defaultProject.add(defaultTodo);

console.log("all projects in index")

//popUpProject

const newProjectButton = document.querySelector("#project");
newProjectButton.addEventListener("click",popProject);

//popUpTodo

const newTodoButton = document.querySelector("#newtodo");
newTodoButton.addEventListener("click",popTodo)


const defPro = document.querySelector("#projectContainer div");
defPro.click();


