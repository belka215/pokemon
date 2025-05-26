import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users/reducer";
import pokemonsReducer from "./pokemons/slice";
import favoritesReducer from "./favorites/slice";
import comparisonReducer from "./comparison/slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { pokemonsApi } from "../api/pokemons";

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
}

const rootReducer = {
  [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  data: pokemonsReducer,
  user: userReducer,
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  comparison: comparisonReducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pokemonsApi.middleware),
})

const persistor = persistStore(store)

export { store, persistor }

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;