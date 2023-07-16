import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonCard from "../../components/cards/PokemonCard";

import {
  getKantoPokemon,
  getJohtoPokemon,
  getPokemonImage,
} from "../../api/getDataPokemon";

import { DataPokemonsInterface } from "../home/Home";
import { getIndexPokemon } from "../../helper/getIndexPokemon";

const RegionPage = () => {
  const { pathname } = useLocation();

  const [pokemonData, setPokemonData] = useState<DataPokemonsInterface[]>([]);

  // console.log(pokemonData);

  useEffect(() => {
    if (pathname.includes("kanto")) {
      getKantoPokemon().then((response) => setPokemonData(response.results));
    } else {
      getJohtoPokemon().then((response) => setPokemonData(response.results));
    }
  }, [pathname]);

  const regionTitle = (location: string) => {
    if (location.includes("kanto")) {
      return "Kanto";
    } else {
      return "Johto";
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-8">
        {`National Pokedex ${regionTitle(pathname)} Region:`}
      </h1>
      {/* {loading && <h3 className="text-center text-2xl">Loading...</h3>} */}
      <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {pokemonData.map((data) => (
          <PokemonCard
            pokemonName={data.name}
            urlPokemon={data.url}
            urlImagePokemon={getPokemonImage(getIndexPokemon(data.url))}
            key={data.url}
          />
        ))}
      </div>
    </>
  );
};

export default RegionPage;
