import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDataPokemon, getPokemonImage } from "../../api/getDataPokemon";
import { getIndexPokemon } from "../../helper/getIndexPokemon";

export interface DataPokemonsInterface {
  name: string;
  url: string;
}

const Home = () => {
  const navigate = useNavigate();

  const [dataPokemons, setDataPokemons] = useState<DataPokemonsInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading((loading) => !loading);
    getAllDataPokemon()
      .then((response) => setDataPokemons(response.results))
      .then(() => setLoading((loading) => !loading));
  }, []);

  const navigateTo = (index: string) => {
    navigate(`pokemon/${index}`);
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        National Pokedex Kanto & Johto Region:
      </h1>
      {loading && <h3 className="text-center text-2xl">Loading...</h3>}
      <div className="flex justify-between items-center flex-wrap gap-5 ">
        {dataPokemons.map((data, index) => (
          <div
            onClick={() => navigateTo(getIndexPokemon(data.url).toString())}
            key={data.url}
            className="flex justify-center items-center flex-col mt-10 border cursor-pointer"
          >
            <img
              src={getPokemonImage(index + 1)}
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

export default Home;
