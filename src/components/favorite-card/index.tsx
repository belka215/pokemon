import { FC } from "react"
import "./index.scss"
import { Link } from "react-router-dom";
import { IPokemonComponent } from "../../typings/pokemon"
import { AppDispatch } from "../../store"
import { useDispatch } from "react-redux"
import { removeFromFavorites } from "../../store/favorites/slice"
import { setPokemonURL } from "../../store/pokemons/slice";
import { motion } from "motion/react";

export const FavoriteCard: FC<IPokemonComponent> = ({ pokemon }) => {
  const dispatch: AppDispatch = useDispatch();
  const array = pokemon.url.split('/');
  const id = array[array.length - 2];

  const handleRemove = () => {
    dispatch(removeFromFavorites(pokemon))
  }

  const handleClick = () => {
    dispatch(setPokemonURL(pokemon.url))
  }

  return (
    <div className="favorite-card">
      <div className="favorite-card__column">
        <Link to={`/pokemons/${id}`} className="card-title" onClick={handleClick}>{pokemon.name}</Link>
      </div>
      <div className="favorite-card__column">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="favorite-card__btn text text_uppercase"
          onClick={handleRemove}>Remove</motion.button>
      </div>
    </div>
  )
}