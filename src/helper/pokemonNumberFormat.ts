export const pokemonNumberFormat = (indexPokemon: number) => {
  if (indexPokemon <= 9) {
    return `00${indexPokemon}`;
  } else if (indexPokemon > 9 && indexPokemon < 100) {
    return `0${indexPokemon}`;
  } else {
    return indexPokemon;
  }
};

export const pokemonHeightFormat = (heightPokemon: number) => {
  const result = heightPokemon / 10;
  return result;
};

export const pokemonWeightFormat = (weightPokemon: number) => {
  const result = weightPokemon / 10;
  return result;
};
