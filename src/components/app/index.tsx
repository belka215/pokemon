import { MainPage } from "../../pages/main-page"
import { PokemonPage } from "../../pages/pokemon-page"
import { Header } from "../header"
import "./index.scss"

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        {/* <MainPage /> */}
        <PokemonPage />
      </main>
    </>
  )
}

export default App