export const getBackgroundColour = (type: string) => {
  switch (type) {
    case "water":
      return "bg-[#60A5FA] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "fire":
      return "bg-[#FC6C6D] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "grass":
      return "bg-[#5DBE62] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "bug":
      return "bg-[#9DC130] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "dark":
      return "bg-[#5F606D] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "dragon":
      return "bg-[#0773C7] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "electric":
      return "bg-[#EDD53F] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "fairy":
      return "bg-[#EF97E6] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "fighting":
      return "bg-[#D94256] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "flying":
      return "bg-[#9BB4E8] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "gosht":
      return "bg-[#7975D4] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "ground":
      return "bg-[#D78555] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "ice":
      return "bg-[#98D8D8] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "normal":
      return "bg-[#9A9DA1] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "poison":
      return "bg-[#B563CE] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "psychic":
      return "bg-[#F85888] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "rock":
      return "bg-[#CEC18C] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";
    case "steel":
      return "bg-[#B8B8D0] p-4 mt-6 rounded-md flex justify-around items-center max-[1200px]:gap-2 max-[770px]:flex-col-reverse max-[770px]:gap-0 max-[770px]:p-10 max-[450px]:p-4";

    default:
      break;
  }
};

export const getStatProgressColour = (type: string) => {
  switch (type) {
    case "water":
      return "progress progress-water ";
    case "fire":
      return "progress progress-fire ";
    case "grass":
      return "progress progress-grass ";
    case "bug":
      return "progress progress-bug ";
    case "dark":
      return "progress progress-dark ";
    case "dragon":
      return "progress progress-dragon ";
    case "electric":
      return "progress progress-electric ";
    case "fairy":
      return "progress progress-fairy ";
    case "fighting":
      return "progress progress-fighting ";
    case "flying":
      return "progress progress-flying ";
    case "gosht":
      return "progress progress-gosht ";
    case "ground":
      return "progress progress-ground ";
    case "ice":
      return "progress progress-ice ";
    case "normal":
      return "progress progress-normal ";
    case "poison":
      return "progress progress-poison ";
    case "psychic":
      return "progress progress-psychic ";
    case "rock":
      return "progress progress-rock ";
    case "steel":
      return "progress progress-steel ";

    default:
      break;
  }
};
