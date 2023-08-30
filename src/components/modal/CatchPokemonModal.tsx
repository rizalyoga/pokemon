import { useEffect, useState } from "react";
import { DataPokemonProps } from "../cards/PokemonCard";
import AlertAlreadyCaught from "./AlertAlreadyCaught";
import PokeballIcons from "../../assets/icons/pokeball-icon.png";

interface pokemonProps {
  isOpen: boolean;
  closeModalHandler: () => void;
  dataPokemon: DataPokemonProps;
}

const CatchPokemonModal = ({
  isOpen,
  closeModalHandler,
  dataPokemon,
}: pokemonProps) => {
  const myPokemon = JSON.parse(localStorage.getItem("myPokemon") as string);
  const [isPokemonAlreadyCatched, setIsPokemonAlreadyCatched] =
    useState<boolean>(false);

  useEffect(() => {
    if (isOpen == true) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";

    myPokemon?.forEach((pokemon: DataPokemonProps) => {
      if (pokemon.pokemonName == dataPokemon.pokemonName) {
        setIsPokemonAlreadyCatched(true);
      }
    });
  }, [isOpen]);

  const catchHandler = () => {
    const myPokemonArr = [];

    const isCatched = Math.floor(Math.random() * 2);

    if (isCatched === 1 && !myPokemon) {
      const pokemonData = {
        pokemonName: dataPokemon.pokemonName,
        urlPokemon: dataPokemon.urlPokemon,
        urlImagePokemon: dataPokemon.urlImagePokemon,
      };

      myPokemonArr.push(pokemonData);
      setIsPokemonAlreadyCatched(true);
      alert(
        `Congratulations you have successfully caught ${pokemonData.pokemonName.toUpperCase()} 🎊`
      );
      localStorage.setItem("myPokemon", JSON.stringify(myPokemonArr));
    } else if (isCatched === 1 && myPokemon) {
      const pokemonData = {
        pokemonName: dataPokemon.pokemonName,
        urlPokemon: dataPokemon.urlPokemon,
        urlImagePokemon: dataPokemon.urlImagePokemon,
      };
      myPokemon.push(pokemonData);
      setIsPokemonAlreadyCatched(true);
      localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
      alert(
        `Congratulations you have successfully caught ${pokemonData.pokemonName.toUpperCase()} 🎊`
      );
    } else {
      alert(`Sorry, you fail to caught ${dataPokemon.pokemonName} 😭`);
    }
  };

  if (!isOpen) return <></>;

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 flex justify-center items-center">
        <div className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-full m-8 xl:w-[50vw] bg-catch-poke-bg">
          <div>
            <div className="mt-6 text-center flex flex-col justify-center items-center w-full">
              <div className="mt-10">
                <img
                  className="w-[250px] ml-2 mt-10 animate-show-image-animation"
                  src={dataPokemon.urlImagePokemon}
                  alt="pokemon-sprites"
                />
              </div>
              <h3
                className="text-2xl font-extrabold mt-6 mb-2 text-white"
                id="modal-title"
              >
                - {dataPokemon.pokemonName.toUpperCase()} -
              </h3>
              <div className=" flex flex-col justify-center items-center">
                {isPokemonAlreadyCatched ? (
                  <AlertAlreadyCaught />
                ) : (
                  <button
                    onClick={catchHandler}
                    className="flex justify-center items-center gap-2 font-bold py-2 px-10 rounded-full text-white bg-blue-400 hover:bg-blue-500"
                  >
                    <img
                      className="w-[24px]"
                      src={PokeballIcons}
                      alt="pokeball-icon"
                    />
                    CATCH !
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-4">
            <button
              onClick={() => closeModalHandler()}
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-10 py-2 text-sm font-semibold text-white mb-4 shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              LEAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchPokemonModal;
