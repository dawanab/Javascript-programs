const paragraph = document.createElement("p");
const myInner = document.createElement("p");

// Using textContent (preferred way)
paragraph.textContent = "Harry Potter is a great movie series!";
console.log(paragraph);

// Using innerHTML
myInner.innerHTML = "I think GOT is a better series!";
console.log(myInner);
    