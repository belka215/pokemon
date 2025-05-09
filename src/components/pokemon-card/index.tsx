import { FC } from "react";
import { Link } from "react-router-dom";
import { IPokemonComponent } from "../../typings/pokemon"
import like from "./img/like.png"
import compare from "./img/compare.png"
import "./index.scss"

export const PokemonCard: FC<IPokemonComponent> = ({ pokemon }) => {
  const handleClick = () => {
    console.log(pokemon.name)
  }

  return (
    <Link to={`/pokemons/${pokemon.number}`} className="card" onClick={handleClick}>
      <div className="card__top">
        <h4 className="card__name">{pokemon.name}</h4>
      </div>
      <div className="card__bottom">
        <div className="card__icon">
          <img src={like} alt="" className="like" />
        </div>
        <div className="card__icon">
          <img src={compare} alt="" className="compare" />
        </div>
      </div>
    </Link>
  )
}