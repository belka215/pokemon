import { PokemonCard } from "../pokemon-card"
import { PokemonType } from "../../typings/pokemon.ts"
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPokemonsThunk } from "../../store/pokemons/slice.ts";
// import { AppDispatch } from "../../store/index.ts";
// import { getError, getPokemons } from "../../store/pokemons/selectors.ts";
import { Spinner } from "../spinner/index.tsx";
import { Pagination } from "../pagination/index.tsx";
import { motion } from "motion/react";
import "./index.scss"
import { useGetPokemonsQuery } from "../../api/pokemons.ts";

const limit = 20;

export const PokemonList = () => {
  // const dispatch: AppDispatch = useDispatch();

  // const error = useSelector(getError);
  const listVariants = {
    hidden: {
      x: "-100vh"
    },
    visible: {
      x: 0,
    }
  }

  // useEffect(() => {
  //   dispatch(getPokemonsThunk('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'));
  // }, [])

  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const url = `pokemon?offset=${offset}&limit=${limit}`;
  const { data, error, isLoading } = useGetPokemonsQuery(url);
  const pokemons = data?.results;

  if (!pokemons) {
    return <Spinner />
  }

  if (error) {
    return <p>Smth went wrong</p>
  }

  if (isLoading) return <div>Loading new page...</div>;

  return (
    <div className="wrapper">
      <motion.div
        variants={listVariants}
        animate="visible"
        initial="hidden"
        className="pokemon-list">
        {pokemons.
          map((item: PokemonType) => {
            return <PokemonCard pokemon={item} key={item.url} />
          }
          )
        }
      </motion.div>
      <Pagination page={page} setPage={setPage} url={url} />
    </div>
  )
}