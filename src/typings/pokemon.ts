import { PartialDetailedPokemon } from "../store/pokemons/types";

export type PokemonType = {
  name: string,
  url: string,
}

export interface IPokemonComponent {
  pokemon: PokemonType,
}

export interface IDetailedPokemonComponent {
  pokemon: PartialDetailedPokemon,
}