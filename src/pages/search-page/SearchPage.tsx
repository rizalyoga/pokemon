import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPokemonFilter } from "../../api/getDataPokemon";

import PokemonCard from "../../components/cards/PokemonCard";
import ScrollUpButton from "../../components/scroll-up-button/ScrollUpButton";
import Loading from "../../components/loading/Loading";

import { DataPokemonsInterface } from "../home/Home";

import { getPokemonImage } from "../../api/getDataPokemon";
import { getIndexPokemon } from "../../helper/getIndexPokemon";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [pokemonData, setPokemonData] = useState<DataPokemonsInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const pokemonParams = searchParams.get("pokemon");

  useEffect(() => {
    setLoading((load) => !load);
    getPokemonFilter(pokemonParams as string)
      .then((response) => {
        setPokemonData(response);
      })
      .then(() => setLoading((load) => !load));
  }, [pokemonParams]);

  if (loading) return <Loading />;

  return (
    <>
      <div className="grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8">
        {pokemonData.length > 0 ? (
          pokemonData.map((pokemon) => (
            <PokemonCard
              key={pokemon.url}
              pokemonName={pokemon.name}
              urlPokemon={pokemon.url}
              urlImagePokemon={getPokemonImage(getIndexPokemon(pokemon.url))}
            />
          ))
        ) : (
          <p>Oops, Sorry Pokemon Not Found ...</p>
        )}
      </div>
      <ScrollUpButton />
    </>
  );
};

export default SearchPage;
