import { DataPokemonProps } from "../../components/cards/PokemonCard";
import MyPokemonCard from "../../components/cards/MyPokemonCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MyPokemon = () => {
  const [myPokemonData, setMyPokemonData] = useState<DataPokemonProps[]>([]);
  const navigate = useNavigate();

  const myPokemons = JSON.parse(localStorage.getItem("myPokemon") as string);

  useEffect(() => {
    setMyPokemonData(myPokemons);
  }, []);

  if (!myPokemonData) {
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
    <div className="mt-10 grid grid-flow-row gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 overflow-hidden ">
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
  );
};

export default MyPokemon;
