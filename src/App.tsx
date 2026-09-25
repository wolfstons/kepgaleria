import "./App.css";
import { keplista } from "./component/adatok";
import { KisKep } from "./component/KisKep";
import NagyKep from "./component/NagyKep";

function App() {
  const elsoKep = keplista[0];
  function kattintas(index:number) {
    console.log(index);
  }

  return (
    <div className="galeria-container">
      <header>
        <h1>Képgaléria</h1>
      </header>

      <main className="galeria-olvasat">
        <NagyKep kep={elsoKep} />

        <section className="galeria">
          {keplista.map((kep,i) => (
            <KisKep key={kep.kep} kep={kep} kattintas={kattintas} index={i}/>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
