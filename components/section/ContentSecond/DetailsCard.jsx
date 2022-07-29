import React, { Fragment, useContext } from "react";
import api from "../../../api/api";
import { DataContext, ThemeContext } from "../../../pages";
import Button from "../../button/Button";

{
  /* <div className="rounded-full px-10 py-2 bg-green-400 w-5/12"></div>
                  <div className="flex items-center">
                    <Paragraf>HP 27/6</Paragraf>
                    <span
                      className="inline-block border-t border-t-slate-500 w-6 
                    rotate-90 origin-top"
                    ></span>
                    <Paragraf>Xp 240</Paragraf>
                  </div> */
}

{
  /* <div className="flex justify-evenly text-center gap-5">
                  <div>
                    <Paragraf className="text-lg">Fire/Flying</Paragraf>
                    <span>type</span>
                  </div>

                  <div>
                    <Paragraf className="text-lg">905kg</Paragraf>
                    <span>Weight</span>
                  </div>

                  <div>
                    <Paragraf className="text-lg">0.17m</Paragraf>
                    <span>Height</span>
                  </div>
                </div>

                <span className="border w-full inline-block my-6"></span>

                <div className="flex justify-evenly text-center gap-5">
                  <div>
                    <Paragraf className="text-lg">905kg</Paragraf>
                    <span>Weight</span>
                  </div>

                  <div>
                    <Paragraf className="text-lg">0.17m</Paragraf>
                    <span>Height</span>
                  </div>
                </div> */
}

function random_rgb() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

const DetailsCard = ({ name }) => {
  const { setIsOpen } = useContext(ThemeContext);
  const { setDataPokemon, setColor } = useContext(DataContext);

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
          className="bg-gradient-to-r from-green-400 to-blue-500/50
          w-11/12 py-3"
          onClick={() => handleDetails(name)}
        >
          <span className="font-medium text-white">DETAILS</span>
        </Button>
      </div>
    </Fragment>
  );
};

export default DetailsCard;
