import type { KepTipus } from "./adatok";

interface NagyKepProps {
  kep: KepTipus;
}

export default function NagyKep({ kep }: NagyKepProps) {
  return (
    <div className="nagy-kep-panel">
      <img src={kep.kep} alt={kep.leiras} />
      <p className="kep-leiras">{kep.leiras}</p>
    </div>
  );
}
