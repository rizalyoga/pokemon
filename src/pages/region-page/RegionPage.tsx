import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getKantoPokemon,
  getJohtoPokemon,
  getPokemonImage,
} from "../../api/getDataPokemon";

import { DataPokemonsInterface } from "../home/Home";
import { getIndexPokemon } from "../../helper/getIndexPokemon";

const RegionPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [pokemonData, setPokemonData] = useState<DataPokemonsInterface[]>([]);

  console.log(pokemonData);

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

  const navigateTo = (index: string) => {
    navigate(`/pokemon/${index}`);
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        {`National Pokedex ${regionTitle(pathname)} Region:`}
      </h1>
      {/* {loading && <h3 className="text-center text-2xl">Loading...</h3>} */}
      <div className="flex justify-between items-center flex-wrap gap-5 ">
        {pokemonData.map((data) => (
          <div
            onClick={() => navigateTo(getIndexPokemon(data.url).toString())}
            key={data.url}
            className="flex justify-center items-center flex-col mt-10 border cursor-pointer"
          >
            <img
              src={getPokemonImage(getIndexPokemon(data.url))}
              alt="pokemon-image"
              className="px-2"
            />
            <p className="pb-4 ">
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RegionPage;
