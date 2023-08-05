import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetailPokemon } from "../../api/getDataPokemon";

import Loading from "../../components/loading/Loading";
import EvolutionLineComponent from "../../components/detail-page-components/EvolutionLine";
import MovesPokemon from "../../components/detail-page-components/MovesPokemon";
import StatsPokemon from "../../components/detail-page-components/StatsPokemon";
import PokemonDescription from "../../components/detail-page-components/PokemonDescription";
import ScrollUpButton from "../../components/scroll-up-button/ScrollUpButton";

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
  window.scrollTo({ top: 0 });
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
    <>
      <div className="w-full flex justify-center items-center flex-col gap-6 mt-8">
        <PokemonDescription pokemonData={pokemonData} />
        <EvolutionLineComponent />
        <div className="w-full flex justify-center basis-1/2 gap-4">
          <MovesPokemon />
          <StatsPokemon stats={pokemonData.stats} />
        </div>
      </div>
      <ScrollUpButton />
    </>
  );
};

export default DetailPage;
