import { RootState } from "..";

export const getToComparisonPokemons = (state: RootState) => state.comparison.content;
export const getComparisonError = (state: RootState) => state.comparison.error;