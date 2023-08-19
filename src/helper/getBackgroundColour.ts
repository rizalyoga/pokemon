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
    case "ghost":
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
  }
};

export const getStatProgressColour = (type: string) => {
  switch (type) {
    case "water":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#60A5FA] ";
    case "fire":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#FC6C6D] ";
    case "grass":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#5DBE62] ";
    case "bug":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#9DC130] ";
    case "dark":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#5F606D] ";
    case "dragon":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#0773C7] ";
    case "electric":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#EDD53F] ";
    case "fairy":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#EF97E6] ";
    case "fighting":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#D94256] ";
    case "flying":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#9BB4E8] ";
    case "ghost":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#7975D4] ";
    case "ground":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#D78555] ";
    case "ice":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#98D8D8] ";
    case "normal":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#9A9DA1] ";
    case "poison":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#B563CE] ";
    case "psychic":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#F85888] ";
    case "rock":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#CEC18C] ";
    case "steel":
      return "w-full rounded-xl h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-[#B8B8D0] ";
  }
};
