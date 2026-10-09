import { useKepContext } from "../contexts/KepContext";
import type { KepTipus } from "./adatok";


interface KisKepProps {
  kep: KepTipus;
  index:number;
}

export function KisKep({ kep, index }: KisKepProps) {
  const { kattintas } = useKepContext();
  return (
    <div className="kep-kartya" onClick={() => kattintas(index)}>
      <img src={kep.kep} alt={kep.leiras} />
      <span>{kep.leiras}</span>
    </div>
  );
}
