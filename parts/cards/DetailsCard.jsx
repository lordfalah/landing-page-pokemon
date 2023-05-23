import React, { Fragment, useContext } from "react";
import api from "../../helpers/api/api";
import Button from "../../components/button/Button";
import { ThemeContext } from "../pokeDex/CatchPokemon";
import { randomRGB } from "../../helpers/utils";
import { getPokemonById } from "../../helpers/utils/fetchApi";

const DetailsCard = ({ name }) => {
  const { setIsOpen, setDataPokemon, setColor } = useContext(ThemeContext);

  const handleDetails = async (name) => {
    const response = await api.get(`pokemon/${name}`);

    setDataPokemon(response.data);
    setIsOpen(true);
    setColor(randomRGB());
    getPokemonById(name);
  };

  return (
    <Fragment>
      <div className="w-full flex justify-center my-10">
        <Button
          type="button"
          className="bg-gradient-to-r from-green-400 to-blue-500/50
          w-11/12 py-3 hover:bg-right-top hover:to-slate-100 "
          onClick={() => handleDetails(name)}
        >
          <span className="font-medium text-white">DETAILS</span>
        </Button>
      </div>
    </Fragment>
  );
};

export default DetailsCard;
