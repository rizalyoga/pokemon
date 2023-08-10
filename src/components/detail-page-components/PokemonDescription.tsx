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
      <h2 className="font-bold text-4xl tracking-tight">
        {pokemonData?.name.toLocaleUpperCase()}
      </h2>
      <h4 className="text-slate-400 font-semibold">
        #{pokemonNumberFormat(pokemonData.id)}
      </h4>
      <div className=" bg-blue-400 p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4">
        {/* colomn description */}
        <div className="flex justify-ceenter items-end py-6 w-[35rem] bg-slate-200 bg-opacity-70 rounded-md ml-4 animate-show-image-animation max-[770px]:ml-0 max-[770px]:w-full max-[770px]:h-full max-[770px]:p-4">
          <span className="text-center basis-1/3 ">
            <p className="font-bold text-xl text-slate-700 max-[530px]:font-semibold max-[530px]:text-sm">
              {pokemonData.types.length == 1
                ? pokemonData?.types[0]?.type?.name.toUpperCase()
                : `${pokemonData.types[0].type.name.toUpperCase()} / ${pokemonData.types[1].type.name.toUpperCase()}`}
            </p>
            <p className="text-slate-500 text-sm">Type</p>
          </span>

          <span className="text-center basis-1/3">
            <p className="font-bold text-2xl text-slate-700 max-[530px]:font-semibold max-[530px]:text-base">
              {pokemonHeightFormat(pokemonData?.height)} m
            </p>
            <p className="text-slate-500 text-sm">Height</p>
          </span>

          <span className="text-center basis-1/3">
            <p className="font-bold text-2xl text-slate-700 max-[530px]:font-semibold max-[530px]:text-base">
              {pokemonWeightFormat(pokemonData?.weight)} kg
            </p>
            <p className="text-slate-500 text-sm">Weight</p>
          </span>
        </div>
        {/* Image-Colomn */}
        <div className="bg-pokeball-image bg-contain bg-no-repeat animate-show-image-animation min-h-[300px]">
          <img
            className="w-[30rem] py-4 pr-10 max-[770px]:pr-0 "
            src={getPokemonImage(idPokemon ? +idPokemon : 0)}
            alt={`Pokemon-image`}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonDescription;
