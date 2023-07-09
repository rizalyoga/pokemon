import { useEffect, useState } from "react";
import { getAllDataPoekmon } from "../../api/getDataPokemon";

interface DataPokemonsInterface {
  name: string;
  url: string;
}

const Home = () => {
  const [dataPokemons, setDataPokemons] = useState<DataPokemonsInterface[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllDataPoekmon()
      .then((response) => setDataPokemons(response.results))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    console.log("lagi loading");
  } else {
    console.log(dataPokemons);
  }

  return (
    <>
      <h1 className="text-center text-3xl font-bold">
        Ini Data Pokemon di Wilayah Kanto :
      </h1>
      <div className="flex justify-between items-center flex-wrap gap-5 ">
        {dataPokemons.map((data, index) => (
          <div className="flex justify-center items-center flex-col mt-10 border cursor-pointer">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt="pokemon-image"
              className="px-2"
            />
            <p key={data.url} className="pb-4 ">
              {data.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
