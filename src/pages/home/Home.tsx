import { useEffect, useState } from "react";
import {
  getAllDataPokemon,
  getPokemonImage,
  getNextDataPokemon,
} from "../../api/getDataPokemon";
import { getIndexPokemon } from "../../helper/getIndexPokemon";
import InfiniteScroll from "react-infinite-scroll-component";

import PokemonCard from "../../components/cards/PokemonCard";
import Loading from "../../components/loading/Loading";
import ScrollUpButton from "../../components/scroll-up-button/ScrollUpButton";

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

  if (loading) return <Loading />;

  return (
    <section className="w-full">
      <h1 className="text-center text-3xl font-bold my-8">Pokémon Data Card</h1>
      <InfiniteScroll
        dataLength={dataPokemons.length}
        next={fetchNextData}
        hasMore={true}
        loader={
          <div className="w-full flex justify-center items-center overflow-x-hidden absolute bottom-0 ">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        }
        className="relative grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2"
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

      <ScrollUpButton />
    </section>
  );
};

export default Home;
