import React from "react";

const SubTitle = ({ className, children, ...props }) => {
  const addClass = className ? className : "";

  return (
    <h3
      {...props}
      className={`font-sans font-semibold tracking-wide ${addClass}`}
    >
      {children}
    </h3>
  );
};

export default SubTitle;
