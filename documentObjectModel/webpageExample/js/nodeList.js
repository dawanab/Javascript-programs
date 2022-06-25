// Store NodeList in an array...
// If it contains items...
// Loop through each items and...
// Change value of class attributes

const hotItems = document.querySelectorAll(".hot");
if (hotItems.length > 0) {
    for (let i = 0; i < hotItems.length; i++) {
        hotItems[i].className = "cool";
    }
}