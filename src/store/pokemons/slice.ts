import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonsState } from "./types";
import { fetchDetailedPokemon, fetchPokemons } from "../../api/pokemons";

const initialState: PokemonsState = {
  pokemons: {
    content: [],
    total: 0,
  },
  pagination: {
    next: null,
    previous: null,
  },
  detailedPokemon: {
    url: '',
    content: {
      weight: 0,
      height: 0,
      name: '',
      stats: []
    },
    isLoading: false,
    error: '',
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

export const getDetailedPokemonThunk = createAsyncThunk<void, string, { rejectValue: string }>(
  'getDetailedPokemonThunk',
  async (URL, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setDetailedPokemonLoading(true));

      const detailedPokemonData = await fetchDetailedPokemon(URL);

      dispatch(setDetailedPokemon(detailedPokemonData));
    } catch (e) {
      return rejectWithValue((e as Error).message);
    } finally {
      dispatch(setDetailedPokemonLoading(false))
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
    },
    setPokemonURL(state, action) {
      state.detailedPokemon.url = action.payload;
    },
    setDetailedPokemon(state, action) {
      state.detailedPokemon.content = action.payload;
    },
    setDetailedPokemonLoading(state, action) {
      state.detailedPokemon.isLoading = action.payload;
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

export const { setLoading, setPokemons, setTotal, setNextPage, setPrevPage, setDetailedPokemon, setDetailedPokemonLoading, setPokemonURL } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;