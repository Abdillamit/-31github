"use client";
import { AccountProps, ChildProps, ContextType } from "@/types";
import { createContext, useContext, useState } from "react";

export const Context = createContext<ContextType | null>(null);

export default function GlobalContext({ children }: ChildProps) {
  const [accaunt, setAccaunt] = useState<AccountProps | null>(null);
  return (
    <Context.Provider value={{ accaunt, setAccaunt }}>
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (context === null) {
    throw new Error("useGlobalContext must be used within a GlobalContext");
  }
  return context;
};
