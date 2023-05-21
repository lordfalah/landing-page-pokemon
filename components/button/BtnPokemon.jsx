import React from "react";

const BtnPokemon = ({ className, title, children, ...props }) => {
  const addClass = className ? className : "";

  return (
    <button
      {...props}
      type="button"
      className={`${addClass} text-[#090909] bg-[#e8e8e8] rounded-lg border-2 border-solid border-[#e8e8e8] shadow-reguler active:shadow-active hover:border hover:border-white box-border transition-all duration-150 w-32 h-12 relative group overflow-hidden`}
    >
      <div className="flex justify-center items-center w-full h-full  absolute bottom-0 group-hover:bottom-full left-0 transition-all duration-300 ease-in-out">
        {title}
      </div>
      <span className="overflow-hidden absolute w-full h-full left-0 top-full flex justify-center items-center transition-all duration-300 ease-in-out group-hover:top-0">
        {children}
      </span>
    </button>
  );
};

export default BtnPokemon;
