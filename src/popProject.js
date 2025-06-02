import {createProject} from "./createProject.js";
const overlay = document.querySelector("#overlay");
const popPro = document.createElement("div");
const titleBox = document.createElement("input");
const descBox = document.createElement("textarea");
const createButton = document.createElement("button");

    titleBox.type = "text";
    titleBox.placeholder = "Enter project title";
    descBox.placeholder = 'desc...';
    createButton.textContent = "Add Project";
    createButton.addEventListener("click",()=>{
        createProject(titleBox.value,descBox.value);
        overlay.style.display = "none";
        titleBox.value = "";
        descBox.value = "";
    });
    popPro.appendChild(titleBox);
    popPro.appendChild(descBox);
    popPro.appendChild(createButton);
    overlay.addEventListener("click",()=>{
        overlay.style.display = "none";
    })
    popPro.id = "popPro";
    overlay.appendChild(popPro);

    popPro.addEventListener("click", (event) => event.stopPropagation());



function popProject(){
    let rebel = document.querySelector("#popTo");
    rebel.style.display = "none";
    let antiRebel = document.querySelector("#popPro")
    antiRebel.style.display = "flex";
    overlay.style.display = "flex";
}

export {popProject};