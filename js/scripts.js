let pokemonList = []; // Declaraing empty array-will be used to store pokemon data

//Adding 3 elements to arraty(pokemons of type object)
pokemonList[0] = {
  name: "Bulbasaur",
  height: 0.7,          // in m
  types: ['grass', 'poison']  // array of strings
}

pokemonList[1] = {
  name: "Charizard",
  height: 1.7,
  types: ['fire', 'flying']

}

pokemonList[2] = {
  name: "Butterfree",
  height: 1.1,
  types: ['bug', 'flying']

}


//looping over the array with a condition
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.1) {
    document.write(pokemonList[i].name + "(height:" + pokemonList[i].height + ")" + " - Wow that's big!<br>");
  }
  else {
    document.write(pokemonList[i].name + "(height:" + pokemonList[i].height + ")<br>"); //<br> (line breaks) used to display pokemons on different lines..
  }
}



