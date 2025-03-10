// Declaration of pokemon array with each object
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
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
    listItem.classList.add("list-group-item"); //add bootstrap list class

    let button = document.createElement("button"); // Create button
    button.innerText = pokemon.name; // Set button text

    // Add Bootstrap button utility classes
    button.classList.add("btn", "btn-primary", "w-100", "text-capitalize");

    // Attach modal attributes
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#pokemonModal");

    // Accessibility: Add aria-label
    button.setAttribute("aria-label", `View details for ${pokemon.name}`);

    listItem.appendChild(button); // Append button to list item
    pokemonListElement.appendChild(listItem); // Append list item to <ul>

    button.addEventListener("click", function (event) {
      showDetails(pokemon); // Log Pokémon  on click
    });

  }

  //Create a promise function to etch data from the API, 
  // then add each Pokémon in the fetched data to pokemonList
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //create a function to fetch detailed data for a pokemon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  // Create a function to show the modal
  function showModal(name, height, imageUrl) {
    // Update modal content
    document.getElementById("modalLabel").innerText = name;
    document.getElementById("modal-height").innerText = `Height: ${height}`;
    document.getElementById("modal-image").src = imageUrl;

    $('#pokemonModal').modal('show');
  }

  // Function to log Pokémon details that have been fetched..
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      // Update modal content with Pokémon details
      document.getElementById("modalLabel").innerText = pokemon.name;
      document.getElementById("modal-height").innerText = `Height: ${pokemon.height}`;
      document.getElementById("modal-image").src = pokemon.imageUrl;

      $('#pokemonModal').modal('show');
    });
  }





  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem, // Make function accessible outside IIFE
    loadList: loadList,
    loadDetails: loadDetails
  };
})();



pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  // Call addListItem() inside forEach loop
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});



