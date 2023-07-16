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

  console.log(urlPokemon);

  const navigateTo = (index: string) => {
    navigate(`/pokemon/${index}`);
  };

  return (
    <div className="card card-compact bg-base-300 shadow-xl transform transition duration-500 hover:scale-105">
      <img className="w-[180px] m-auto" src={urlImagePokemon} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h2>
        <div className="card-actions justify-end">
          <button
            className="btn btn-info w-full"
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
