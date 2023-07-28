export interface RegionPokemonInterface {
  region: string;
  link: string;
}

export const regionList: RegionPokemonInterface[] = [
  {
    region: "All",
    link: "/",
  },
  {
    region: "Kanto",
    link: "pokemon/kanto-region",
  },
  {
    region: "Johto",
    link: "pokemon/johto-region",
  },
  {
    region: "Hoenn",
    link: "pokemon/hoenn-region",
  },
  {
    region: "Sinnoh",
    link: "pokemon/sinnoh-region",
  },
  {
    region: "Unova",
    link: "pokemon/unova-region",
  },
  {
    region: "Kalos",
    link: "pokemon/kalos-region",
  },
  {
    region: "Alola",
    link: "pokemon/alola-region",
  },
  {
    region: "Galar",
    link: "pokemon/galar-region",
  },
  {
    region: "Paldea",
    link: "pokemon/paldea-region",
  },
];
