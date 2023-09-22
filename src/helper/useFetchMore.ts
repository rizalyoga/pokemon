import { GET_POKEMON_EVOLUTION } from "./../graphql/query/getPokemonEvolution";
import { useQuery, ApolloError } from "@apollo/client";

interface Result {
  errorFetching: ApolloError | undefined;
  nextDataEvolutionLine: object[];
}

export default function FetchMore(lengthData: number): Result {
  const { error, data } = useQuery(GET_POKEMON_EVOLUTION, {
    variables: { offset: lengthData, limit: 6 },
  });

  const nextDataEvolutionLine = data?.pokemon_v2_evolutionchain;
  const errorFetching = error;

  return { errorFetching, nextDataEvolutionLine };
}
