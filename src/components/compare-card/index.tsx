import { FC } from "react"
import { IDetailedPokemonComponent } from "../../typings/pokemon"
import "./index.scss"

export const CompareCard: FC<IDetailedPokemonComponent> = ({ pokemon }) => {
  return (
    <div className="comparison__column">
      <div className="comparison__column__item">
        <h4 className="text text_uppercase">{pokemon.name}</h4>
      </div>
      <div className="comparison__column__item">
        <p className="text text_uppercase">{pokemon.weight}</p>
      </div>
      <div className="comparison__column__item">
        <p className="text text_uppercase">{pokemon.height}</p>
      </div>
      <div className="comparison__column__item">
        <button className="comparison__column__btn text text_uppercase">Remove</button>
      </div>
    </div>
  )
}