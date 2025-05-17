import { createSlice } from "@reduxjs/toolkit"
import { FavoritesState } from "./types"

const initialState: FavoritesState = {
  content: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setToFavorites(state, action) {
      state.content = state.content.find(pokemon => pokemon.name === action.payload.name) ? state.content : [...state.content, action.payload]
    },
    removeFromFavorites(state, action) {
      state.content = state.content.filter(pokemon => pokemon.name !== action.payload.name);
    }
  }
})

export const { setToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;