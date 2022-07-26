import React from "react";

const Text = ({ className, children }) => {
  const addClass = className ? className : "";
  return <h1 className={`${addClass} font-sans text-5xl`}>{children}</h1>;
};

export default Text;
