import "./App.css";
import { keplista } from "./component/adatok";
import { KisKep } from "./component/KisKep";
import NagyKep from "./component/NagyKep";

function App() {
  const elsoKep = keplista[0];

  return (
    <div className="galeria-container">
      <header>
        <h1>Képgaléria</h1>
      </header>

      <main className="galeria-olvasat">
        <NagyKep kep={elsoKep} />

        <section className="galeria">
          {keplista.map((kep) => (
            <KisKep key={kep.kep} kep={kep} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
