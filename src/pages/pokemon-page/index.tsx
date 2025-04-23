import like from "../../components/pokemon-card/img/like.png"
import compare from "../../components/pokemon-card/img/compare.png"
import "./index.scss"

const pokemonData = {
  name: "Bulbasaur",
  number: 1,
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

export const PokemonPage = () => {
  return (
    <div className="pokemon-page">
      <div className="wrapper">
        <div className="pokemon-details">
          <h2 className="pokemon-details__title">{pokemonData.name}</h2>
          <div className="pokemon-details__container">
            <div className="pokemon-details__img">
              <img src={pokemonData.img} alt="" />
            </div>
            <div className="pokemon-details__info">
              <div className="pokemon-details__info__item">
                <p className="text text_uppercase text_bold">Weight:</p>
                <p className="text">{pokemonData.weight} kg</p>
              </div>
              <div className="pokemon-details__info__item">
                <p className="text text_uppercase text_bold">Height:</p>
                <p className="text">{pokemonData.height} cm</p>
              </div>
              <div className="pokemon-details__info__item">
                <p className="text text_uppercase text_bold">Stats:</p>
                <div className="pokemon-details__stats">
                  {pokemonData.stats.map((item, index) => {
                    return <li className="text" key={index}>{item.name} - {item.value}</li>
                  })}
                </div>
              </div>
              <div className="pokemon-details__btns">
                <button className="pokemon-details__btns__item">
                  <img src={like} alt="" />
                  Add To Favorites
                </button>
                <button className="pokemon-details__btns__item">
                  <img src={compare} alt="" />
                  Add To Comparison
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}