import { PokemonList } from "../../components/pokemons-list"
import { getComparisonError } from "../../store/comparison/selectors";
import { useSelector } from "react-redux";
import "./index.scss"

export const MainPage = () => {
  const comparisonError = useSelector(getComparisonError);
  return (
    <div className="main-page">
      {comparisonError && <p>{comparisonError}</p>}
      <PokemonList />
    </div>
  )
}