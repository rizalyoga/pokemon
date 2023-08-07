import { pokemonNumberFormat } from "../../helper/pokemonNumberFormat";

type StatsType = {
  name: string;
  url: string;
};

export interface StatsPropsInterface {
  base_stat: number;
  effort: number;
  state: StatsType;
}

const StatsPokemon = ({ stats }: { stats: StatsPropsInterface[] }) => {
  return (
    <div className="p-8 bg-slate-300 bg-dark-card w-full rounded-lg shadow-md">
      <h3 className="font-bold text-2xl">Base Stats</h3>
      <div className="mt-6 flex gap-5">
        <div className="status-name">
          <p className="font-bold">HP</p>
          <p className="font-bold">Attack</p>
          <p className="font-bold">Defense</p>
          <p className="font-bold">Sp.Attack</p>
          <p className="font-bold">Sp.Defense</p>
          <p className="font-bold">Speed</p>
        </div>
        <div className="stats-total ml-4">
          {stats.map((base_state, index) => (
            <p className="font-bold" key={index}>
              {pokemonNumberFormat(base_state.base_stat)}
            </p>
          ))}
        </div>
        <div className="progress-bar w-full flex flex-col gap-4 mt-2">
          {stats.map((base_stat, index) => (
            <progress
              title={`${base_stat.base_stat.toString()} / 240`}
              className="progress progress-warning w-full"
              value={base_stat.base_stat}
              max="240"
              key={index}
            ></progress>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsPokemon;
