import { RootState } from "..";

export const getPokemons = (state: RootState) => state.data.pokemons.content;
export const getTotal = (state: RootState) => state.data.pokemons.total;
export const getNextLink = (state: RootState) => state.data.pagination.next;
export const getPrevLink = (state: RootState) => state.data.pagination.previous;