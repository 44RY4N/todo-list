import "./styles.css";
import {popProject} from "./popProject.js";
import {popTodo} from "./popTodo.js";
import { createProject } from "./createProject.js";
import { createTodo } from "./createTodo.js";
import {showTodayTodos} from "./todayFilter.js";
import {showWeeklyTodos} from "./weeklyFilter.js";
import { displayAllTodos } from "./allFilter.js";
const header = document.querySelector("header");


// creating title 
const title = document.createElement("h1");
title.textContent = "Your Digital Todo-List";
header.appendChild(title);

//default initialization
let defaultProject =  createProject("","");
let defaultTodo = createTodo("","example project","","","");
defaultProject.add(defaultTodo);

console.log("all projects in index")

//popUpProject

const newProjectButton = document.querySelector("#project");
newProjectButton.addEventListener("click",popProject);

//popUpTodo

const newTodoButton = document.querySelector("#newtodo");
newTodoButton.addEventListener("click",popTodo)

//today filter 

const todayButton = document.querySelector("#daily");
todayButton.addEventListener("click",showTodayTodos);

//weekly filter 

const weeklyButton = document.querySelector("#weekly");
weeklyButton.addEventListener("click",showWeeklyTodos);

//All filter 

const allButton = document.querySelector("#all");
allButton.addEventListener("click",displayAllTodos);


// default load up
const defPro = document.querySelector("#projectContainer div");
defPro.click();


