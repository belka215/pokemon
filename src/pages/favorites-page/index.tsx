import { FavoriteCard } from "../../components/favorite-card"
import "./index.scss"

const mockData = [
  {
    name: "Bulbasaur",
    isFavorite: false,
    isInComparison: false,
    height: 15,
    weight: 3,
    img: 'https://www.pngarts.com/files/3/Bulbasaur-PNG-Picture.png',
    stats: [
      { name: 'stat name', value: 1 },
      { name: 'stat name', value: 1 },
      { name: 'stat name', value: 1 },
      { name: 'stat name', value: 1 }
    ]
  },
  {
    name: "Bulbasaur",
    isFavorite: false,
    isInComparison: false,
    height: 15,
    weight: 3,
    img: 'https://www.pngarts.com/files/3/Bulbasaur-PNG-Picture.png',
    stats: [
      { name: 'stat name', value: 1 },
      { name: 'stat name', value: 1 },
      { name: 'stat name', value: 1 },
      { name: 'stat name', value: 1 }
    ]
  }
]


export const FavoritesPage = () => {
  return (
    <div className="page">
      <div className="wrapper">
        <h2 className="page__title">Favorite Pokemons</h2>
        <div className="favorites">
          {mockData.map((item, index) => {
            return <FavoriteCard pokemon={item} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}