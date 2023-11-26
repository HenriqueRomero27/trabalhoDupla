import Votacao from "./components/Enquete/Votacao";
import Conversor from "./components/Conversor/Conversor";
import Counter from "./components/Counter/Counter";
import Media from "./components/Media/Media";
import Temperatura from "./components/Temperatura/Temperatura";

function App() {
  return (
    <div className="App">
      <h2>Cálculo da Média</h2>
      <Media />

      <h2>Conversor de Moeda</h2>
      <Conversor />

      <h2>Counter</h2>
      <Counter />

      <h2>Enquete</h2>
      <Votacao />

      <h2>Temperaura</h2>
      <Temperatura />
    </div>
  );
}

export default App;
