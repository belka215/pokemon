import like from "../../components/pokemon-card/img/like.png"
import compare from "../../components/pokemon-card/img/compare.png"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getDetailedPokemonThunk } from "../../store/pokemons/slice"
import { getDetailedPokemon, getPokemonURL } from "../../store/pokemons/selectors"
import { Spinner } from "../../components/spinner"
import { AppDispatch } from "../../store"
import "./index.scss"
import { getFavorites } from "../../store/favorites/selectors"
import { useParams } from "react-router-dom"
import { removeFromFavorites, setToFavorites } from "../../store/favorites/slice"
import { addToComparison, removeFromComparison } from "../../store/comparison/slice"
import { getToComparisonPokemons } from "../../store/comparison/selectors";

export const PokemonPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  const url = useSelector(getPokemonURL);
  const detailedPokemon = useSelector(getDetailedPokemon);
  const pokemon = {
    name: detailedPokemon.name,
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`
  };
  const isLiked = Boolean(useSelector(getFavorites).find(item => {
    return item.name === pokemon.name
  }))
  const isInComparison = Boolean(useSelector(getToComparisonPokemons).find(item => {
    return item.name === pokemon.name
  }));

  useEffect(() => {
    dispatch(getDetailedPokemonThunk(url))
  }, []);

  if (!detailedPokemon) {
    return <Spinner />
  }

  const handleLike = () => {
    if (isLiked) {
      dispatch(removeFromFavorites(pokemon))
    } else {
      dispatch(setToFavorites(pokemon))
    }
  }

  const handleCompare = () => {
    isInComparison ? dispatch(removeFromComparison(pokemon)) : dispatch(addToComparison(pokemon))
  }

  return (
    <div className="pokemon-page">
      <div className="wrapper">
        <div className="pokemon-details">
          <h2 className="pokemon-details__title">{detailedPokemon.name}</h2>
          <div className="pokemon-details__container">
            <div className="pokemon-details__img">
              {/* <img src={} alt="" /> */}
            </div>
            <div className="pokemon-details__info">
              <div className="pokemon-details__info__item">
                <p className="text text_uppercase text_bold">Weight:</p>
                <p className="text">{detailedPokemon.weight} kg</p>
              </div>
              <div className="pokemon-details__info__item">
                <p className="text text_uppercase text_bold">Height:</p>
                <p className="text">{detailedPokemon.height} cm</p>
              </div>
              <div className="pokemon-details__info__item">
                <p className="text text_uppercase text_bold">Stats:</p>
                <div className="pokemon-details__stats">
                  {detailedPokemon.stats.map((item, index) => {
                    return <li className="text" key={index}>{item.stat.name} - {item.base_stat}</li>
                  })}
                </div>
              </div>
              <div className="pokemon-details__btns">
                <button className={`pokemon-details__btns__item${isLiked ? ' btn-active' : ''}`} onClick={handleLike}>
                  <img src={like} alt="" />
                  Add To Favorites
                </button>
                <button className={`pokemon-details__btns__item${isInComparison ? ' btn-active' : ''}`} onClick={handleCompare}>
                  <img src={compare} alt="" />
                  Add To Comparison
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}