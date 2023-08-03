import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Loading from "../../components/loading/Loading";
import PokemonCard from "../../components/cards/PokemonCard";
import ScrollUpButton from "../../components/scroll-up-button/ScrollUpButton";

import { getPokemonImage, getRegionPokemon } from "../../api/getDataPokemon";

import { DataPokemonsInterface } from "../home/Home";
import { getIndexPokemon } from "../../helper/getIndexPokemon";
import { regionList } from "../../components/navbar/RegionList";

const RegionPage = () => {
  const { pathname } = useLocation();

  const [pokemonData, setPokemonData] = useState<DataPokemonsInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getDataPokemonBasedOnRegion = (offset: string, limit: string) => {
    setLoading((loading) => !loading);
    getRegionPokemon(offset, limit)
      .then((response) => setPokemonData(response.results))
      .then(() => setLoading((loading) => !loading));
  };

  useEffect(() => {
    switch (regionTitle(pathname)) {
      case "Kanto":
        getDataPokemonBasedOnRegion("0", "151");
        break;
      case "Johto":
        getDataPokemonBasedOnRegion("151", "100");
        break;
      case "Hoenn":
        getDataPokemonBasedOnRegion("251", "135");
        break;
      case "Sinnoh":
        getDataPokemonBasedOnRegion("386", "108");
        break;
      case "Unova":
        getDataPokemonBasedOnRegion("494", "155");
        break;
      case "Kalos":
        getDataPokemonBasedOnRegion("649", "72");
        break;
      case "Alola":
        getDataPokemonBasedOnRegion("721", "88");
        break;
      case "Galar":
        getDataPokemonBasedOnRegion("809", "96");
        break;
      case "Paldea":
        getDataPokemonBasedOnRegion("905", "103");
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

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="w-full">
      <h1 className="text-center text-3xl font-bold my-8 ">
        {`National Pokedex ${regionTitle(pathname)} Region`}
      </h1>
      <div className=" grid grid-flow-row gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
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
      <ScrollUpButton />
    </section>
  );
};

export default RegionPage;
