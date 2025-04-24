// import { MainPage } from "../../pages/main-page"
// import { PokemonPage } from "../../pages/pokemon-page"
// import { ComparisonPage } from "../../pages/comparison-page"
import { FavoritesPage } from "../../pages/favorites-page"
import { Header } from "../header"
import "./index.scss"

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        {/* <MainPage /> */}
        {/* <PokemonPage /> */}
        {/* <ComparisonPage /> */}
        <FavoritesPage />
      </main>
    </>
  )
}

export default App