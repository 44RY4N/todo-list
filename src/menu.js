
const cont = document.querySelector("#content");
import menuImg1 from "./img/menu1.png";

function menu(){
    const tit = document.createElement("h1");
    tit.textContent = "The cuisine we desire to offer..."
    tit.style.fontFamily = "Times New Roman";
    tit.id = "tit";
    cont.appendChild(tit);
    const imageCont = document.createElement("div");
    imageCont.id = "imageCont";
    const menu1 = document.createElement("img");
    menu1.id = "menu1";
    menu1.src = menuImg1;
    imageCont.appendChild(menu1);

    cont.appendChild(imageCont);
}


export {menu};