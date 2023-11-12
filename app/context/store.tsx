"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  cursorVariant: string;
  setCursorVariant: Dispatch<SetStateAction<string>>;
  navbarOpen: boolean;
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  cursorVariant: "",
  setCursorVariant: (): string => "",
  navbarOpen: false,
  setNavbarOpen: (): boolean => false,
});


import React, { ReactNode } from "react";

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ cursorVariant, setCursorVariant, navbarOpen, setNavbarOpen }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
