export type PokemonType = {
  name: string,
  url: string,
}

export interface IPokemonComponent {
  pokemon: PokemonType;
}