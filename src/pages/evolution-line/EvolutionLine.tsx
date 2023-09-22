import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/loading/Loading";
import { useLazyQuery } from "@apollo/client";
import useFetchMore from "../../helper/useFetchMore";
import {
  PokemonEvolutionInterface,
  EvolutionLineType,
} from "../../graphql/evolutionLineType";
import { GET_POKEMON_EVOLUTION } from "../../graphql/query/getPokemonEvolution";
import { getPokemonImage } from "../../api/getDataPokemon";
import { upperFirstCharacter } from "../../helper/upperFirstCharacter";

const EvolutionLine = () => {
  const [evolutionData, setEvolutionData] = useState<
    PokemonEvolutionInterface[] | object[]
  >([]);

  const [signal, setSignal] = useState(0);
  const navigate = useNavigate();
  const { errorFetching, nextDataEvolutionLine } = useFetchMore(
    evolutionData.length
  );

  const [getPokemonEvolutionLine, { loading, error, data }] = useLazyQuery(
    GET_POKEMON_EVOLUTION,
    {
      variables: { offset: 0, limit: 6 },
    }
  );

  useEffect(() => {
    getPokemonEvolutionLine().then(() => {
      setEvolutionData(data?.pokemon_v2_evolutionchain);
    });
  }, [data, getPokemonEvolutionLine]);

  useEffect(() => {
    if (errorFetching) {
      console.error(errorFetching);
    } else {
      setEvolutionData([...evolutionData, ...(nextDataEvolutionLine || [])]);
    }
  }, [signal]);

  if (loading) return <Loading />;
  if (error) console.log(error);

  const fetchMoreData = () => {
    setSignal(signal + 1);
  };

  // console.log(evolutionData);

  return (
    <div className="w-full">
      <h1 className="p-2">Evolution line page</h1>
      <InfiniteScroll
        dataLength={evolutionData.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<></>}
      >
        {evolutionData.map((pokemonLine: any, index: number) => {
          // console.log(pokemonLine);

          return (
            <div
              key={index}
              className="relative grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-2 overflow-hidden'"
            >
              {pokemonLine.pokemon_v2_pokemonspecies.map(
                (pokemon: EvolutionLineType) => {
                  return (
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
                      <div>
                        <h2 className="font-bold text-xl">
                          {upperFirstCharacter(pokemon.name)}
                        </h2>
                        <p
                          onClick={() =>
                            navigate(`/pokemon/detail/${pokemon.id}`)
                          }
                          className="cursor-pointer hover:underline"
                        >
                          Show Details
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          );
        })}
      </InfiniteScroll>
      <div className="w-full flex justify-center items-center mt-24">
        <span className="loading loading-spinner loading-lg text-primary -mt-28"></span>
      </div>
    </div>
  );
};

export default EvolutionLine;
