export type PokemonType = {
  name: string;
  number: number;
  isFavorite: boolean;
  isInComparison: boolean;
}

export interface IPokemonComponent {
  pokemon: PokemonType;
}

export type DetailedPokemonType = {
  name: string;
  weight: number;
  height: number;
  isFavorite: boolean;
  isInComparison: boolean;
  img?: string;
  stats?: Stat[];
}

export interface IDetailedPokemonComponent {
  pokemon: DetailedPokemonType;
}

type Stat = {
  name: string;
  value: number;
}