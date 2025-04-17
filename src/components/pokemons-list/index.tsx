import { PokemonCard } from "../pokemon-card"
import { PokemonType } from "../../typings/pokemon.ts"
import "./index.scss"

const mockData = [
  {
    name: "Bulbasaur",
    number: 1,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Ivysaur",
    number: 2,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Venusaur",
    number: 3,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Charmander",
    number: 4,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Charmeleon",
    number: 5,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Charizard",
    number: 6,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Squirtle",
    number: 7,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Wartortle",
    number: 8,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Blastoise",
    number: 9,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Caterpie",
    number: 10,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Metapod",
    number: 11,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Butterfree",
    number: 12,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Weedle",
    number: 13,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Kakuna",
    number: 14,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Beedrill",
    number: 15,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Pidgey",
    number: 16,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Pidgeotto",
    number: 17,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Pidgeot",
    number: 18,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Rattata",
    number: 19,
    isFavorite: false,
    isInComparison: false,
  },
  {
    name: "Raticate",
    number: 20,
    isFavorite: false,
    isInComparison: false,
  },
];

export const PokemonList = () => {
  return (
    <div className="pokemon-list">
      {mockData.
        map((item: PokemonType, i: number) => {
          return <PokemonCard pokemon={item} key={i} />
        }
        )
      }
    </div>
  )
}