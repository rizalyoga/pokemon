const MovesPokemon = () => {
  return (
    <div className="p-8 bg-slate-300 bg-dark-card w-full rounded-lg shadow-md ">
      <h1 className="font-bold text-2xl">Moves</h1>
      <div className="mt-6 overflow-x-auto max-h-[20rem]">
        <table className="table table-sm">
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Fire</td>
              <td>Physical</td>
              <td>120</td>
              <td>100%</td>
              <td>15</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Cy Ganderton</td>
              <td>Fire</td>
              <td>Physical</td>
              <td>120</td>
              <td>100%</td>
              <td>15</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Cy Ganderton</td>
              <td>Fire</td>
              <td>Physical</td>
              <td>120</td>
              <td>100%</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovesPokemon;
