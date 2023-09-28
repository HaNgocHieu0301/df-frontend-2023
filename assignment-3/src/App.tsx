import { useContext } from 'react'
import { Header, Main, Footer } from './sections'
import { StoreContext } from './store'

function App() {
  const { state } = useContext(StoreContext)
  return (
    <div className={`theme-${state.theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
