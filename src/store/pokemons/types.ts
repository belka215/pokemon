import { PokemonType } from '../../typings/pokemon'

export type PokemonsState = {
  pokemons: {
    content: PokemonType[],
    total: number,
  },
  pagination: {
    next: string | null,
    previous: string | null,
  },
  isLoading: boolean,
  error: string,
}

export type PokemonResponse = {
  count: number,
  results: PokemonType[],
  next: string | null,
  previous: string | null,
}