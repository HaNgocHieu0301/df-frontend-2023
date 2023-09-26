import "./App.css";
import { Header, Main, Footer } from "./sections";
import { StoreProvider } from "./store";
function App() {
  return (
    <StoreProvider>
      <Header />
      <Main />
      <Footer />
    </StoreProvider>
  );
}

export default App;
