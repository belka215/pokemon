import { FC } from "react"
import "./index.scss"

export const CompareCard: FC = () => {
  return (
    <div className="comparison__column">
      <div className="comparison__column__item">
        <h4 className="text text_uppercase"></h4>
      </div>
      <div className="comparison__column__item">
        <p className="text text_uppercase"></p>
      </div>
      <div className="comparison__column__item">
        <p className="text text_uppercase"></p>
      </div>
      <div className="comparison__column__item">
        <button className="comparison__column__btn text text_uppercase">Remove</button>
      </div>
    </div>
  )
}