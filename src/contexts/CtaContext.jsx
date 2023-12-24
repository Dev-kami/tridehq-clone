import { createContext, useContext, useState } from "react";

const CtaContext = createContext();

function CtaProvider({ children }) {
  const [isActive, setIsActive] = useState(0);

  return (
    <CtaContext.Provider
      value={{
        isActive,
        setIsActive,
      }}
    >
      {children}
    </CtaContext.Provider>
  );
}

function useCta() {
  const context = useContext(CtaContext);
  if (context === undefined)
    throw new Error("CtaContext was used outside the CtaProvider");

  return context;
}

export { CtaProvider, useCta };
