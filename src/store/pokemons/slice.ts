import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonsState } from "./types";
import { fetchPokemons } from "../../api/pokemons";

const initialState: PokemonsState = {
  pokemons: {
    content: [],
    total: 0,
  },
  pagination: {
    next: null,
    previous: null,
  },
  isLoading: false,
  error: '',
}

export const getPokemonsThunk = createAsyncThunk<void, string, { rejectValue: string }>(
  'getPokemonsThunk',
  async (URL, { dispatch, rejectWithValue }) => {
    try {
      const { results, count, next, previous } = await fetchPokemons(URL);
      dispatch(setPokemons(results));
      dispatch(setTotal(count));
      dispatch(setNextPage(next));
      dispatch(setPrevPage(previous));
    } catch (e) {
      return rejectWithValue((e as Error).message);
    } finally {
      dispatch(setLoading(false))
    }
  }
)

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setPokemons(state, action) {
      state.pokemons.content = action.payload;
    },
    setTotal(state, action) {
      state.pokemons.total = action.payload;
    },
    setNextPage(state, action) {
      state.pagination.next = action.payload;
    },
    setPrevPage(state, action) {
      state.pagination.previous = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(getPokemonsThunk.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(getPokemonsThunk.fulfilled, (state) => {
      state.isLoading = false;
    })
    builder.addCase(getPokemonsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? 'An error occurred';
    })
  },
})

export const { setLoading, setPokemons, setTotal, setNextPage, setPrevPage } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;