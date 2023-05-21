import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center mt-16 transition-all duration-150 ease-in-out">
      <div className="flex items-center scale-150">
        <span className="bar"></span>
        <span
          className="bar h-[35px] mx-[5px] my-0"
          style={{ animationDelay: ".25s" }}
        ></span>
        <span className="bar" style={{ animationDelay: ".5s" }}></span>
      </div>
    </div>
  );
};

export default Loading;
