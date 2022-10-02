import React, { createContext, useContext, useState } from "react";

const LangContext = createContext("en");
const LangContextUpdate = createContext<any>(undefined);

export function useLang() {
  return useContext(LangContext);
}

export function useLangUpdate() {
  return useContext(LangContextUpdate);
}

export function LangProvider({ children }: any) {
  const [locale, setLocale] = useState("en");

  const changeLanguage = (e: any) => {
    //e.preventDefault();
    const ln = e.currentTarget.value;
    setLocale(ln);
  };

  return (
    <LangContext.Provider value={locale}>
      <LangContextUpdate.Provider value={changeLanguage}>
        {children}
      </LangContextUpdate.Provider>
    </LangContext.Provider>
  );
}
