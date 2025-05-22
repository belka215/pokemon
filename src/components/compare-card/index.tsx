import { FC } from "react"
import "./index.scss"
import { IDetailedPokemonComponent } from "../../typings/pokemon"
import { AppDispatch } from "../../store"
import { useDispatch } from "react-redux"
import { removeFromComparison } from "../../store/comparison/slice"

export const CompareCard: FC<IDetailedPokemonComponent> = ({ pokemon }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromComparison(pokemon))
  }

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
        <button className="comparison__column__btn text text_uppercase" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  )
}