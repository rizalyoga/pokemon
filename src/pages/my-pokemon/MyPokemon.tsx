import { DataPokemonProps } from "../../components/cards/PokemonCard";
import MyPokemonCard from "../../components/cards/MyPokemonCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollUpButton from "../../components/scroll-up-button/ScrollUpButton";

const MyPokemon = () => {
  const [myPokemonData, setMyPokemonData] = useState<DataPokemonProps[]>([]);
  const navigate = useNavigate();

  const myPokemons = JSON.parse(localStorage.getItem("myPokemon") as string);

  useEffect(() => {
    setMyPokemonData(myPokemons);
  }, []);

  const releaseAll = () => {
    if (confirm(`Are you sure want to release all pokemon ?`) == true) {
      setMyPokemonData([]);
      localStorage.removeItem("myPokemon");
    }
  };

  if (!myPokemonData || myPokemonData.length == 0) {
    return (
      <div className="w-full min-h-[80vh] flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl text-center">
          You don't have a pokemon yet ! 🙃
        </h1>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          CATCH POKEMON NOW
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="my-6 pl-1 flex justify-between flex-col md:flex-row">
        <h3 className="font-semibold">{`You already have ${myPokemonData.length} pokemon`}</h3>
        <h3 onClick={releaseAll} className="cursor-pointer hover:underline ">
          Release all pokemon ?
        </h3>
      </div>
      <div className=" grid grid-flow-row gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 overflow-hidden ">
        {myPokemonData.map((pokemon: DataPokemonProps) => (
          <MyPokemonCard
            pokemonName={pokemon.pokemonName}
            urlPokemon={pokemon.urlPokemon}
            urlImagePokemon={pokemon.urlImagePokemon}
            setMyPokemonData={setMyPokemonData}
            key={pokemon.pokemonName}
          />
        ))}
      </div>
      <ScrollUpButton />
    </>
  );
};

export default MyPokemon;
