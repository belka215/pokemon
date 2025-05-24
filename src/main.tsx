import { createRoot } from 'react-dom/client'
import App from "./components/app"
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Spinner } from './components/spinner'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)