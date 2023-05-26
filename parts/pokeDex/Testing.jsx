import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalProvider";

const Testing = () => {
  const { isOpen, dataPokemon } = useContext(ModalContext);
  console.log(isOpen, dataPokemon);
  return <p>asu</p>;
};

export default Testing;
