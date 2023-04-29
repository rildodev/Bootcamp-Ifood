const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToHtml(pokemon) {
  return `<li class="pokemon">
  <span class="number">#001</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">
    <ol class="types">
      <li class="type">grass</li>
      <li class="type">posion</li>
    </ol>

    <img src="assets/images/bubasaurStatic.png" alt="${pokemon.name}" />
  </div>
</li>`;
}

const pokemonList = document.getElementById("pokemonList");

/* requisição da API */
pokeApi.getPokemons().then((pokemons) => {
  const listItems = [];

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    listItems.push(convertPokemonToHtml(pokemon));
  }
  console.log(listItems);
});
