import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL_DATA } from "../../graphql/query/getPokemonDetailData";
import Loading from "../loading/Loading";

// Helper
import {
  setTypePokemon,
  setCategoryPokemon,
  getColorType,
} from "../../helper/pokemonMoveHelper";
import { upperFirstCharacter } from "../../helper/upperFirstCharacter";

export type MoveType = {
  name: string;
  url: string;
};

export interface MovesInterface {
  move: MoveType;
}

export interface PokemonMovesInterface {
  __typename: string;
  pokemon_v2_move: {
    accuracy: number;
    name: string;
    pp: number;
    power: number;
    type_id: number;
    pokemon_v2_movedamageclass: {
      name: string;
    };
  };
}

const MovesPokemon = ({ pokemonName }: { pokemonName: string }) => {
  const [getPokemonDetailData, { loading, error, data }] = useLazyQuery(
    GET_POKEMON_DETAIL_DATA,
    {
      variables: { name: pokemonName },
    }
  );

  const [pokemonMoves, setPokemonMoves] = useState<PokemonMovesInterface[]>([]);

  useEffect(() => {
    getPokemonDetailData().then(() => {
      setPokemonMoves(data?.pokemon_v2_pokemon[0]?.pokemon_v2_pokemonmoves);
    });
  }, [data, getPokemonDetailData]);

  if (loading) return <Loading />;
  if (error) console.log("error message :", error.message);

  return (
    <div className="relative p-8 bg-slate-300 bg-dark-card w-full rounded-lg shadow-md">
      <h3 className="font-bold text-2xl">Moves</h3>
      <div className="mt-6 overflow-y-auto max-h-[30rem]">
        <table className="table table-sm table-pin-rows">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Type</th>
              <th>Cat.</th>
              <th>Power</th>
              <th>Acc</th>
              <th>PP</th>
            </tr>
          </thead>
          <tbody>
            {pokemonMoves.map((move, index) => {
              return (
                <tr
                  className=" hover:bg-slate-200 hover:text-slate-600 duration-75"
                  key={index}
                >
                  <th>{index + 1}</th>
                  <td>{upperFirstCharacter(move.pokemon_v2_move?.name)}</td>
                  <td className="flex items-center">
                    <div
                      className={getColorType(move.pokemon_v2_move?.type_id)}
                    ></div>
                    <p className="pl-2">
                      {setTypePokemon(move.pokemon_v2_move.type_id)}
                    </p>
                  </td>
                  <td
                    title={
                      move.pokemon_v2_move?.pokemon_v2_movedamageclass.name
                    }
                  >
                    {setCategoryPokemon(
                      move.pokemon_v2_move?.pokemon_v2_movedamageclass.name
                    )}
                  </td>
                  <td>
                    {move.pokemon_v2_move?.power
                      ? move.pokemon_v2_move?.power
                      : "-"}
                  </td>
                  <td>
                    {move.pokemon_v2_move?.accuracy
                      ? move.pokemon_v2_move?.accuracy
                      : "-"}
                  </td>
                  <td>{move.pokemon_v2_move?.pp}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovesPokemon;
