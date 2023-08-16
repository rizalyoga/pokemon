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
      return "badge badge-sm bg-[#60A5FA] border-[#60A5FA]";
    case 17:
      return "badge badge-sm bg-[#FC6C6D] border-[#FC6C6D]";
    case 2:
      return "badge badge-sm bg-[#5DBE62] border-[#5DBE62]";
    case 11:
      return "badge badge-sm bg-[#9DC130] border-[#9DC130]";
    case 12:
      return "badge badge-sm bg-[#5F606D] border-[#5F606D]";
    case 13:
      return "badge badge-sm bg-[#0773C7] border-[#0773C7]";
    case 4:
      return "badge badge-sm bg-[#EDD53F] border-[#EDD53F]";
    case 14:
      return "badge badge-sm bg-[#EF97E6] border-[#EF97E6]";
    case 18:
      return "badge badge-sm bg-[#D94256] border-[#D94256]";
    case 15:
      return "badge badge-sm bg-[#9BB4E8] border-[#9BB4E8]";
    case 16:
      return "badge badge-sm bg-[#7975D4] border-[#7975D4]";
    case 9:
      return "badge badge-sm bg-[#D78555] border-[#D78555]";
    case 5:
      return "badge badge-sm bg-[#98D8D8] border-[#98D8D8]";
    case 1:
      return "badge badge-sm bg-[#9A9DA1] border-[#9A9DA1]";
    case 8:
      return "badge badge-sm bg-[#B563CE] border-[#B563CE]";
    case 10:
      return "badge badge-sm bg-[#F85888] border-[#F85888]";
    case 6:
      return "badge badge-sm bg-[#CEC18C] border-[#CEC18C]";
    case 7:
      return "badge badge-sm bg-[#B8B8D0] border-[#B8B8D0]";
  }
};

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
