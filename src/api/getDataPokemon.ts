const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";
// const POKEMON_IMAGE = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
const POKEMON_IMAGE = `https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

export const getPokemonImage = (index: number) => {
  return POKEMON_IMAGE.concat(index.toString()).concat(".png");
};

export const getAllDataPokemon = async () => {
  const response = await fetch(POKEMON_API.concat("?limit=16"));

  return response.json();
};

export const getNextDataPokemon = async (dataLength: number, limit: number) => {
  const response = await fetch(
    POKEMON_API.concat(`?offset=${dataLength}&limit=${limit}`)
  );

  return response.json();
};

export const getRegionPokemon = async (offset: string, limit: string) => {
  const response = await fetch(
    POKEMON_API.concat(`?offset=${offset}&limit=${limit}`)
  );

  return response.json();
};

export const getPokemonFilter = async (params: string) => {
  const response = await fetch(POKEMON_API.concat("?limit=1008"));
  const data = await response.json();

  const PokemoData = data.results.filter(
    (pokemon: { name: string; url: string }) => {
      return pokemon.name.toLowerCase().includes(params.toLowerCase());
    }
  );

  return PokemoData;
};

export const getDetailPokemon = async (index: string) => {
  const response = await fetch(POKEMON_API.concat(`/${index}`));

  return response.json();
};
