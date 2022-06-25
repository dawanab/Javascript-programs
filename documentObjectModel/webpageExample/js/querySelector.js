// querySelector only returns the first node
const el = document.querySelector(".hot");
el.className = "cool";

// querySelectorAll returns a NodeList.
// The 3rd <li> is then selected and changed
const elements = document.querySelectorAll(".hot");
elements[1].className = "cool";