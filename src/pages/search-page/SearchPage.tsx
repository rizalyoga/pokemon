import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPokemonFilter } from "../../api/getDataPokemon";

import PokemonCard from "../../components/cards/PokemonCard";

import { DataPokemonsInterface } from "../home/Home";

import { getPokemonImage } from "../../api/getDataPokemon";
import { getIndexPokemon } from "../../helper/getIndexPokemon";

const SearchPage = () => {
  const [searchParams, setSearchParamas] = useSearchParams();
  const [pokemonData, setPokemonData] = useState<DataPokemonsInterface[]>([]);

  const pokemonParams = searchParams.get("pokemon");

  useEffect(() => {
    getPokemonFilter(pokemonParams as string).then((response) => {
      setPokemonData(response);
    });
  }, [pokemonParams]);

  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  );
};

export default SearchPage;
