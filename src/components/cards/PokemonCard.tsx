import { useNavigate } from "react-router-dom";
import { getIndexPokemon } from "../../helper/getIndexPokemon";
import pokeballImage from "../../assets/logo/pokeball.png";

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

  const navigateTo = (index: string) => {
    navigate(`/pokemon/detail/${index}`);
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
      className="card card-compact bg-slate-300 shadow-xl bg-dark-card group"
      title={pokemonName}
    >
      <p className=" p-4 font-semibold">
        {pokemonNumberFormat(getIndexPokemon(urlPokemon))}
      </p>
      <div
        className={`min-h-[180px] bg-center bg-contain bg-no-repeat`}
        style={{ backgroundImage: `url(${pokeballImage})` }}
      >
        <img
          className="w-[180px] m-auto transform transition duration-300 group-hover:scale-125"
          src={urlImagePokemon}
          loading="lazy"
          alt="Shoes"
        />
      </div>
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
