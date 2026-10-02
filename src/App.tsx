import { useState } from "react";
import "./App.css";
import { keplista } from "./component/adatok";
import { KisKep } from "./component/KisKep";
import NagyKep from "./component/NagyKep";


function App() {
  const [i, setI] = useState(0);
  
  function kattintas(index:number) {
    console.log(index);
    setI(index);
  }
  function elolre() {
    if(i < keplista.length - 1) {
      setI(i+1);
    }else{
      setI(0);
    }
  }
  function hatra() {
    if(i > 0) {
      setI(i-1);
    }else {
      setI(keplista.length - 1 );

    }
  }
  return (
    <div className="galeria-container">
      <header>
        <h1>Képgaléria</h1>
      </header>

      <main className="galeria-olvasat">
        <NagyKep kep={keplista[i]} elolre={elolre} hatra={hatra} />

        <section className="galeria">
          {keplista.map((kep,i) => (
            <KisKep key={i} kep={kep} kattintas={kattintas} index={i}/>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
