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
}
