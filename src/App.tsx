import "./App.css";
import { KisKep } from "./component/KisKep";
import NagyKep from "./component/NagyKep";
import { useKepContext } from "./contexts/KepContext";


function App() { 
  const { keplista, i } = useKepContext();
  return (
    <div className="galeria-container">
      <header>
        <h1>Képgaléria</h1>
      </header>

      <main className="galeria-olvasat">
        <NagyKep kep={keplista[i]} />

        <section className="galeria">
          {keplista.map((kep,i) => (
            <KisKep key={i} kep={kep} index={i}/>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
