import type { KepTipus } from "./adatok";

interface KisKepProps {
  kep: KepTipus;
  kattintas:(index:number)=>void;
  index:number;
}

export function KisKep({ kep, kattintas, index }: KisKepProps) {
  return (
    <div className="kep-kartya" onClick={() => kattintas(index)}>
      <img src={kep.kep} alt={kep.leiras} />
      <span>{kep.leiras}</span>
    </div>
  );
}
