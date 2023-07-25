const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";
const POKEMON_IMAGE = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

export const getPokemonImage = (index: number) => {
  return POKEMON_IMAGE.concat(index.toString()).concat(".png");
};

export const getAllDataPokemon = async () => {
  const response = await fetch(POKEMON_API.concat("?limit=12"));

  return response.json();
};

export const getNextDataPokemon = async (dataLength: number, limit: number) => {
  const response = await fetch(
    POKEMON_API.concat(`?offset=${dataLength}&limit=${limit}`)
  );

  return response.json();
};

export const getKantoPokemon = async () => {
  const response = await fetch(POKEMON_API.concat("?limit=151"));

  return response.json();
};

export const getJohtoPokemon = async () => {
  const response = await fetch(POKEMON_API.concat("?offset=151&limit=100"));

  return response.json();
};

export const getPokemonFilter = async (params: string) => {
  const response = await fetch(POKEMON_API.concat("?limit=500"));
  const data = await response.json();

  const PokemoData = data.results.filter(
    (pokemon: { name: string; url: string }) => {
      return pokemon.name.toLowerCase().includes(params.toLowerCase());
    }
  );

  return PokemoData;
};

export const getDetailPokemon = async (index: string) => {
  // console.log(POKEMON_API.concat(index));

  const response = await fetch(POKEMON_API.concat(`/${index}`));

  return response.json();
};
