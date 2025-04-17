import { Pagination } from "../../components/pagination"
import { PokemonList } from "../../components/pokemons-list"
import "./index.scss"

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="wrapper">
        <PokemonList />
        <Pagination />
      </div>
    </div>
  )
}