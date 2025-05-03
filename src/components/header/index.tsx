import { Link } from "react-router-dom"
import "./index.scss"

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__left">
          <h1 className="h1">Pokemons</h1>
        </Link>
        <div className="header__right">
          <Link to="/favorites" className="header__right__item">Favorites</Link>
          <Link to="/comparison" className="header__right__item">Comparison</Link>
        </div>
      </div>
    </div>
  )
}