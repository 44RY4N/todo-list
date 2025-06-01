

const conti = document.querySelector("#content");

function about(){

const hed = document.createElement("h1");
hed.textContent = "About our Journey";
hed.id = "hed";
conti.appendChild(hed);

const aboutDesc = document.createElement("div");
const aboutDesc2 =  document.createElement("div");
const aboutDesc3 =  document.createElement("div");
aboutDesc.textContent = "At Savour, our story is one of passion, tradition, and transformation. What began as a modest idea — to bring together the comforting flavors of home and the excitement of global cuisine — has grown into a culinary destination where every dish tells a story and every guest feels like family. Our journey started in a small kitchen, with a handful of heirloom recipes, a love for authentic ingredients, and the dream of creating a space that celebrates both food and connection. ";
aboutDesc2.textContent = "Over the years, we’ve expanded our menu, refined our flavors, and reimagined how dining can delight every sense — all while staying true to our roots. We believe that food is more than sustenance; it’s a shared language of joy, memory, and culture. From handcrafted appetizers and vibrant vegetarian mains to decadent desserts and house-special beverages, each plate is thoughtfully prepared to evoke warmth, wonder, and satisfaction. Our team is driven by creativity, integrity, and an unyielding respect for quality.";
aboutDesc3.textContent = "From our chefs to our servers, every member is part of the story — a story that continues to unfold with every visit, every smile, and every satisfied bite. Thank you for being part of our journey. Here's to good food, great company, and the memories we create together."; 
aboutDesc.id = "aboutDesc";
aboutDesc2.id = "aboutDesc2";
aboutDesc3.id = "aboutDesc3";
conti.appendChild(aboutDesc);
conti.appendChild(aboutDesc2);
conti.appendChild(aboutDesc3);

const contForm = document.createElement("form");
contForm.id ="contForm";
contForm.innerHTML = `
  <h2>Contact Us</h2>

  <label for="name">Name</label>
  <input type="text" id="name" name="name" required placeholder="Your full name">

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required placeholder="you@example.com">

  <label for="phone">Phone</label>
  <input type="tel" id="phone" name="phone" placeholder="+91-XXXXXXXXXX">

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4" placeholder="Let us know how we can help" required></textarea>

  <button type="submit">Send Message</button>
`;
contForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! We'll get back to you shortly.");
});

conti.appendChild(contForm);

}

export {about};