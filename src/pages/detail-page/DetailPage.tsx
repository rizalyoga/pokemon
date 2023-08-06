import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetailPokemon } from "../../api/getDataPokemon";
import { MovesInterface } from "../../components/detail-page-components/MovesPokemon";

import Loading from "../../components/loading/Loading";
import SpritesPokemon from "../../components/detail-page-components/SpritesPokemon";
import MovesPokemon from "../../components/detail-page-components/MovesPokemon";
import StatsPokemon from "../../components/detail-page-components/StatsPokemon";
import PokemonDescription from "../../components/detail-page-components/PokemonDescription";
import ScrollUpButton from "../../components/scroll-up-button/ScrollUpButton";

import { SpritesInterface } from "../../components/detail-page-components/SpritesPokemon";

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
  moves: MovesInterface[];
  species: {
    name: string;
    url: string;
  };
  sprites: SpritesInterface;
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

  // console.log(pokemonData);

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col gap-6 mt-8">
        <PokemonDescription pokemonData={pokemonData} />
        <SpritesPokemon sprites={pokemonData.sprites} />
        <div className="w-full flex justify-center basis-1/2 gap-4">
          <MovesPokemon moves={pokemonData.moves} />
          <StatsPokemon stats={pokemonData.stats} />
        </div>
      </div>
      <ScrollUpButton />
    </>
  );
};

export default DetailPage;
