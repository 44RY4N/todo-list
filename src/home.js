const imageGalleria = document.createElement("div");
const body = document.querySelector("body");
imageGalleria.id = "image-galleria";

import src0 from "./img/item0.jpg";
import src1 from "./img/item1.jpg";
import src2 from "./img/item2.jpg";
import src3 from "./img/item3.jpg";
import src4 from "./img/item4.jpg";
import src5 from "./img/item5.jpg";
import src6 from "./img/item6.jpg";
import src7 from "./img/item7.jpg";
import src8 from "./img/item8.jpg";
import src9 from "./img/item9.jpg";

const imageSources = [
  src0,
  src1,
  src2,
  src3,
  src4,
  src5,
  src6,
  src7,
  src8,
  src9,
];
const fragment = document.createDocumentFragment();
const overlay = document.createElement("div");
overlay.classList.add("overlay");
for(let i = 0;i<10; i ++){
let item = document.createElement("div");
let img = document.createElement("img");
img.loading = "lazy";
img.src = imageSources[i];
img.addEventListener("mouseenter",(e)=>{
    let currentImages = Array.from(document.querySelectorAll("#image-galleria >div > img "));
    for(img of currentImages){
        img.style.filter = "blur(2px)";
    }
    e.target.style.filter = "none";
})

img.addEventListener("mouseleave", () => {
  let currentImages = document.querySelectorAll("#image-galleria > div > img");
  for (let img of currentImages) {
    img.style.filter = "none";
  }
});

img.addEventListener("click",(e)=>{
    e.target.classList.add("zoomed");
    overlay.style.display = "block";
    let curTarg = e.target;
    overlay.addEventListener("click",()=>{
        overlay.style.display = "none";
        curTarg.classList.remove("zoomed");
    })
})





item.appendChild(img);
fragment.appendChild(item);
}

function home(){
imageGalleria.appendChild(fragment);
const textbar = document.createElement("div");
textbar.textContent = "ＤＲＩＮＫＳ， ＡＰＰＥＴＩＺＥＲＳ ＡＮＤ ＭＯＲＥ";
textbar.classList.add("textBar");

body.prepend(imageGalleria);
const content = document.querySelector("#content");
content.appendChild(textbar);

const desc = document.createElement("div");
desc.textContent = "Step into a world of rich flavors, crafted dishes, and warm ambiance. Whether you're craving refreshing drinks, bold appetizers, or full-course delights, we've got something to satisfy every craving. At Savour, we believe food is not just nourishment — it's an experience. Explore our signature creations, enjoy seasonal specialties, and unwind with our handcrafted beverages — all served with style. Start your journey with us — where every bite tells a story."
desc.id = "desc";
content.appendChild(desc);

const desc2 = document.createElement("div");
desc2.textContent = "At Savour, every dish is a celebration of taste and tradition. Our chefs blend timeless recipes with a modern twist, creating meals that are both comforting and unforgettable. Whether you're joining us for a casual bite or a special evening, you'll find a welcoming space, attentive service, and flavors that keep you coming back for more."
desc2.id = "desc2";
content.appendChild(desc2);


body.appendChild(overlay);


const textbar2 = document.createElement("div");
textbar2.textContent = "ＮＯＷ ＳＥＲＶＩＮＧ ＯＲＧＡＮＩＣ ＭＵＳＨＲＯＯＭＳ";
textbar2.classList.add("textBar2");
content.appendChild(textbar2);
}






export {home};