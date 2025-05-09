import { PokemonCard } from "../pokemon-card"
import { PokemonType } from "../../typings/pokemon.ts"
import "./index.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsThunk } from "../../store/pokemons/slice.ts";
import { AppDispatch } from "../../store/index.ts";
import { getPokemons } from "../../store/pokemons/selectors.ts";
import { Spinner } from "../spinner/index.tsx";
import { Pagination } from "../pagination/index.tsx";

export const PokemonList = () => {
  const dispatch: AppDispatch = useDispatch();
  const pokemons = useSelector(getPokemons);

  useEffect(() => {
    dispatch(getPokemonsThunk('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'))
  }, [])

  if (!pokemons) {
    return <Spinner />
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