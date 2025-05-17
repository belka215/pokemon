import like from "../../components/pokemon-card/img/like.png"
import compare from "../../components/pokemon-card/img/compare.png"
import "./index.scss"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getDetailedPokemonThunk } from "../../store/pokemons/slice"
import { getDetailedPokemon, getPokemonURL } from "../../store/pokemons/selectors"
import { Spinner } from "../../components/spinner"
import { AppDispatch } from "../../store"

export const PokemonPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const url = useSelector(getPokemonURL);
  const detailedPokemon = useSelector(getDetailedPokemon);
  console.log(detailedPokemon)

  useEffect(() => {
    dispatch(getDetailedPokemonThunk(url))
  }, []);

  if (!detailedPokemon) {
    return <Spinner />
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
                <button className="pokemon-details__btns__item">
                  <img src={like} alt="" />
                  Add To Favorites
                </button>
                <button className="pokemon-details__btns__item">
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