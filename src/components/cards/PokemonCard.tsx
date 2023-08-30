import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getIndexPokemon } from "../../helper/getIndexPokemon";
import { pokemonNumberFormat } from "../../helper/pokemonNumberFormat";
import { upperFirstCharacter } from "../../helper/upperFirstCharacter";

import CatchPokemonModal from "../modal/CatchPokemonModal";

export interface DataPokemonProps {
  urlPokemon: string;
  pokemonName: string;
  urlImagePokemon: string;
}

const PokemonCard = ({
  pokemonName,
  urlPokemon,
  urlImagePokemon,
}: DataPokemonProps) => {
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const navigateTo = (index: string) => {
    navigate(`/pokemon/detail/${index}`);
  };

  const isOpenModalHandler = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  };

  const dataPokemon: DataPokemonProps = {
    pokemonName,
    urlPokemon,
    urlImagePokemon,
  };

  return (
    <div>
      <CatchPokemonModal
        isOpen={isOpenModal}
        closeModalHandler={isOpenModalHandler}
        dataPokemon={dataPokemon}
      />

      <div
        className="card card-compact bg-slate-300 shadow-xl bg-dark-card group"
        title={pokemonName}
      >
        <div className="flex justify-between">
          <p className=" p-4 font-semibold">
            {urlPokemon && pokemonNumberFormat(getIndexPokemon(urlPokemon))}
          </p>
          <button
            onClick={() => isOpenModalHandler()}
            className="m-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-blue-400 hover:bg-blue-500 duration-200"
          >
            CATCH
          </button>
        </div>
        <div className="min-h-[180px] bg-pokeball-image bg-center bg-contain bg-no-repeat animate-background-image-animation">
          <img
            className="w-[180px] m-auto transform transition duration-300 group-hover:scale-125 animate-show-image-animation"
            src={urlImagePokemon}
            loading="lazy"
            alt={`${pokemonName}-image`}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{upperFirstCharacter(pokemonName)}</h2>
          <div className="card-actions justify-end">
            <button
              className="btn btn-info w-full hover:bg-yellow-300 hover:border-yellow-300 text-white hover:text-slate-700"
              onClick={() => navigateTo(getIndexPokemon(urlPokemon).toString())}
            >
              Show Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
