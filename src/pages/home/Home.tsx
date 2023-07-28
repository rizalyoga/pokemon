import { useEffect, useState } from "react";
import {
  getAllDataPokemon,
  getPokemonImage,
  getNextDataPokemon,
} from "../../api/getDataPokemon";
import { getIndexPokemon } from "../../helper/getIndexPokemon";
import InfiniteScroll from "react-infinite-scroll-component";

import PokemonCard from "../../components/cards/PokemonCard";

export interface DataPokemonsInterface {
  name: string;
  url: string;
}

const Home = () => {
  const [dataPokemons, setDataPokemons] = useState<DataPokemonsInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading((loading) => !loading);
    getAllDataPokemon()
      .then((response) => setDataPokemons(response.results))
      .then(() => setLoading((loading) => !loading));
  }, []);

  const fetchNextData = () => {
    const dataLength = dataPokemons.length;
    const limitData = 12;
    getNextDataPokemon(dataLength, limitData).then((response) =>
      setDataPokemons([...dataPokemons, ...response.results])
    );
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-9">Pokémon Data Card</h1>
      {loading && <h3 className="text-center text-2xl">Loading...</h3>}

      <InfiniteScroll
        dataLength={dataPokemons.length}
        next={fetchNextData}
        hasMore={true}
        loader={
          <div className="w-screen min-h-full flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        }
        className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 overflow-hidden"
      >
        {dataPokemons.map((data) => (
          <PokemonCard
            pokemonName={data.name}
            urlPokemon={data.url}
            urlImagePokemon={getPokemonImage(getIndexPokemon(data.url))}
            key={data.url}
          />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Home;
