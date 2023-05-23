import React from "react";

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
      <div
        className="absolute bottom-4 lg:bottom-4 xl:bottom-0
      flex justify-between items-center w-full px-10"
      ></div>
    </div>
  );
};

export default LandingBG;
