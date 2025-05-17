import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "../../pages/main-page"
import { PokemonPage } from "../../pages/pokemon-page"
import { ComparisonPage } from "../../pages/comparison-page"
import { FavoritesPage } from "../../pages/favorites-page"
import { Header } from "../header"
import "./index.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="pokemons/:id" element={<PokemonPage />} />
          <Route path="comparison" element={<ComparisonPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App