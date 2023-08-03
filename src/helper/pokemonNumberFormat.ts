export const pokemonNumberFormat = (indexPokemon: number) => {
  if (indexPokemon <= 9) {
    return `00${indexPokemon}`;
  } else if (indexPokemon > 9 && indexPokemon < 100) {
    return `0${indexPokemon}`;
  } else {
    return indexPokemon;
  }
};
