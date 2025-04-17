import { MainPage } from "../../pages/main-page"
import { Header } from "../header"
import "./index.scss"

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <MainPage />
      </main>
    </>
  )
}

export default App