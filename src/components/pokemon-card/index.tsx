import { FC } from "react";
import { Link } from "react-router-dom";
import { IPokemonComponent } from "../../typings/pokemon"
import like from "./img/like.png"
import compare from "./img/compare.png"
import { useDispatch, useSelector } from "react-redux";
import { setPokemonURL } from "../../store/pokemons/slice";
import "./index.scss"
import { removeFromFavorites, setToFavorites } from "../../store/favorites/slice";
import { getFavorites } from "../../store/favorites/selectors";
import { addToComparison } from "../../store/comparison/slice";
import { getComparisonError } from "../../store/comparison/selectors";

export const PokemonCard: FC<IPokemonComponent> = ({ pokemon }) => {
  const dispatch = useDispatch();
  const array = pokemon.url.split('/');
  const id = array[array.length - 2];
  const isLiked = Boolean(useSelector(getFavorites).find(item => {
    return item.name === pokemon.name
  }));

  const handleClick = () => {
    dispatch(setPokemonURL(pokemon.url));
  }

  const handleLike = () => {
    if (isLiked) {
      dispatch(removeFromFavorites(pokemon));
    } else {
      dispatch(setToFavorites(pokemon));
    }
  }

  const handleCompare = () => {
    dispatch(addToComparison(pokemon))
  }

  return (
    <div className="card">
      <div className="card__top" onClick={handleClick}>
        <Link to={`/pokemons/${id}`} className="card__name">{pokemon.name}</Link>
      </div>
      <div className="card__bottom">
        <div className="card__icon">
          <img src={like} alt="" className={`like${isLiked ? ' like_active' : ''}`} onClick={handleLike} />
        </div>
        <div className="card__icon">
          <img src={compare} alt="" className="compare" onClick={handleCompare} />
        </div>
      </div>
    </div>
  )
}