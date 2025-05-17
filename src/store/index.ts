import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users/reducer";
import pokemonsReducer from "./pokemons/slice";

const rootReducer = {
  data: pokemonsReducer,
  user: userReducer
}

export const store = configureStore({
  reducer: rootReducer
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;