import { PokemonCard } from "../pokemon-card"
import { PokemonType } from "../../typings/pokemon.ts"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsThunk } from "../../store/pokemons/slice.ts";
import { AppDispatch } from "../../store/index.ts";
import { getError, getPokemons } from "../../store/pokemons/selectors.ts";
import { Spinner } from "../spinner/index.tsx";
import { Pagination } from "../pagination/index.tsx";
import "./index.scss"

export const PokemonList = () => {
  const dispatch: AppDispatch = useDispatch();
  const pokemons = useSelector(getPokemons);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getPokemonsThunk('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'));
  }, [])

  if (!pokemons) {
    return <Spinner />
  }

  if (error) {
    return <p>Smth went wrong</p>
  }

  return (
    <div className="wrapper">
      <div className="pokemon-list">
        {pokemons.
          map((item: PokemonType, i: number) => {
            return <PokemonCard pokemon={item} key={i} />
          }
          )
        }
      </div>
      <Pagination />
    </div>
  )
}