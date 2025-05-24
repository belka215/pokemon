import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ComparisonState } from "./types";
import { fetchDetailedPokemon } from "../../api/pokemons";

const initialState: ComparisonState = {
  content: [],
  error: '',
}

export const getDetailedComparisonThunk = createAsyncThunk<void, string, { rejectValue: string }>(
  'getDetailedComparisonThunk',
  async (URL, { dispatch, rejectWithValue }) => {
    try {
      const detailedPokemonData = await fetchDetailedPokemon(URL);
      dispatch(updateComparison(detailedPokemonData))
    } catch (e) {
      return rejectWithValue((e as Error).message);
    }
  }
)

const comparisonSlice = createSlice({
  name: 'comparison',
  initialState,
  reducers: {
    addToComparison(state, action) {
      const alreadyExists = state.content.find(pokemon => pokemon.name === action.payload.name);

      if (alreadyExists) {
        return;
      }

      if (state.content.length >= 2) {
        state.error = 'You can compare max 2 pokemons';
        return;
      }

      state.content = [...state.content, action.payload];
      state.error = '';
    },
    removeFromComparison(state, action) {
      if (state.content.length <= 2) {
        state.error = ''
      }
      state.content = state.content.filter(pokemon => pokemon.name !== action.payload.name)
    },
    updateComparison(state, action) {
      state.content = state.content.filter(item => item.name !== action.payload.name);
      state.content = [...state.content, action.payload]
    }
  }
})

export const { addToComparison, removeFromComparison, updateComparison } = comparisonSlice.actions;

export default comparisonSlice.reducer;