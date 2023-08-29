import { useEffect } from "react";
import { DataPokemonProps } from "../cards/PokemonCard";

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
  useEffect(() => {
    if (isOpen == true) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [isOpen]);

  const catchHandler = () => {
    const myPokemon = JSON.parse(localStorage.getItem("myPokemon") as string);
    const myPokemonArr = [];

    const isCatched = Math.floor(Math.random() * 2);

    if (isCatched === 1 && !myPokemon) {
      const pokemonData = {
        pokemonName: dataPokemon.pokemonName,
        pokemonUrl: dataPokemon.urlPokemon,
      };

      myPokemonArr.push(pokemonData);
      localStorage.setItem("myPokemon", JSON.stringify(myPokemonArr));
    } else if (isCatched === 1 && myPokemon) {
      const pokemonData = {
        pokemonName: dataPokemon.pokemonName,
        pokemonUrl: dataPokemon.urlPokemon,
      };
      myPokemon.push(pokemonData);
      localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
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
                  className="w-[250px] ml-2 mt-10"
                  src={dataPokemon.urlImagePokemon}
                  alt="pokemon-sprites"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center mt-8">
                <button
                  onClick={catchHandler}
                  className="bg-blue-400 font-bold py-2 px-6 rounded-full text-white hover:bg-blue-500"
                >
                  CATCH !
                </button>
                <h3
                  className="text-2xl font-bold mt-2 text-white"
                  id="modal-title"
                >
                  - {dataPokemon.pokemonName.toUpperCase()} -
                </h3>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-4">
            <button
              onClick={() => closeModalHandler()}
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white mb-4 shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchPokemonModal;
