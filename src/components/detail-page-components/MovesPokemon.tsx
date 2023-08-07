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
    <div className="p-8 bg-slate-300 bg-dark-card w-full rounded-lg shadow-md ">
      <h3 className="font-bold text-2xl">Moves</h3>
      <div className="mt-6 overflow-x-auto max-h-[25rem]">
        <table className="table table-sm ">
          <thead>
            <tr>
              <th></th>
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
              // const moves = {
              //   type: "",
              //   cat: "",
              //   power: "",
              //   acc: "",
              //   PP: "",
              // };

              // const moveArray: MoveDetailType[] = [];
              // fetchMoveDetail(move.move.url).then((res) => {
              // setDetailMove(res);
              // const data: MoveDetailType = res;
              // moveArray.push(data);
              // setMoveDetail([...moveDetail, ...moveArray]);
              // moves.type = data.type.name;
              // moves.cat = data.damage_class.name;
              // moves.power = data.power;
              // moves.acc = data.accuracy;
              // moves.PP = data.pp;
              // });

              return (
                <tr key={move.move.url}>
                  <th>{index + 1}</th>
                  <td>{upperFirstCharacter(move.move.name)}</td>
                  {/* <td>{moveDetail[index + 1]?.type?.name}</td>
                  <td>{moveDetail[index + 1]?.damage_class?.name}</td>
                  <td>{moveDetail[index + 1]?.power}</td>
                  <td>{moveDetail[index + 1]?.accuracy}</td>
                  <td>{moveDetail[index + 1]?.pp}</td> */}
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
