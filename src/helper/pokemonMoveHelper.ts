export const setTypePokemon = (typeId: number) => {
  switch (typeId) {
    case 1:
      return "Normal";
    case 2:
      return "Grass";
    case 3:
      return "Water";
    case 4:
      return "Electric";
    case 5:
      return "Ice";
    case 6:
      return "Rock";
    case 7:
      return "Steel";
    case 8:
      return "Poison";
    case 9:
      return "Ground";
    case 10:
      return "Psychic";
    case 11:
      return "Bug";
    case 12:
      return "Dark";
    case 13:
      return "Dragon";
    case 14:
      return "Fairy";
    case 15:
      return "Flying";
    case 16:
      return "Gosht";
    case 17:
      return "Fire";
    case 18:
      return "Fighting";

    default:
      break;
  }
};

export const getColorType = (typeMove: number) => {
  switch (typeMove) {
    case 3:
      return "badge badge-xs bg-[#60A5FA]";
    case 17:
      return "badge badge-xs bg-[#FC6C6D]";
    case 2:
      return "badge badge-xs bg-[#5DBE62]";
    case 11:
      return "badge badge-xs bg-[#9DC130]";
    case 12:
      return "badge badge-xs bg-[#5F606D]";
    case 13:
      return "badge badge-xs bg-[#0773C7]";
    case 4:
      return "badge badge-xs bg-[#EDD53F]";
    case 14:
      return "badge badge-xs bg-[#EF97E6]";
    case 18:
      return "badge badge-xs bg-[#D94256]";
    case 15:
      return "badge badge-xs bg-[#9BB4E8]";
    case 16:
      return "badge badge-xs bg-[#7975D4]";
    case 9:
      return "badge badge-xs bg-[#D78555]";
    case 5:
      return "badge badge-xs bg-[#98D8D8]";
    case 1:
      return "badge badge-xs bg-[#9A9DA1]";
    case 8:
      return "badge badge-xs bg-[#B563CE]";
    case 10:
      return "badge badge-xs bg-[#F85888]";
    case 6:
      return "badge badge-xs bg-[#CEC18C]";
    case 7:
      return "badge badge-xs bg-[#B8B8D0]";
  }
};

// export const getColorType = (typeMove: string) => {
//   switch (typeMove) {
//     case "water":
//       return "#60A5FA";
//     case "fire":
//       return "#FC6C6D";
//     case "grass":
//       return "#5DBE62";
//     case "bug":
//       return "#9DC130";
//     case "dark":
//       return "#5F606D";
//     case "dragon":
//       return "#0773C7";
//     case "electric":
//       return "#EDD53F";
//     case "fairy":
//       return "#EF97E6";
//     case "fighting":
//       return "#D94256";
//     case "flying":
//       return "#9BB4E8";
//     case "gosht":
//       return "#7975D4";
//     case "ground":
//       return "#D78555";
//     case "ice":
//       return "#98D8D8";
//     case "normal":
//       return "#9A9DA1";
//     case "poison":
//       return "#B563CE";
//     case "psychich":
//       return "#F85888";
//     case "rock":
//       return "#CEC18C";
//     case "steel":
//       return "#B8B8D0";

//     default:
//       break;
//   }
// };

export const setCategoryPokemon = (category: string) => {
  switch (category) {
    case "status":
      return "🔰";
    case "special":
      return "🌀";
    case "physical":
      return "💥";
    default:
      break;
  }
};
