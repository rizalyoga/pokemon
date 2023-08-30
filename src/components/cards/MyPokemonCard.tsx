import { useNavigate } from "react-router-dom";
import { getIndexPokemon } from "../../helper/getIndexPokemon";
import { pokemonNumberFormat } from "../../helper/pokemonNumberFormat";
import { DataPokemonProps } from "./PokemonCard";

interface DataMyPokemonProps {
  urlPokemon: string;
  pokemonName: string;
  urlImagePokemon: string;
  setMyPokemonData: React.Dispatch<React.SetStateAction<DataPokemonProps[]>>;
}

const MyPokemonCard = ({
  pokemonName,
  urlPokemon,
  urlImagePokemon,
  setMyPokemonData,
}: DataMyPokemonProps) => {
  const navigate = useNavigate();

  const navigateTo = (index: string) => {
    navigate(`/pokemon/detail/${index}`);
  };

  const releasePokemonHandler = (pokemonName: string) => {
    if (
      confirm(`Are you sure want to release ${pokemonName.toUpperCase()} ?`) ==
      true
    ) {
      const myPokemonData = JSON.parse(
        localStorage.getItem("myPokemon") as string
      );

      if (myPokemonData.length > 1) {
        const newPokemonData = myPokemonData.filter(
          (data: DataMyPokemonProps) => {
            return data.pokemonName != pokemonName;
          }
        );

        localStorage.setItem("myPokemon", JSON.stringify(newPokemonData));
        setMyPokemonData(newPokemonData);
      } else if (myPokemonData.length == 1) {
        localStorage.removeItem("myPokemon");
        setMyPokemonData([]);
      }
    }
  };

  return (
    <div>
      <div
        className="card card-compact bg-slate-300 shadow-xl bg-dark-card group"
        title={pokemonName}
      >
        <div className="flex justify-between items-center px-4 py-2">
          <p className=" font-bold text-lg">
            {urlPokemon && pokemonNumberFormat(getIndexPokemon(urlPokemon))}
          </p>
          <p className="font-bold text-lg mt-[4px]">
            {pokemonName.toUpperCase()}
          </p>
        </div>

        <div className="min-h-[180px] bg-pokeball-image bg-center bg-contain bg-no-repeat animate-background-image-animation">
          <img
            className="w-[220px] m-auto transform transition duration-300 group-hover:scale-125 animate-show-image-animation"
            src={urlImagePokemon}
            loading="lazy"
            alt={`${pokemonName}-image`}
          />
        </div>
        <div className="card-body">
          <div className="w-full flex gap-2 ">
            <button
              className="basis-1/2 px-4 py-3 btn-info hover:bg-yellow-300 hover:border-yellow-300 font-bold text-white  hover:text-slate-700 rounded-lg"
              onClick={() => navigateTo(getIndexPokemon(urlPokemon).toString())}
            >
              SHOW DETAIL
            </button>
            <button
              onClick={() => releasePokemonHandler(pokemonName)}
              className="basis-1/2 px-4 py-3 btn-info hover:bg-yellow-300 hover:border-yellow-300 font-bold text-white  hover:text-slate-700 rounded-lg"
            >
              RELEASE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPokemonCard;
