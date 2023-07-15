import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetailPokemon, getPokemonImage } from "../../api/getDataPokemon";

export interface DetailPokemonInterface {
  abilities: [];
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

  return (
    <div>
      <h1>{`Detail Page of ${
        pokemonData ? pokemonData?.species?.name : ""
      }`}</h1>
      <img
        className="w-[250px]"
        src={getPokemonImage(idPokemon ? +idPokemon : 0)}
        alt={`Pokemon-image`}
      />
    </div>
  );
};

export default DetailPage;
