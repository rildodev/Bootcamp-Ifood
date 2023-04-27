

const offset = 0;
const limit = 0;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


/* requisição da API */
fetch(url).then(function (response) {
  console.log(response)
})