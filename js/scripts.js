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

  return {
    add: add,
    getAll: getAll
  };
})();





//using foreach method for looping over the array with a condition
pokemonRepository.getAll().forEach(pokemon => {
  if (pokemon.height > 1.1) {
    document.write(`${pokemon.name} (height: ${pokemon.height}) - Wow that's big!<br>`);
  } else {
    document.write(`${pokemon.name} (height: ${pokemon.height})<br>`);
  }
});


