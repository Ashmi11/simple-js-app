// Declaration of pokemon array with each object
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,          // in m
      types: ['grass', 'poison']  // array of strings
    },
    {
      name: "Charizard",
      height: 1.7,
      types: ['fire', 'flying']

    },
    {
      name: "Butterfree",
      height: 1.1,
      types: ['bug', 'flying']

    }
  ];
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  // Function to show Pokémon details
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  // Function to add event listener separately 
  function addEventListenerToButton(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector(".pokemon-list"); // Select <ul>

    let listItem = document.createElement("li"); // Create list item
    let button = document.createElement("button"); // Create button

    button.innerText = pokemon.name; // Set button text
    button.classList.add("pokemon-button"); // Add class for styling

    button.addEventListener("click", function () {
      console.log(pokemon.name); // Log Pokémon name on click
    });

    listItem.appendChild(button); // Append button to list item
    pokemonListElement.appendChild(listItem); // Append list item to <ul>

    addEventListenerToButton(button, pokemon); // Add event listener
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem, // Make function accessible outside IIFE
  };
})();


// Call addListItem() inside forEach loop
pokemonRepository.getAll().forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});


