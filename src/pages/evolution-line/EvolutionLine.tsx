import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../components/loading/Loading";
import { useLazyQuery } from "@apollo/client";

import { GET_POKEMON_EVOLUTION } from "../../graphql/query/getPokemonEvolution";

const EvolutionLine = () => {
  const [evolutionData, setEvolutionData] = useState([]);

  const [getPokemonEvolutionLine, { loading, error, data }] = useLazyQuery(
    GET_POKEMON_EVOLUTION,
    {
      variables: { offset: 0, limit: 3 },
    }
  );

  useEffect(() => {
    getPokemonEvolutionLine().then(() => {
      setEvolutionData(data?.pokemon_v2_evolutionchain);
    });
  }, [data, getPokemonEvolutionLine]);

  if (loading) return <Loading />;
  if (error) console.log(error);

  console.log(evolutionData);

  return (
    <div className="w-full bg-red-400 p-2">
      <h1>Evolution line page</h1>
      {/* <InfiniteScroll className="relative grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 overflow-hidden'"></InfiniteScroll> */}

      <div className="w-full flex justify-center items-center mt-24">
        <span className="loading loading-spinner loading-lg text-primary -mt-28"></span>
      </div>
    </div>
  );
};

export default EvolutionLine;
