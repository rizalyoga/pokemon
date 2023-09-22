export interface EvolutionLineType {
  evolves_from_species_id: number | null;
  id: number;
  name: string;
  pokemon_v2_generation: {
    id: number;
  };
  pokemon_v2_pokemonevolutions: {
    min_level: number;
    pokemon_v2_evolutiontrigger: {
      name: string;
    };
    pokemon_v2_item: null | string;
  }[];
}

export interface PokemonEvolutionInterface {
  pokemon_v2_pokemonspecies: EvolutionLineType[];
  __typename: string;
}

export interface PokemonType {
  __typename: string;
  id: number;
  name: string;
  evolves_from_species_id: number | null;
  pokemon_v2_generation: {
    __typename: string;
    id: number;
  };
  pokemon_v2_pokemons: Pokemon[];
  pokemon_v2_pokemonevolutions: {
    min_level: number;
    pokemon_v2_evolutiontrigger: {
      name: string;
    };
    pokemon_v2_item: null | string;
  }[]; // Anda dapat mengganti ini sesuai dengan tipe data sebenarnya
}

export interface Pokemon {
  __typename: string;
  name: string;
  pokemon_v2_pokemontypes: PokemonType[];
}
