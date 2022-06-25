// Find the <li> elements
const elements = document.getElementsByTagName("li");

// If 1 or more elements with the tag <li>
// Select the first one using array syntax
// And change the value of the class attribute
if (elements.length > 0) {
    const el = elements[0];
    el.className = "cool";
}