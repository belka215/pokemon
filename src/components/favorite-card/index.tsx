import { FC } from "react"
import "./index.scss"

export const FavoriteCard: FC = () => {
  return (
    <div className="favorite-card">
      <div className="favorite-card__column">
        {/* <img src= alt="" /> */}
      </div>
      <div className="favorite-card__column">
        <div className="favorite-card__column__up">
          <p className="card-title"></p>
        </div>
        <div className="favorite-card__column__bottom">
          <div className="favorite-card__column__bottom__column">
            <p className="text">Weight: </p>
            <p className="text">Height: </p>
          </div>
          <div className="favorite-card__column__bottom__column">
            <p className="text">Stats:</p>
            <ul>
              {/* {pokemon.stats?.map((item, index) => {
                return <li className="text" key={index}>{item.name} - {item.value}</li>
              })} */}
            </ul>
          </div>
        </div>
      </div>
      <div className="favorite-card__column">
        <button className="favorite-card__btn text text_uppercase">Remove</button>
      </div>
    </div>
  )
}