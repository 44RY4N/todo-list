import "./styles.css";
import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

const body = document.querySelector("body");
const content =  document.querySelector("#content");

//added header

const header = document.querySelector("header");
const title = document.createElement("h1");
title.textContent = "Restaurant";
header.appendChild(title);

// added footer

const footer = document.createElement("footer");
footer.classList.add("footer");
const p1 = document.createElement("p");
p1.innerHTML = "&copy; 2025 Savour Restaurant. All rights reserved.";

const p2 = document.createElement("p");
p2.textContent = "Crafted with 🍽️ and 💻 by our web team.";

const p3 = document.createElement("p");
p3.textContent = "123 Flavor Street, Foodville · Call us: (123) 456-7890";

footer.appendChild(p1);
footer.appendChild(p2);
footer.appendChild(p3);

// Append footer to the end of the body or a specific container
body.appendChild(footer);


const homeButton = document.querySelector("#home");
homeButton.addEventListener("click",()=>{
    if(body.classList.contains("home")) return;
    content.innerHTML = '';
    home();
    body.classList.add("home");
    body.classList.remove("menu");
    body.classList.remove("about");
});

const menuButton = document.querySelector("#menu");

menuButton.addEventListener("click",()=>{
    if(body.classList.contains("menu")) return;
    content.innerHTML = '';
    // remove galleria seperately
    let imageGalleria = document.querySelector("#image-galleria");
    if(imageGalleria) imageGalleria.remove();
    menu();

    body.classList.add("menu");
    body.classList.remove("about");
    body.classList.remove("home");
})

const aboutButton = document.querySelector("#about");

aboutButton.addEventListener("click",()=>{
    if(body.classList.contains("about")) return;
    content.innerHTML = '';
    // remove galleria seperately
    let imageGalleria = document.querySelector("#image-galleria");
    if(imageGalleria) imageGalleria.remove();
    about();

    body.classList.add("about");
    body.classList.remove("menu");
    body.classList.remove("home");
})



homeButton.click();
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});


