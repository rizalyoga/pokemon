export const getIndexPokemon = (url: string) => {
  // Memisahkan URL berdasarkan karakter '/'
  const urlParts = url.split("/");

  // Mendapatkan params terakhir
  const lastParam = urlParts[urlParts.length - 2];

  return +lastParam;
};
