import { useNavigate } from "react-router-dom";
import { getIndexPokemon } from "../../helper/getIndexPokemon";
import { pokemonNumberFormat } from "../../helper/pokemonNumberFormat";
import { upperFirstCharacter } from "../../helper/upperFirstCharacter";

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

  return (
    <div
      className="card card-compact bg-slate-300 shadow-xl bg-dark-card group"
      title={pokemonName}
    >
      <p className=" p-4 font-semibold">
        {pokemonNumberFormat(getIndexPokemon(urlPokemon))}
      </p>
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
  );
};

export default PokemonCard;
