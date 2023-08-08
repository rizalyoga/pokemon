import { upperFirstCharacter } from "../../helper/upperFirstCharacter";

export type MoveType = {
  name: string;
  url: string;
};

export type MoveDetailType = {
  accuracy: string;
  power: string;
  pp: string;
  type: {
    name: string;
    url: string;
  };
  damage_class: {
    name: string;
    url: string;
  };
};

export interface MovesInterface {
  move: MoveType;
}

const MovesPokemon = ({ moves }: { moves: MovesInterface[] }) => {
  return (
    <div className="p-8 bg-slate-300 bg-dark-card w-full rounded-lg shadow-md max-h-[38rem]">
      <h3 className="font-bold text-2xl">Moves</h3>
      <div className="mt-6 overflow-y-auto max-h-[30rem]">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Type</th>
              <th>Cat.</th>
              <th>Power</th>
              <th>Acc</th>
              <th>PP</th>
            </tr>
          </thead>
          <tbody>
            {moves.map((move, index) => {
              return (
                <tr
                  className="hover:bg-slate-200 duration-75"
                  key={move.move.url}
                >
                  <th>{index + 1}</th>
                  <td>{upperFirstCharacter(move.move.name)}</td>
                  <td>Fire</td>
                  <td>Physical</td>
                  <td>120</td>
                  <td>95%</td>
                  <td>5</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovesPokemon;
