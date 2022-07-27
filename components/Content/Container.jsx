import React from "react";

const Container = ({ className, children, ...props }) => {
  const addClass = className ? className : "";

  return (
    <div {...props} className={`container mx-auto ${addClass}`}>
      {children}
    </div>
  );
};

export default Container;
