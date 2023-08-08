export interface SpritesInterface {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

const EvolutionLine = ({ sprites }: { sprites: SpritesInterface }) => {
  return (
    <div className="p-8 w-full bg-slate-300 bg-dark-card rounded-md shadow-md">
      <h3 className="font-bold text-2xl">Sprites Pokemon</h3>
      <div className="mt-5 grid grid-flow-row text-neutral-600 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 ">
        <div className="flex justify-center items-center rounded-md">
          {sprites.front_default ? (
            <img
              className="min-w-[260px] "
              src={sprites?.front_default}
              alt="pokemon-sprites"
              loading="lazy"
              title="Front-Pokemon"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-center items-center rounded-md">
          {sprites.back_default ? (
            <img
              className="min-w-[260px]"
              src={sprites?.back_default}
              alt="pokemon-sprites"
              loading="lazy"
              title="Back-Pokemon"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-center items-center rounded-md">
          {sprites.front_shiny ? (
            <img
              className="min-w-[260px] "
              src={sprites?.front_shiny}
              alt="pokemon-sprites"
              loading="lazy"
              title="Front-Pokemon-Shiny"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-center items-center rounded-md">
          {sprites.back_shiny ? (
            <img
              className="min-w-[260px] "
              loading="lazy"
              src={sprites.back_shiny}
              alt="pokemon-sprites"
              title="Back-Pokemon-Shiny"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default EvolutionLine;
