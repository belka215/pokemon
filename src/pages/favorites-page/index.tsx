import { FavoriteCard } from "../../components/favorite-card"
import { useSelector } from "react-redux"
import "./index.scss"
import { getFavorites } from "../../store/favorites/selectors"

export const FavoritesPage = () => {
  const pokemons = useSelector(getFavorites)

  return (
    <div className="page">
      <div className="wrapper">
        <h2 className="page__title">Favorite Pokemons</h2>
        <div className="favorites">
          {pokemons.map((item, index) => {
            return <FavoriteCard pokemon={item} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}