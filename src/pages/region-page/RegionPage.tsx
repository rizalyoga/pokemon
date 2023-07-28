import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PokemonCard from "../../components/cards/PokemonCard";

import { getPokemonImage, getRegionPokemon } from "../../api/getDataPokemon";

import { DataPokemonsInterface } from "../home/Home";
import { getIndexPokemon } from "../../helper/getIndexPokemon";
import { regionList } from "../../components/navbar/RegionList";

const RegionPage = () => {
  const { pathname } = useLocation();

  const [pokemonData, setPokemonData] = useState<DataPokemonsInterface[]>([]);

  useEffect(() => {
    switch (regionTitle(pathname)) {
      case "Kanto":
        getRegionPokemon("1", "151").then((response) =>
          setPokemonData(response.results)
        );
        break;
      case "Johto":
        getRegionPokemon("151", "100").then((response) =>
          setPokemonData(response.results)
        );
        break;
      case "Hoenn":
        getRegionPokemon("251", "135").then((response) =>
          setPokemonData(response.results)
        );
        break;
      case "Sinnoh":
        getRegionPokemon("386", "108").then((response) =>
          setPokemonData(response.results)
        );
        break;
      case "Unova":
        getRegionPokemon("494", "155").then((response) =>
          setPokemonData(response.results)
        );
        break;
      case "Kalos":
        getRegionPokemon("649", "72").then((response) =>
          setPokemonData(response.results)
        );
        break;
      case "Alola":
        getRegionPokemon("721", "88").then((response) =>
          setPokemonData(response.results)
        );
        break;
      case "Galar":
        getRegionPokemon("809", "96").then((response) =>
          setPokemonData(response.results)
        );
        break;
      case "Paldea":
        getRegionPokemon("905", "103").then((response) =>
          setPokemonData(response.results)
        );
        break;
      default:
        break;
    }
  }, [pathname]);

  const regionTitle = (location: string) => {
    const regionName = regionList.filter((region) => {
      if (location.includes(region.link)) return region;
    });

    return regionName[1]?.region;
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-8">
        {`National Pokedex ${regionTitle(pathname)} Region:`}
      </h1>
      {/* {loading && <h3 className="text-center text-2xl">Loading...</h3>} */}
      <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {pokemonData.length > 0
          ? pokemonData.map((data) => (
              <PokemonCard
                pokemonName={data.name}
                urlPokemon={data.url}
                urlImagePokemon={getPokemonImage(getIndexPokemon(data.url))}
                key={data.url}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default RegionPage;
