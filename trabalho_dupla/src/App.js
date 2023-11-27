import Votacao from "./components/Enquete/Votacao";
import Conversor from "./components/Conversor/Conversor";
import Counter from "./components/Counter/Counter";
import Media from "./components/Media/Media";
import Temperatura from "./components/Temperatura/Temperatura";

function App() {
  return (
    <div className="App">
      <Media />

      <Conversor />

      <Counter />

      <Votacao />

      <Temperatura />
    </div>
  );
}

export default App;
