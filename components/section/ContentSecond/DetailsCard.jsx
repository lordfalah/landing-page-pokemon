import React, { Fragment, useContext } from "react";
import api from "../../../api/api";

import Button from "../../button/Button";
import { ThemeContext } from "../../../parts/pokeDex/CatchPokemon";
import { random_rgb } from "../../../utils";

const DetailsCard = ({ name }) => {
  const { setIsOpen, setDataPokemon, setColor } = useContext(ThemeContext);

  const handleDetails = async (name) => {
    const response = await api.get(`pokemon/${name}`);

    setDataPokemon(response.data);
    setIsOpen(true);
    setColor(random_rgb());
  };

  return (
    <Fragment>
      <div className="w-full flex justify-center my-10">
        <Button
          type="button"
          className="bg-gradient-to-r from-green-400 to-blue-500/50
          w-11/12 py-3 transition duration-300 hover:bg-right-top"
          onClick={() => handleDetails(name)}
        >
          <span className="font-medium text-white">DETAILS</span>
        </Button>
      </div>
    </Fragment>
  );
};

export default DetailsCard;
