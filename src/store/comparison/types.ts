import { PokemonType } from "../../typings/pokemon"
import { PartialDetailedPokemon } from "../pokemons/types"

export type ComparisonState = {
  content: ComparisonPokemon[],
  error: string,
}

export type ComparisonPokemon = PokemonType | PartialDetailedPokemon;