import { gql } from "@apollo/client";

export const GET_POKEMON_DETAIL_DATA = gql`
  query Pokemon($name: String) {
    pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        stat_id
        base_stat
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          pokemon_v2_abilityeffecttexts(where: { language_id: { _eq: 9 } }) {
            short_effect
          }
          name
        }
      }
      pokemon_v2_pokemonmoves(distinct_on: move_id) {
        pokemon_v2_move {
          name
          type_id
          power
          accuracy
          pp
          pokemon_v2_movedamageclass {
            name
          }
        }
      }
    }
  }
`;
