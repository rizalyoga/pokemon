import { useNavigate } from "react-router-dom";
import { getIndexPokemon } from "../../helper/getIndexPokemon";

interface DataPokemonProps {
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

  // console.log(urlPokemon);

  const navigateTo = (index: string) => {
    navigate(`/pokemon/${index}`);
  };

  const pokemonNumberFormat = (indexPokemon: number) => {
    if (indexPokemon <= 9) {
      return `00${indexPokemon}`;
    } else if (indexPokemon > 9 && indexPokemon < 100) {
      return `0${indexPokemon}`;
    } else {
      return indexPokemon;
    }
  };

  return (
    <div
      className="card card-compact bg-slate-300 shadow-xl transform transition duration-500 hover:scale-105"
      title={pokemonName}
    >
      <h4 className="text-slate-600 p-4 font-semibold">
        {pokemonNumberFormat(getIndexPokemon(urlPokemon))}
      </h4>
      <img
        className="w-[180px] m-auto"
        src={urlImagePokemon}
        loading="lazy"
        alt="Shoes"
      />
      <div className="card-body">
        <h2 className="card-title">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h2>
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
  );
};

export default PokemonCard;
