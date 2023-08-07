import { useEffect, useState } from "react";
import { upperFirstCharacter } from "../../helper/upperFirstCharacter";

type AbilityObject = {
  ability: {
    name: string;
    url: string;
  };
};
interface AbilitiesInterface {
  ability: AbilityObject[];
}

const AbilitiesPokemon = (abilities: AbilitiesInterface) => {
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");

  useEffect(() => {
    getAbilitiesDesc(abilities.ability[0]?.ability.url).then((res) => {
      setDesc1(res.effect);
    });
    getAbilitiesDesc(abilities.ability[1]?.ability.url).then((res) => {
      setDesc2(res.effect);
    });
  }, [abilities]);

  const getAbilitiesDesc = async (URL: string) => {
    const response = await fetch(URL);
    const res = await response.json();

    return res.effect_entries[1];
  };

  return (
    <div className="p-8 bg-slate-300 bg-dark-card w-full rounded-lg shadow-md">
      <h3 className="font-bold text-2xl ">Abilities</h3>
      <ul className="mt-5 list-disc px-4">
        {abilities.ability[0] ? (
          <li className="mb-2">
            <h5 className="font-bold list-disc">
              {upperFirstCharacter(abilities?.ability[0]?.ability.name)}
            </h5>
            <p className="text-sm">{desc1}</p>
          </li>
        ) : (
          <></>
        )}

        {abilities.ability[1] ? (
          <li>
            <h5 className="font-bold list-disc">
              {upperFirstCharacter(abilities?.ability[1]?.ability.name)}
            </h5>
            <p className="text-sm">{desc2}</p>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default AbilitiesPokemon;
