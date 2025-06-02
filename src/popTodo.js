import {createTodo} from "./createTodo.js";
const overlay = document.querySelector("#overlay");
const popTo = document.createElement("div");

const title = document.createElement("input");
title.type = "text"

const desc = document.createElement("textarea");

const duedate = document.createElement("input");
duedate.type = "date";

const priority = document.createElement("input");
priority.type = "number";

const createButton = document.createElement("button");

    title.placeholder = "Enter project title";
    desc.placeholder = 'desc...';



    createButton.textContent = "Add Todo";
    createButton.addEventListener("click",()=>{
        createTodo(title.value,desc.value,duedate.valueAsNumber,priority.value,false);
        overlay.style.display = "none";
        title.value = "";
        desc.value = "";
        duedate.value = "";
        priority.value = ""
    });
    popTo.appendChild(title);
    popTo.appendChild(desc);
    popTo.appendChild(duedate);
    popTo.appendChild(priority);
    popTo.appendChild(createButton);
    overlay.addEventListener("click",()=>{
        overlay.style.display = "none";
    })
    popTo.id = "popTo";
    overlay.appendChild(popTo);

    popTo.addEventListener("click", (event) => event.stopPropagation());



function popTodo(){
    let rebel = document.querySelector("#popPro");
    rebel.style.display = "none";
    let antiRebel = document.querySelector("#popTo")
    antiRebel.style.display = "flex";
    overlay.style.display = "flex";
}

export {popTodo};