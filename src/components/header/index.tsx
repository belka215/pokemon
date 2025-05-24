import { Link } from "react-router-dom"
import { motion } from "motion/react"
import "./index.scss"

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__left">
          <h1 className="h1">Pokemons</h1>
        </Link>
        <div className="header__right">
          <motion.div
            whileHover={{ scale: 1.1, fontWeight: 700 }}
            transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/favorites" className="header__right__item">Favorites</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, fontWeight: 700 }}
            transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/comparison" className="header__right__item">Comparison</Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}