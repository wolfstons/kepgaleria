import { createContext, useContext, useState, type ReactNode } from "react";
import { keplista, type KepTipus } from "../component/adatok";

type KepContextValue = {
  keplista: KepTipus[];
  i: number;
  kep: KepTipus;
  elolre: () => void;
  hatra: () => void;
  kattintas: (index: number) => void;
};

export const KepContext= createContext<
KepContextValue| undefined>(undefined);

type KepProviderProps={
    children: ReactNode
}

export function KepProvider({children}:KepProviderProps){
    const [i, setI] = useState(0);

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

  function kattintas(index:number) {
    setI(index);
  }

return(
    <KepContext.Provider
    value={{ keplista, i, kep: keplista[i], kattintas, elolre, hatra }}
  >
    {children}
  </KepContext.Provider>
);  

}
export function useKepContext() {
    const context = useContext(KepContext);

    if (context === undefined) {
        throw new Error(
            'A useKepContext csak KepProvideren belül használható.'
        );
    }

    return context;
}