import React from "react";
import GridImg from "../../components/slideImg/GridImg";
import SwapIcon from "../../components/slideImg/SwapIcon";

const LandingBG = () => {
  return (
    <div
      className="bg-green-500/80 w-3/4 md:w-[55%] h-screen 
        absolute top-0 right-0 before:-z-20"
      style={{
        clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
        WebkitClipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      <GridImg className="w-24 h-12 absolute bottom-40 right-0 block sm:hidden" />

      <div
        className="absolute bottom-4 lg:bottom-4 xl:bottom-0
      flex justify-between items-center w-full px-10"
      >
        <GridImg
          className="w-[120px] h-[50px] sm:w-40 sm:h-[55px] lg:w-52 
        lg:h-20 xl:w-64 xl:h-28 overflow-hidden hidden md:block"
        />
        <SwapIcon className="flex justify-center items-center" />
      </div>
    </div>
  );
};

export default LandingBG;
