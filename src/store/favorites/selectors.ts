import { RootState } from "..";

export const getFavorites = (state: RootState) => state.favorites.content;