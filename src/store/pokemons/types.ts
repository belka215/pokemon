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
  detailedPokemon: {
    url: string,
    content: PartialDetailedPokemon,
    isLoading: boolean,
    error: string,
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

export type PartialDetailedPokemon = {
  weight: number,
  height: number,
  name: string,
  stats: Stats[],
}

type Stats = {
  base_stat: number,
  stat: Stat,
}

type Stat = {
  name: string,
  url: string,
}