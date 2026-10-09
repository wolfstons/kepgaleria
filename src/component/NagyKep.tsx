import { useKepContext } from "../contexts/KepContext";
import type { KepTipus } from "./adatok";

interface NagyKepProps {
  kep: KepTipus,
  

}

export default function NagyKep({ kep }: NagyKepProps) {
  const { elolre, hatra } = useKepContext();
  return (
    <div className="nagy-kep-panel">
      <button className="bal-gomb" onClick={() => hatra()}>{"🐈"}</button>
      <button className="jobb-gomb" onClick={() => elolre()}>{"🐈"}</button>
      <img src={kep.kep} alt={kep.leiras} />
      
      <p className="kep-leiras">{kep.leiras}</p>
    </div>
  );
}
