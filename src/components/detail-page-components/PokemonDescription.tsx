import { useParams } from "react-router-dom";
import {
  pokemonNumberFormat,
  pokemonHeightFormat,
  pokemonWeightFormat,
} from "../../helper/pokemonNumberFormat";

import { getPokemonImage } from "../../api/getDataPokemon";
import { DetailPokemonInterface } from "../../pages/detail-page/DetailPage";

const PokemonDescription = ({
  pokemonData,
}: {
  pokemonData: DetailPokemonInterface;
}) => {
  const { idPokemon } = useParams();

  return (
    <div className="desription-component realtive w-full rounded-lg bg-slate-300 bg-dark-card shadow-md mx-2 p-8">
      <h2 className="font-bold text-4xl">
        {pokemonData?.name.toLocaleUpperCase()}
      </h2>
      <h4 className="text-slate-400 font-semibold">
        #{pokemonNumberFormat(pokemonData.id)}
      </h4>
      <div className=" bg-blue-400 p-4 mt-6 rounded-md flex justify-around items-center">
        <div className="flex justify-evenly items-center h-[6rem] w-[35rem] bg-slate-200 bg-opacity-70 rounded-md ml-4 animate-show-image-animation">
          <span className="text-center">
            <p className="font-bold text-md text-slate-700 ">
              {pokemonData.types.length == 1
                ? pokemonData?.types[0]?.type?.name.toUpperCase()
                : `${pokemonData.types[0].type.name.toUpperCase()} / ${pokemonData.types[1].type.name.toUpperCase()}`}
            </p>
            <p className="text-slate-500">Type</p>
          </span>
          <div className="min-h-[80%] min-w-[1px] bg-slate-400"></div>
          <span className="text-center">
            <p className="font-bold text-2xl text-slate-700 ">
              {pokemonHeightFormat(pokemonData?.height)} m
            </p>
            <p className="text-slate-500">Height</p>
          </span>
          <div className="min-h-[80%] min-w-[1px] bg-slate-400"></div>
          <span className="text-center">
            <p className="font-bold text-2xl text-slate-700 ">
              {pokemonWeightFormat(pokemonData?.weight)} kg
            </p>
            <p className="text-slate-500">Weight</p>
          </span>
        </div>
        <div className="bg-pokeball-image bg-contain bg-no-repeat animate-show-image-animation">
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

export default PokemonDescription;
