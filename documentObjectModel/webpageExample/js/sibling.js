// Select the starting point and find its siblings
const start = document.getElementById("two");
const prev = start.previousElementSibling;
const next = start.nextElementSibling;

// Change the values of the siblings' class attributes
prev.className = "complete";
next.className = "cool";