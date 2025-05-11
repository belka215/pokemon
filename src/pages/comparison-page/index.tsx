// import { CompareCard } from "../../components/compare-card";
import "./index.scss"

export const ComparisonPage = () => {
  return (
    <div className="page">
      <div className="wrapper">
        <h2 className="page__title">Compare Pokemons</h2>
        <div className="comparison">
          <div className="comparison__column">
            <div className="comparison__column__item">
              <p className="text text_uppercase text_bold">Name</p>
            </div>
            <div className="comparison__column__item">
              <p className="text text_uppercase text_bold">Weight (kg)</p>
            </div>
            <div className="comparison__column__item">
              <p className="text text_uppercase text_bold">Height (cm)</p>
            </div>
            <div className="comparison__column__item">
            </div>
          </div>
          {/* {mockData.map((item, index) => {
            return <CompareCard />
          })} */}
        </div>
      </div>
    </div>
  )
}