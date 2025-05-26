import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PartialDetailedPokemon, PokemonResponse } from "../store/pokemons/types";

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

export const fetchDetailedPokemon = async (URL: string): Promise<PartialDetailedPokemon> => {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const data = await response.json();

  return data;
}

export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/"
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonResponse, string>({ query: (url) => url })
  })
})

export const { useGetPokemonsQuery } = pokemonsApi;