import type { KepTipus } from "./adatok";

interface KisKepProps {
  kep: KepTipus;
}

export function KisKep({ kep }: KisKepProps) {
  return (
    <div className="kep-kartya">
      <img src={kep.kep} alt={kep.leiras} />
      <span>{kep.leiras}</span>
    </div>
  );
}
