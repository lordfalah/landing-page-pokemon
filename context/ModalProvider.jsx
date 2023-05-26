import React, { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataPokemon, setDataPokemon] = useState({});
  const [color, setColor] = useState("");

  const modalValue = {
    isOpen,
    setIsOpen,
    dataPokemon,
    setDataPokemon,
    color,
    setColor,
  };

  return (
    <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
