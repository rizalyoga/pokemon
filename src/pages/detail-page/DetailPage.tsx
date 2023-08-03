import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetailPokemon, getPokemonImage } from "../../api/getDataPokemon";
import { pokemonNumberFormat } from "../../helper/pokemonNumberFormat";

import Loading from "../../components/loading/Loading";

type typesPokemon = {
  type: {
    name: string;
    url: string;
  };
};

export interface DetailPokemonInterface {
  id: number;
  abilities: [];
  stats: [];
  name: string;
  height: number;
  weight: number;
  types: typesPokemon[];
  species: {
    name: string;
    url: string;
  };
}
const DetailPage = () => {
  const { idPokemon } = useParams();

  const [pokemonData, setPokemonData] = useState<DetailPokemonInterface>();

  useEffect(() => {
    if (idPokemon)
      getDetailPokemon(idPokemon as string).then((response) =>
        setPokemonData(response)
      );
  }, [idPokemon]);

  if (!pokemonData) {
    return <Loading />;
  }

  console.log(pokemonData);

  return (
    <div className="w-full flex justify-center items-center my-8">
      <div className="realtive w-full rounded-lg bg-slate-300 bg-dark-card shadow-md mx-2 p-8">
        <h2 className="font-bold text-4xl basis-10/12">
          {pokemonData?.name.toLocaleUpperCase()}
        </h2>
        <h4 className="text-slate-400 font-semibold">
          #{pokemonNumberFormat(pokemonData.id)}
        </h4>
        <div className=" bg-sky-400 p-4 mt-6 rounded-md flex justify-around items-center">
          <div className="flex justify-around items-center min-h-[6rem] min-w-[40rem] bg-slate-200 rounded-md ml-4">
            <span className="text-center">
              <p className="font-bold text-md text-slate-700 ">
                {pokemonData.types.length == 1
                  ? pokemonData?.types[0]?.type?.name.toUpperCase()
                  : `${pokemonData.types[0].type.name.toUpperCase()} / ${pokemonData.types[1].type.name.toUpperCase()}`}
              </p>
              <p className="text-slate-500">Type</p>
            </span>

            <span className="text-center">
              <p className="font-bold text-2xl text-slate-700 ">
                {pokemonData?.height} m
              </p>
              <p className="text-slate-500">Height</p>
            </span>

            <span className="text-center">
              <p className="font-bold text-2xl text-slate-700 ">
                {pokemonData?.weight} kg
              </p>
              <p className="text-slate-500">Weight</p>
            </span>
          </div>
          <img
            className="w-[30rem] py-4 pr-10 "
            src={getPokemonImage(idPokemon ? +idPokemon : 0)}
            alt={`Pokemon-image`}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
