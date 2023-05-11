import React from "react";

const BtnPokemon = ({ className, children, ...props }) => {
  const addClass = className ? className : "";

  return (
    <button
      {...props}
      type="button"
      className={`${addClass} text-[#090909] bg-[#e8e8e8] rounded-lg border-2 border-solid border-[#e8e8e8] shadow-reguler active:shadow-active hover:border hover:border-white box-border transition-all duration-150 w-32 h-12 ${
        props?.disabled
          ? "flex justify-center"
          : "grid grid-cols-2 justify-between"
      } items-center gap-x-4 group relative`}
    >
      {children}
    </button>
  );
};

export default BtnPokemon;
