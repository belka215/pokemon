export type PokemonType = {
  name: string;
  number: number;
  isFavorite: boolean;
  isInComparison: boolean;
}

export interface IPokemonComponent {
  pokemon: PokemonType;
}