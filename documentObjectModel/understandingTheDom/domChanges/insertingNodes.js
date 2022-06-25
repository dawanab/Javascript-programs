// Anime list ul element
const anime = document.querySelector("ul");

// Add a new anime 
const newAnime = document.createElement("li");
newAnime.textContent = "Demon Slayer"

// Append to the current list on the document
anime.appendChild(newAnime);

// Add another anime
const anotherAnime = document.createElement("li");
anotherAnime.textContent = "Castlevania";

// Add new anime to the beginning of the list
anime.insertBefore(anotherAnime, anime.firstElementChild);

// Node that will replace another
const replaced = document.createElement("li");
replaced.textContent = "Cowboy Bebop";

// Replace the third element child of the list with replaced
anime.replaceChild(replaced, anime.children[2]);

// Remove an element 
anime.removeChild(anime.lastElementChild);

// Remove the node itself
anime.firstElementChild.remove();
