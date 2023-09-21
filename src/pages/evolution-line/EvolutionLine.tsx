import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/loading/Loading";
import { useLazyQuery } from "@apollo/client";

import { GET_POKEMON_EVOLUTION } from "../../graphql/query/getPokemonEvolution";
import { getPokemonImage } from "../../api/getDataPokemon";
import { upperFirstCharacter } from "../../helper/upperFirstCharacter";

const EvolutionLine = () => {
  const [evolutionData, setEvolutionData] = useState<object[]>([]);

  const [getPokemonEvolutionLine, { loading, error, data }] = useLazyQuery(
    GET_POKEMON_EVOLUTION,
    {
      variables: { offset: 0, limit: 6 },
    }
  );

  const [getNextPokemonEvolutionLine, { data: moreData }] = useLazyQuery(
    GET_POKEMON_EVOLUTION,
    {
      variables: { offset: evolutionData.length, limit: 6 },
    }
  );

  useEffect(() => {
    getPokemonEvolutionLine().then(() => {
      setEvolutionData(data?.pokemon_v2_evolutionchain);
    });
  }, [data, getPokemonEvolutionLine]);

  if (loading) return <Loading />;
  if (error) console.log(error);

  const fetchMoreData = () => {
    getNextPokemonEvolutionLine().then(() => {
      setEvolutionData([
        ...evolutionData,
        ...(moreData?.pokemon_v2_evolutionchain || []),
      ]);
    });
  };

  console.log(evolutionData);

  return (
    <div className="w-full">
      <h1 className="p-2">Evolution line page</h1>
      <InfiniteScroll
        dataLength={evolutionData.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<></>}
      >
        {evolutionData.map((pokemonLine, index) => (
          <div
            key={index}
            className="relative grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-2 overflow-hidden'"
          >
            {pokemonLine.pokemon_v2_pokemonspecies.map((pokemon) => (
              <div
                key={pokemon.name}
                title={pokemon.name}
                className="p-4 flex items-center bg-slate-300 bg-dark-card group rounded-xl "
              >
                <img
                  className="w-[180px]"
                  src={getPokemonImage(pokemon.id)}
                  alt={pokemon.name}
                />
                <h2 className="font-bold text-xl">
                  {upperFirstCharacter(pokemon.name)}
                </h2>
              </div>
            ))}
          </div>
        ))}
      </InfiniteScroll>
      <div className="w-full flex justify-center items-center mt-24">
        <span className="loading loading-spinner loading-lg text-primary -mt-28"></span>
      </div>
    </div>
  );
};

export default EvolutionLine;
