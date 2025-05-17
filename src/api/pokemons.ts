import { PokemonResponse } from "../store/pokemons/types";

export const fetchPokemons = async (URL: string): Promise<PokemonResponse> => {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  const data = await response.json();

  return {
    results: data.results,
    count: data.count,
    next: data.next,
    previous: data.previous,
  }
}