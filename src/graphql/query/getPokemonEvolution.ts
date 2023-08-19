import { gql } from "@apollo/client";

export const GET_POKEMON_EVOLUTION = gql`
  query PokemonEvolution($offset: Int, $limit: Int) {
    pokemon_v2_evolutionchain(offset: $offset, limit: $limit) {
      pokemon_v2_pokemonspecies {
        id
        name
        evolves_from_species_id
        pokemon_v2_generation {
          id
        }
        pokemon_v2_pokemons(limit: 1) {
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
        pokemon_v2_pokemonevolutions {
          min_level
          pokemon_v2_evolutiontrigger {
            name
          }
          pokemon_v2_item {
            name
          }
        }
      }
    }
  }
`;
