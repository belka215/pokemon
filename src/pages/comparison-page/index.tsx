import { CompareCard } from "../../components/compare-card";
import { useDispatch, useSelector } from "react-redux"
import "./index.scss"
import { getDetailedPokemon } from "../../store/pokemons/selectors"
import { useEffect } from "react";
import { AppDispatch } from "../../store";
import { getDetailedComparisonThunk, updateComparison } from "../../store/comparison/slice";
import { getToComparisonPokemons } from "../../store/comparison/selectors";

export const ComparisonPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const pokemonsToCompare = useSelector(getToComparisonPokemons);
  const detailedPokemon = useSelector(getDetailedPokemon);

  useEffect(() => {
    pokemonsToCompare.forEach(pokemon => {
      if (detailedPokemon && detailedPokemon.name === pokemon.name) {
        dispatch(updateComparison(detailedPokemon))
      } else if ('url' in pokemon) {
        dispatch(getDetailedComparisonThunk(pokemon.url))
      }
    })
  }, [detailedPokemon])

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
          {pokemonsToCompare.map((item, index) => {
            if ('height' in item) {
              return <CompareCard pokemon={item} key={index} />
            }
          })}
        </div>
      </div>
    </div>
  )
}