import React from "react";
import Paragraf from "../text/Paragraf";
import SubTitle from "../text/SubTitle";

const ErrorCustom = ({ error }) => {
  return (
    <div className="mx-auto">
      <article className="text-center space-y-2 mt-20">
        <h1
          className="font-bold text-9xl tracking-widest 
            bg-clip-text text-transparent bg-gradient-to-tr from-white 
            to-pink-800 drop-shadow-lg shadow-black"
        >
          {error.response.status}
        </h1>
        <SubTitle className="text-5xl text-pink-700/80">
          {error.response.data}
        </SubTitle>
        <Paragraf className="font-normal text-2xl">{error.message}</Paragraf>
      </article>
    </div>
  );
};

export default ErrorCustom;
