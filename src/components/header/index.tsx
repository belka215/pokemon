import "./index.scss"

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header__left">
          <h1 className="h1">Pokemons</h1>
        </div>
        <div className="header__right">
          <button className="header__right__item">Favorites</button>
          <button className="header__right__item">Comparison</button>
        </div>
      </div>
    </div>
  )
}