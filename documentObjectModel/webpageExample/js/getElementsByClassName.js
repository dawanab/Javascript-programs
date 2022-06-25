// Find elements with class name 'hot'
const elements = document.getElementsByClassName("hot");

// If 3 or moore elements with class name 'hot' are found, 
// selsect the 3rd one from the NodeList, and change the value
// of its class attribute
if (elements.length > 2) {
    const el = elements[2];
    el.className = "cool";
}